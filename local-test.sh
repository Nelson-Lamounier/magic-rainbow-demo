#!/bin/bash

echo "Building and testing health check locally with dynamic ports..."

# Build image (skip if exists)
if ! docker image inspect project1-dev-test >/dev/null 2>&1; then
    echo "Building Docker image..."
    docker build -t project1-dev-test .
else
    echo "Using existing image..."
fi

# Test multiple dynamic port scenarios
test_dynamic_port() {
    local CONTAINER_PORT=$1
    local HOST_PORT=$2
    local CONTAINER_NAME="health-test-$CONTAINER_PORT"
    
    echo "Testing dynamic port: HOST:$HOST_PORT -> CONTAINER:$CONTAINER_PORT"
    
    # Run container with dynamic port mapping (simulating ECS)
    docker run -d --name $CONTAINER_NAME \
        -p $HOST_PORT:$CONTAINER_PORT \
        -e PORT=$CONTAINER_PORT \
        project1-dev-test
    
    # Wait for container to start
    echo "Waiting for container to start..."
    sleep 15
    
    # Check if container is running
    if ! docker ps | grep -q $CONTAINER_NAME; then
        echo "Container failed to start"
        docker logs $CONTAINER_NAME
        docker rm -f $CONTAINER_NAME 2>/dev/null
        return 1
    fi
    
    # Test health check endpoint
    echo "Testing health check on localhost:$HOST_PORT..."
    
    # Test with curl (like ECS ALB would)
    if curl -f -s http://localhost:$HOST_PORT/api/healthcheck > /dev/null; then
        echo "Health check passed on port $CONTAINER_PORT (host:$HOST_PORT)"
        
        # Show the response
        echo "Response:"
        curl -s http://localhost:$HOST_PORT/api/healthcheck | jq . 2>/dev/null || curl -s http://localhost:$HOST_PORT/api/healthcheck
        
    else
        echo "Health check failed on port $CONTAINER_PORT"
        echo "Container logs:"
        docker logs $CONTAINER_NAME
    fi
    
    # Test Docker's built-in health check
    echo "Testing Docker health check..."
    sleep 5
    HEALTH_STATUS=$(docker inspect --format='{{.State.Health.Status}}' $CONTAINER_NAME 2>/dev/null)
    echo "Docker health status: $HEALTH_STATUS"
    
    # Cleanup
    docker stop $CONTAINER_NAME >/dev/null 2>&1
    docker rm $CONTAINER_NAME >/dev/null 2>&1
    
    echo "---"
}

# Test different port scenarios (simulating ECS dynamic port assignment)
echo "Testing various dynamic port mappings..."

# Test standard port 3000
test_dynamic_port 3000 3000

# Test dynamic ports (like ECS would assign)
test_dynamic_port 3000 32768
test_dynamic_port 8080 32769
test_dynamic_port 5000 32770

# Test edge cases
echo "Testing edge cases..."

# Test with no PORT env var (should default to 3000)
echo "Testing with no PORT environment variable..."
docker run -d --name health-test-default -p 3001:3000 project1-dev-test
sleep 15

if curl -f -s http://localhost:3001/api/healthcheck > /dev/null; then
    echo "Default port fallback works"
else
    echo "Default port fallback failed"
fi

docker stop health-test-default >/dev/null 2>&1
docker rm health-test-default >/dev/null 2>&1

echo "Dynamic port testing complete!"