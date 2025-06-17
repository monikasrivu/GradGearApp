import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile', required: true },
  title: String,
  description: String,
  techStack: [String],
  githubLink: String
});

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);
