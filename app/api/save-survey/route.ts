import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const body = await req.json(); // get form data
    const client = await clientPromise;
    const db = client.db("VeriBee"); // replace with your db name
    const collection = db.collection("forms");

    const result = await collection.insertOne(body);

    return NextResponse.json({ success: true, insertedId: result.insertedId });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
