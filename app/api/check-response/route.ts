
import { NextResponse } from "next/server";
// @ts-ignore
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!body.formId || !body.address) {
      return NextResponse.json({ success: false, error: "formId and address are required" }, { status: 400 });
    }
    const client = await clientPromise;
    const db = client.db("VeriBee");
    const collection = db.collection("responses");
    const formDoc = await collection.findOne({ formId: body.formId });
    if (formDoc && Array.isArray(formDoc.responses)) {
      const already = formDoc.responses.find((r: any) => r.address === body.address);
      if (already) {
        return NextResponse.json({ success: true, alreadyResponded: true });
      }
    }
    return NextResponse.json({ success: true, alreadyResponded: false });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}
