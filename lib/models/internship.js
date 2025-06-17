import mongoose from 'mongoose';

const InternshipSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile', required: true },
  companyName: String,
  role: String,
  duration: String,
  description: String
});

export default mongoose.models.Internship || mongoose.model('Internship', InternshipSchema);
