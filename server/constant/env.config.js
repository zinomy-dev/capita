import {config} from 'dotenv';
import path from 'path';
config({ path: '../.env' });
console.log(process.env.PORT)
export const {
    PORT = 5000,
    HOST
} = process.env;

// const CLIENT_URL = 'http://ec2-54-165-74-239.compute-1.amazonaws.com';
export const CLIENT_URL = 'http://localhost:3000';


// export const GITHUB_CLIENT_ID = "9fada474629ef94b09b7";
// export const GITHUB_CLIENT_SECRET = "088bcac35dc130da43aae3b285d384e3f367c250";

export const GITHUB_CLIENT_ID = "76c012f1c56f6ba5c356";
export const GITHUB_CLIENT_SECRET = "dbf0a757f77e8d8a2c0fd5e7c8545e0661088560";