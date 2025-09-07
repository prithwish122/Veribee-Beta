import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
// @ts-ignore

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!body.formId || !body.response || !body.address) {
      return NextResponse.json({ success: false, error: "formId, response, and address are required" }, { status: 400 });
    }
    const client = await clientPromise;
    const db = client.db("VeriBee");
    const collection = db.collection("responses");

    // Try to update (push) if formId exists and address not present
    const updateResult = await collection.updateOne(
      {
        formId: body.formId,
        "responses.address": { $ne: body.address }
      },
      {
        $push: {
          responses: {
            address: body.address,
            response: body.response,
            createdAt: new Date()
          }
        }
      }
    );

    if (updateResult.matchedCount === 0) {
      // Either formId doesn't exist, or address already responded
      // Check if formId exists
      const formDoc = await collection.findOne({ formId: body.formId });
      if (formDoc) {
        // Address already responded
        const already = formDoc.responses?.find((r: any) => r.address === body.address);
        if (already) {
          return NextResponse.json({ success: false, error: "You have already responded to this survey." }, { status: 409 });
        }
      }
      // formId does not exist, create new
      const newDoc = {
        formId: body.formId,
        responses: [
          {
            address: body.address,
            response: body.response,
            createdAt: new Date()
          }
        ]
      };
      const result = await collection.insertOne(newDoc);
      return NextResponse.json({ success: true, insertedId: result.insertedId });
    }
    // Successfully pushed
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}
