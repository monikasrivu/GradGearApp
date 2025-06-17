import mongoose from 'mongoose';

const SkillSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile', required: true },
  technicalSkills: [String],
  softSkills: [String]
});

export default mongoose.models.Skill || mongoose.model('Skill', SkillSchema);
