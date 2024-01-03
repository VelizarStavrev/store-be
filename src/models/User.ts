// Libraries
import mongoose from 'mongoose';

interface IUser {
  email: string,
  username: string,
  password: string,
  created: number,
  role: number,
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  created: {
    type: Number,
    required: true,
  },
  role: {
    type: Number,
    required: true,
  },
}, { optimisticConcurrency: true });

const User = mongoose.model<IUser>('User', userSchema);

export default User;
