import { NextResponse } from "next/server";
import connectDB from "@/lib/mongoose";
import Note from "@/models/Note";

export async function GET() {
  await connectDB();
  const notes = await Note.find();
  return NextResponse.json(notes);
}

export async function POST(request) {
  await connectDB();
  const { title, text } = await request.json();
  const newNote = await Note.create({ title, text });
  return NextResponse.json(newNote);
}
