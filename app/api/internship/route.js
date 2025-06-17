import connectDB from '@/lib/mongoose';
import Internships from '@/lib/models/internship';
import { NextResponse } from 'next/server';

export async function POST(req) {
  await connectDB();
  try {
    const data = await req.json();
    const newInternship = new Internships(data);
    await newInternship.save();
    return NextResponse.json({ message: 'Internship added successfully' });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to add internship', error }, { status: 500 });
  }
}

export async function GET() {
  await connectDB();
  try {
    const internships = await Internships.find();
    return NextResponse.json({ data: internships });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch internships', error }, { status: 500 });
  }
}
