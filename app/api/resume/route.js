import connectDB from '@/lib/mongoose';
import Resume from '@/lib/models/resume';
import { NextResponse } from 'next/server';

export async function POST(req) {
  await connectDB();
  try {
    const data = await req.json();
    const newResume = new Resume(data);
    await newResume.save();
    return NextResponse.json({ message: 'Resume added successfully' });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to add resume', error }, { status: 500 });
  }
}

export async function GET() {
  await connectDB();
  try {
    const resumes = await Resume.find();
    return NextResponse.json({ data: resumes });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch resumes', error }, { status: 500 });
  }
}
