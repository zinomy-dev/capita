import  { Strategy as GoogleStrategy} from "passport-google-oauth20";
import { Strategy as GithubStrategy } from "passport-github2";
import { Strategy as FacebookStrategy }  from "passport-facebook";
import passport from "passport";

const GOOGLE_CLIENT_ID =
  "your id";
const GOOGLE_CLIENT_SECRET = "your id";

import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from './constant/env.config.js'

const FACEBOOK_APP_ID = "your id";
const FACEBOOK_APP_SECRET = "your id";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      Object.defineProperty(profile, accessToken,{
        value: accessToken,
        writable: false
      });
      profile['accessToken'] = accessToken;
      console.log(accessToken);
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
