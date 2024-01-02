// Libraries
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// Models
import User from '../models/User';

// Types
import {
  RegisterData,
  Response,
  ResponseData,
  ResponseLogin,
  ResponseRegister,
} from '../types/user-types';

// Configs
import jwtConfig from '../config/jwt';

export async function userRegister(newUserData: RegisterData): Promise<ResponseRegister> {
  const queryEmail = await User.findOne({ email: newUserData.email });
  const queryUsername = await User.findOne({ username: newUserData.username });

  if (queryEmail) {
    return { status: false, message: `User with email ${newUserData.email} already exists!`, type: 'exists-email' };
  }

  if (queryUsername) {
    return {
      status: false,
      message: `User with username ${newUserData.username} already exists!`,
      type: 'exists-username',
    };
  }

  const newUser = new User(newUserData);
  const saveResponse = await newUser.save();

  if (saveResponse) {
    return { status: true, message: 'User registered successfully!', type: 'success' };
  }

  return { status: false, message: 'An error occurred!' };
}

export async function userLogin(username: string, password: string): Promise<ResponseLogin> {
  const user = await User.findOne({ username: username });

  if (!user) {
    return { status: false, message: 'Non-existent username!' };
  }

  const passwordHash = user.password;

  const compareResult = await bcrypt.compare(password, passwordHash);

  if (!compareResult) {
    return { status: false, message: 'Wrong password!' };
  }

  const tokenPayload = {
    uname: username,
    uid: user._id,
    role: user.role,
  };

  const token = jwt.sign(tokenPayload, jwtConfig.key);

  return { status: true, message: 'User logged in successfully!', token: token };
}

export async function getUserData(userId: string): Promise<ResponseData> {
  const user = await User.findOne({ _id: userId });

  if (!user) {
    return { status: false, message: 'The user does not exist!' };
  }

  const data = { username: user.username, email: user.email };

  return { status: true, message: 'Got user data successfully!', data: data };
}

export async function changeUserData(userId: string, email: string): Promise<Response> {
  const user = await User.findOne({ _id: userId });

  if (!user) {
    return { status: false, message: 'The user does not exist!' };
  }

  user.email = email;
  user.save();

  return { status: true, message: 'User data saved successfully!' };
}

export async function changeUserPassword(userId: string, password: string): Promise<Response> {
  const user = await User.findOne({ _id: userId });

  if (!user) {
    return { status: false, message: 'The user does not exist!' };
  }

  user.password = password;
  user.save();

  return { status: true, message: 'User password saved successfully!' };
}
