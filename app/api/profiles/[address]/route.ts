// app/api/profiles/[address]/route.ts
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET(
  _req: Request,
  { params }: { params: { address: string } }
) {
  const client = await clientPromise;
  const db = client.db("VeriBee");
  const profile = await db
    .collection("profiles")
    .findOne({ address: params.address });

  if (!profile)
    return NextResponse.json({ success: false, error: "Not found" }, { status: 404 });

  return NextResponse.json({ success: true, profile });
}