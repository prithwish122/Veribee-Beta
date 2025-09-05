import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    await client.db("admin").command({ ping: 1 });
    return new Response(JSON.stringify({ status: "ok", message: "Connected to MongoDB!" }), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ status: "error", message: e.message }), { status: 500 });
  }
}
