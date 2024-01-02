// Libraries
import mongoose from 'mongoose';

// Configs
import config from './config';

mongoose.connect(config.db_uri);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('The DB is connected!');
});

module.exports = db;
