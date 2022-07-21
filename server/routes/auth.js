const router = require("express").Router();
const passport = require("passport");
const {Octokit} = require('octokit');
const CLIENT_URL = "http://localhost:3000/";

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      //   cookies: req.cookies
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router.get("/github", passport.authenticate("github", { scope: ['profile', 'write:org'] }));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router.get("/facebook", passport.authenticate("facebook", { scope: ["profile"] }));

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router.get('/github/orgs', async (req, res)=>{
  const octokit = new Octokit({
    auth: req.session.passport.user.accessToken
  });
  const result =  await octokit.request('GET /user/orgs', {});
  res.send(result.data)
});

router.get('/github/orgs/:org/members', async (req, res)=>{
  const octokit = new Octokit({
    auth: req.session.passport.user.accessToken
  });
  const result =  await octokit.request(`GET /orgs/${req.params.org}/members`, {});
  res.send(result.data)
});

router.get('/github/users/:user/repos', async (req, res)=>{
  const octokit = new Octokit({
    auth: req.session.passport.user.accessToken
  });
  const result =  await octokit.request(`GET /orgs/${req.params.user}/repos`, {
  })
  res.send(result.data)
});
//GET /users/${req.params.user}/repos

module.exports = router