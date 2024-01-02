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
  email: String,
  username: String,
  password: String,
  created: Number,
  role: Number,
}, { optimisticConcurrency: true });

const User = mongoose.model<IUser>('User', userSchema);

export default User;
