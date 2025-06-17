import { connectDB } from "@/lib/mongoose";
import Feedback from "@/models/feedback";

export async function GET() {
  await connectDB();
  const feedbacks = await Feedback.find();
  return new Response(JSON.stringify(feedbacks), { status: 200 });
}

export async function POST(req) {
  await connectDB();
  const { message } = await req.json();
  const newFeedback = await Feedback.create({ message });
  return new Response(JSON.stringify(newFeedback), { status: 201 });
}
