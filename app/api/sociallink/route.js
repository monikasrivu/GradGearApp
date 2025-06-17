import connectDB from '@/lib/mongoose';
import SocialLinks from '@/lib/models/sociallinks';
import { NextResponse } from 'next/server';

export async function POST(req) {
  await connectDB();
  try {
    const data = await req.json();
    const newSocialLink = new SocialLinks(data);
    await newSocialLink.save();
    return NextResponse.json({ message: 'Social link added successfully' });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to add social link', error }, { status: 500 });
  }
}

export async function GET() {
  await connectDB();
  try {
    const socialLinks = await SocialLinks.find();
    return NextResponse.json({ data: socialLinks });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch social links', error }, { status: 500 });
  }
}
