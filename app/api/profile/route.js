import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongoose';
import Profile from '@/lib/models/profile';

export async function GET() {
  await connectDB();

  try {
    const profiles = await Profile.find();
    return NextResponse.json(profiles);
  } catch (error) {
    console.error("GET API error:", error);  // 👈 Add this line
    return NextResponse.json({ message: 'Error fetching profiles', error }, { status: 500 });
  }
}

export async function POST(req) {
  await connectDB();
  const data = await req.json();

  try {
    const newProfile = await Profile.create(data);
    return NextResponse.json(newProfile);
  } catch (error) {
    console.error("POST API error:", error);  // 👈 Add this line
    return NextResponse.json({ message: 'Error creating profile', error }, { status: 500 });
  }
}
