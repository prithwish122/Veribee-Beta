import { NextRequest } from "next/server";
// GET: /api/save-survey?last=1 returns the last form (highest formId)
export async function GET(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db("VeriBee");
    const collection = db.collection("forms");
    const url = new URL(req.url);
    const last = url.searchParams.get("last");
    if (last === "1") {
      const lastForm = await collection.find().sort({ formId: -1 }).limit(1).toArray();
      return NextResponse.json({ success: true, lastForm: lastForm[0] || null });
    }
    return NextResponse.json({ success: false, error: "Invalid query" }, { status: 400 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const body = await req.json(); // get form data
    if (typeof body.formId !== "number") {
      return NextResponse.json({ success: false, error: "formId is required and must be a number" }, { status: 400 });
    }
    const client = await clientPromise;
    const db = client.db("VeriBee");
    const collection = db.collection("forms");

    const result = await collection.insertOne(body);

    return NextResponse.json({ success: true, insertedId: result.insertedId });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
