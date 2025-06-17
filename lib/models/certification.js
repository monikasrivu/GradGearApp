import mongoose from 'mongoose';

const CertificationSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile', required: true },
  title: String,
  issuingOrganization: String,
  issueDate: String,
  certificateLink: String
});

export default mongoose.models.Certification || mongoose.model('Certification', CertificationSchema);
