import mongoose from 'mongoose';

const ResumeSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile', required: true },
  resumeFile: String // URL/path of uploaded resume file (PDF or image)
});

export default mongoose.models.Resume || mongoose.model('Resume', ResumeSchema);
