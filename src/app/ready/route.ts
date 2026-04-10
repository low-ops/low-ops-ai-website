/**
 * Low-Ops health check — must return 2xx while the process is healthy.
 * @see lowops://docs/application-specification
 */
export async function GET() {
  return new Response("ok", {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
