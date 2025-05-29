/** @format */

// pages/api/healthcheck.ts

export async function GET() {
  try {
    // Basic health check with more detailed reponse
    const healthData = {
      status: "healthy",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      port: process.env.PORT || "3000",
      environment: process.env.NODE_ENV || "development",
    };
    return Response.json(healthData, { status: 200 });
  } catch (error) {
    // Return unhealthy status if something goes wrong
    return Response.json(
      {
        status: "unhealthy",
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 503 }
    );
  }
}
