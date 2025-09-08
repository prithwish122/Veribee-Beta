// This endpoint checks if a user address is already registered in the "profiles" collection.
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const body = await req.json(); // get form data
    const { address } = body;
    if (!address) {
      return NextResponse.json({ success: false, error: "Address is required" }, { status: 400 });
    }
    const client = await clientPromise;
    const db = client.db("VeriBee"); // replace with your db name
    const collection = db.collection("profiles");

    // Check if address exists
    const existing = await collection.findOne({ address });
    if (existing) {
      return NextResponse.json({ success: true, exists: true, note: "Address already registered." });
    }

    // Insert new if not exists
    const result = await collection.insertOne(body);
    return NextResponse.json({ success: true, exists: false, insertedId: result.insertedId, note: "Address registered successfully." });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
