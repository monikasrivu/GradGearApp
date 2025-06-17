import mongoose from 'mongoose';

const ProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  dob: String,
  department: String,
  year: String,
  profilePicture: String, // URL of uploaded image
  personalDescription: { type: String, maxlength: 150 } // max 150 words description
});

export default mongoose.models.Profile || mongoose.model('Profile', ProfileSchema);
