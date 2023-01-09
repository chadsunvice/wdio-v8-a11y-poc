// const baseConfig = require('./wdio.conf').config;
import { config as baseConfig } from './wdio.conf.js';

const sauceConfig = Object.assign(baseConfig, {
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,
  maxInstances: 1,
  region: 'eu',
  services: [
    ['sauce', {
      sauceConnect: false,
      sauceConnectOpts: {
      },
    }],
  ],
});

export { sauceConfig as config };
