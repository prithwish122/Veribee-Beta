// This endpoints retrieves all forms from the "forms" collection
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";


export async function GET() {
	try {
		const client = await clientPromise;
		const db = client.db("VeriBee");
		const collection = db.collection("forms");
		const forms = await collection.find({}).sort({ formId: -1 }).toArray();
		return NextResponse.json({ success: true, forms });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ success: false, error: error instanceof Error ? error.message : String(error) }, { status: 500 });
	}
}
