import connectDB from '@/lib/mongoose';
import Projects from '@/lib/models/project';
import { NextResponse } from 'next/server';

export async function POST(req) {
  await connectDB();
  try {
    const data = await req.json();
    const newProject = new Projects(data);
    await newProject.save();
    return NextResponse.json({ message: 'Project added successfully' });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to add project', error }, { status: 500 });
  }
}

export async function GET() {
  await connectDB();
  try {
    const projects = await Projects.find();
    return NextResponse.json({ data: projects });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch projects', error }, { status: 500 });
  }
}
