import mongoose from 'mongoose';

const AcademicSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile', required: true },
  semester: String,
  gpa: String,
  courses: [String] // List of course names
});

export default mongoose.models.Academic || mongoose.model('Academic', AcademicSchema);
