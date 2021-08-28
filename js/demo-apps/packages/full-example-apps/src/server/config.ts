import fs from 'fs';
import path from 'path';

import dotenv from 'dotenv';
import findUp from 'find-up';

export const IS_DEV = process.env.NODE_ENV !== 'production';

if (IS_DEV) {
  dotenv.config({ path: findUp.sync('.env') });
}

const packageJsonPath = path.join(process.cwd(), 'package.json');
const rawPackageJson = fs.readFileSync(packageJsonPath).toString();
const PackageJson = JSON.parse(rawPackageJson);
const { version: VERSION } = PackageJson;

// server
export const SERVER_PORT = process.env.PORT || 3000;
export const WEBPACK_PORT = 8085; // For dev environment only

const config = { IS_DEV, VERSION, SERVER_PORT, WEBPACK_PORT };

export default config;