import connectDB from '@/lib/mongoose';
import Certifications from '@/lib/models/certification';
import { NextResponse } from 'next/server';

export async function POST(req) {
  await connectDB();
  try {
    const data = await req.json();
    const newCertification = new Certifications(data);
    await newCertification.save();
    return NextResponse.json({ message: 'Certification added successfully' });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to add certification', error }, { status: 500 });
  }
}

export async function GET() {
  await connectDB();
  try {
    const certifications = await Certifications.find();
    return NextResponse.json({ data: certifications });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch certifications', error }, { status: 500 });
  }
}
