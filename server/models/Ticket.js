import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
  department: String,
  subject: String,
  message: String,
  relatedService: String,
  reply: String,
  userReply: String,
  buyer: {
    type: mongoose.ObjectId,
    ref: 'users',
  },
  status: {
    type: String,
    default: 'Open',
    enum: ['Open', 'Answered', 'Closed'],
  },
  fileUrl: String, // Add file URL field
  fileName: String, // Add file name field
}, { timestamps: true });

export default mongoose.model('Ticket', ticketSchema);
