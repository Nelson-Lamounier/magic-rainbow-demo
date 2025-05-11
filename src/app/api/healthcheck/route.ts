/** @format */

// pages/api/healthcheck.ts

export async function GET() {
  return new Response("ok", { status: 200 });
}
