import connectDB from '@/lib/mongoose';
import Academics from '@/lib/models/academic';
import { NextResponse } from 'next/server';

export async function POST(req) {
  await connectDB();
  try {
    const data = await req.json();
    const newAcademic = new Academics(data);
    await newAcademic.save();
    return NextResponse.json({ message: 'Academic record added successfully' });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to add academic record', error }, { status: 500 });
  }
}

export async function GET() {
  await connectDB();
  try {
    const academics = await Academics.find();
    return NextResponse.json({ data: academics });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch academic records', error }, { status: 500 });
  }
}
