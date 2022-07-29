import {config} from 'dotenv';
config({ path: '../.env' });
console.log(process.env.PORT)
export const {
    PORT = 5000,
    HOST
} = process.env;

/*export const CLIENT_URL = 'http://www.zinomy.com';
export const GITHUB_CLIENT_ID = "9fada474629ef94b09b7";
export const GITHUB_CLIENT_SECRET = "6f1f94579454beafd14c7a51d2ceda2b35afbc7c";*/
export const CLIENT_URL = 'http://localhost:3000';
export const GITHUB_CLIENT_ID = "76c012f1c56f6ba5c356";
export const GITHUB_CLIENT_SECRET = "dbf0a757f77e8d8a2c0fd5e7c8545e0661088560";
