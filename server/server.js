'use strict';

// express
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const urlParser = bodyParser.urlencoded({ extended: false });
// redis
const redis = require('redis');
const redisStore = require('connect-redis')(session);
// passport
const passport = require('passport');
const localStrategy = require('passport-local');
// encryption
const bcrypt = require('bcryptjs');

// source data (routes)
const login = require('./routes/login.js');
const users = require('./routes/users.js');

const app = express();

require('dotenv').config();
const PORT = process.env.EXPRESS_CONTAINER_PORT;

app.use(bodyParser.json());
app.use(urlParser);
app.use(cookieParser());

let client = redis.createClient({ url: process.env.REDIS_URL });

app.use(
  session({
    store: new redisStore({ client }),
    secret: process.env.REDIS_SECRET,
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(passport.initialize());
app.use(passport.session());

// route middleware
app.use('/api/login', login);
app.use('/api/users', users);

// validate credentials
passport.use(
  new localStrategy(function(username, password, done) {
    return new User({ username: username })
      .fetch()
      .then((user) => {
        if (user === null) {
          // bad username
          return done(null, false, { message: 'bad username or password' });
        } else {
          user = user.toJSON();
          bcrypt.compare(password, user.password).then((res) => {
            if (res) {
              return done(null, user);
            } else {
              // bad password
              return done(null, false, { message: 'bad username or password' });
            }
          });
        }
      })
      .catch((err) => {
        console.log('error:', err);
        return done(err);
      });
  }),
);

// will fire if session id/user (in session storage) + cookie (user's) && outside of public route
passport.deserializeUser(function(user, done) {
  console.log('deserializing');
  console.log(user);

  return new User({ id: user.id }).fetch().then((user) => {
    user = user.toJSON();
    done(null, {
      id: user.id,
      username: user.username,
      name: user.name,
      email: user.email,
      address: user.address,
    });
  });
});

const server = app.listen(PORT, () => {
  console.log(`Express app is listening on port ${PORT}`);
});
