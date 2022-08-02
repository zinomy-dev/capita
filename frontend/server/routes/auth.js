import {Router} from "express";
import passport from "passport";
import {Octokit} from 'octokit';
import {CLIENT_URL} from '../constant/env.config.js'
import DataModel from "data-model";
import domainModel from '../constant/domain-model.js';

const dbConfig = `mongodb+srv://zinomyDev:Cosmic321!@clustercapita.slmm8l0.mongodb.net/data_model?retryWrites=true&w=majority`;
const ORM = new DataModel({
    "domainModel": domainModel,
    "dbConfig": dbConfig
});
// const CLIENT_URL = "http://ec2-54-165-74-239.compute-1.amazonaws.com";
const router = Router();
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

router.get("/google", passport.authenticate("google", {scope: ["profile"]}));

router.get(
    "/google/callback",
    passport.authenticate("google", {
        successRedirect: CLIENT_URL,
        failureRedirect: "/login/failed",
    })
);

router.get("/github", passport.authenticate("github", {scope: ['profile', 'write:org']}));

router.get(
    "/github/callback",
    passport.authenticate("github", {
        successRedirect: CLIENT_URL,
        failureRedirect: "/login/failed",
    })
);

router.get("/facebook", passport.authenticate("facebook", {scope: ["profile"]}));
console.log(CLIENT_URL)
router.get(
    "/facebook/callback",
    passport.authenticate("facebook", {
        successRedirect: CLIENT_URL,
        failureRedirect: "/login/failed",
    })
);

router.get('/github/orgs', async (req, res) => {
    const octokit = new Octokit({
        auth: req.session.passport.user.accessToken
    });
    const result = await octokit.request('GET /user/orgs', {});
    res.send(result.data)
});

router.get('/github/orgs/:org/members', async (req, res) => {
    const octokit = new Octokit({
        auth: req.session.passport.user.accessToken
    });
    const result = await octokit.request(`GET /orgs/${req.params.org}/members`, {});
    res.send(result.data)
});

router.get('/github/users/:user/repos', async (req, res) => {
    const octokit = new Octokit({
        auth: req.session.passport.user.accessToken
    });
    const result = await octokit.request(`GET /orgs/${req.params.user}/repos`, {})
    res.send(result.data)
});

router.post('/contracts', async (req, res) => {
    const _payload = req.body;
    _payload['created'] = new Date().toString();
    _payload['action'] = 'I';
    ORM.DataContainer.addData('contract', _payload);
    await ORM.DataContainer.write();
   const  contract = ORM.DataContainer._entityCollection.get('contract')[0];
   res.send(contract.toJSON());

});

router.get('/contract/:projectId', async (req, res) => {
    await ORM.DataContainer.read({
        query: {
            filter: [
                {
                    fieldName: 'projectId',
                    comparator: '=',
                    value: req.params.projectId
                }
            ],
            domain: 'contract',
            fields: Object.keys(domainModel.contract.fields),
            childQuery: []
        }
    });
    const contract = ORM.DataContainer._entityCollection.get('contract')[0];
    res.send(contract.toJSON);
});
export default router