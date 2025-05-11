#!/bin/bash
set -e

# ==== CONFIG ====
REGION="eu-west-1"
ACCOUNT_ID="711387127421"
REPO_NAME="project1-dev"
IMAGE_URI="$ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/$REPO_NAME:latest"

# ==== AUTH ====
echo "🔐 Logging into Amazon ECR..."
aws ecr get-login-password --region $REGION \
  | docker login --username AWS --password-stdin $ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com

# ==== BUILD ====
echo "🔧 Building Docker image for linux/amd64..."
docker buildx create --use || true  # Create builder if it doesn't exist
docker buildx build --platform linux/amd64 -t $REPO_NAME . --load

# ==== TAG ====
echo "🏷️ Tagging image for ECR..."
docker tag $REPO_NAME:latest $IMAGE_URI

# ==== PUSH ====
echo "📦 Pushing image to ECR..."
docker push $IMAGE_URI

echo "✅ Done. Image pushed to ECR and ready for ECS deployment."