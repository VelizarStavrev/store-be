// Libraries
import express from 'express';
import bcrypt from 'bcrypt';

// Middlewares
import { tokenAuth } from '../middleware/auth';

// Services
import {
  changeUserData,
  changeUserPassword,
  getUserData,
  userLogin,
  userRegister,
} from '../services/user.service';

// Types
import { Login, Register } from '../types/user';

const router = express.Router();

router.post<Register>('/register', (req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const created = new Date().getTime();
  const role = 2;
  const saltRounds = 10;

  bcrypt.hash(password, saltRounds, function(err, hash) {
    const newUser = {
      email,
      username,
      password: hash,
      created,
      role,
    };

    userRegister(newUser)
      .then((response) => {
        res.send(response);
      })
      .catch((error) => {
        console.log('An error occurred during registration.', error);
        res.send({ status: false, message: 'An error occurred!' });
      });
  });
});

router.post<Login>('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  userLogin(username, password)
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      console.log('An error occurred during login.', error);
      res.send({ status: false, message: 'An error occurred!' });
    });
});

router.get('/data', tokenAuth, (req, res) => {
  const userId = req.body.userId;

  getUserData(userId)
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      console.log('An error occurred during data retrieval.', error);
      res.send({ status: false, message: 'An error occurred!' });
    });
});

router.post('/change/data', tokenAuth, (req, res) => {
  const userId = req.body.userId;
  const email = req.body.email;

  changeUserData(userId, email)
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      console.log('An error occurred during data change.', error);
      res.send({ status: false, message: 'An error occurred!' });
    });
});

router.post('/change/password', tokenAuth, (req, res) => {
  const userId = req.body.userId;
  const password = req.body.password;
  const saltRounds = 10;

  bcrypt.hash(password, saltRounds, function(err, hash) {
    changeUserPassword(userId, hash)
      .then((response) => {
        res.send(response);
      })
      .catch((error) => {
        console.log('An error occurred during password change.', error);
        res.send({ status: false, message: 'An error occurred!' });
      });
  });
});

export default router;
