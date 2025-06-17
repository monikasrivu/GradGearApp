import mongoose from 'mongoose';

const SocialLinkSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile', required: true },
  linkedIn: String,
  github: String,
  portfolio: String
});

export default mongoose.models.SocialLink || mongoose.model('SocialLink', SocialLinkSchema);
