import mongoose from 'mongoose';

const FeedbackSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Feedback || mongoose.model('Feedback', FeedbackSchema);
