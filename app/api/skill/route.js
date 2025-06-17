import connectDB from '@/lib/mongoose';
import Skills from '@/lib/models/skills';
import { NextResponse } from 'next/server';

export async function POST(req) {
  await connectDB();
  try {
    const data = await req.json();
    const newSkill = new Skills(data);
    await newSkill.save();
    return NextResponse.json({ message: 'Skill added successfully' });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to add skill', error }, { status: 500 });
  }
}

export async function GET() {
  await connectDB();
  try {
    const skills = await Skills.find();
    return NextResponse.json({ data: skills });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch skills', error }, { status: 500 });
  }
}
