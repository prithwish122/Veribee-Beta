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
    const collection = db.collection("forms");
    const form = await collection.findOne({ formId: Number(formId) });
    if (!form) {
      return NextResponse.json({ success: false, error: "Form not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, json: form.json });
  } catch (error) {
    console.error("/api/specific-form error:", error);
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}
