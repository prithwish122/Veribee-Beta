import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url!);
    const formId = url.searchParams.get("formId");
    if (!formId) {
      return NextResponse.json({ success: false, error: "formId is required" }, { status: 400 });
    }
    const client = await clientPromise;
    const db = client.db("VeriBee");
    const collection = db.collection("responses");
    const doc = await collection.findOne({ formId: Number(formId) });
    if (!doc || !Array.isArray(doc.responses)) {
      return NextResponse.json({ success: true, responses: [] });
    }
    // Return only the response objects (not address)
    const usersResponses = doc.responses.map((r: any) => r.response);
    return NextResponse.json({ success: true, responses: usersResponses });
  } catch (error) {
    console.error("/api/responses error:", error);
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}
