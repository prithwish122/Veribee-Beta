import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
	try {
		const body = await req.json();
		   const { address, ...info } = body;
		   if (!address) {
			   return NextResponse.json({ success: false, error: "Address is required" }, { status: 400 });
		   }
		   // Remove _id if present in info to avoid immutable field error
		   if (info._id) {
			   delete info._id;
		   }
		   const client = await clientPromise;
		   const db = client.db("VeriBee");
		   const collection = db.collection("profiles");

		   // Upsert: update if exists, insert if not
		   const result = await collection.findOneAndUpdate(
			   { address },
			   { $set: info, $setOnInsert: { address } },
			   { upsert: true, returnDocument: "after" }
		   );

		   return NextResponse.json({ success: true, data: result.value });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ success: false, error: error instanceof Error ? error.message : String(error) }, { status: 500 });
	}
}
