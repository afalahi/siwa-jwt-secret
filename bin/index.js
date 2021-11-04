#!/usr/bin/env node

const chalk = require('chalk');
const yargs = require('yargs');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const options = yargs
  .usage('Usage: -k <private key>')
  .option('k', {
    alias: 'key',
    describe: 'Path to your Apple Private Key file',
    type: 'string',
    demandOption: true,
  })
  .usage('Usage: -a <audience>')
  .option('a', {
    alias: 'aud',
    describe: 'Your sign in with apple audience',
    type: 'string',
    demandOption: true,
  })
  .usage('Usage: -d <key id>')
  .option('d', {
    alias: 'keyid',
    describe: 'Your sign in with apple Key ID',
    type: 'string',
    demandOption: true,
  })
  .usage('Usage: -i <issuer>')
  .option('i', {
    alias: 'iss',
    describe: 'Your sign in with apple issuer value',
    type: 'string',
    demandOption: true,
  })
  .usage('Usage: -s <subject>')
  .option('s', {
    alias: 'sub',
    describe: 'Your sign in with apple Subject',
    type: 'string',
    demandOption: true,
  }).argv;

fs.readFile(options.key, (err, data) => {
  if (err) {
    console.error(err.message);
    return
  }
  jwt.sign(
    { iat: Date.now() },
    data,
    {
      algorithm: 'ES256',
      keyid: options.keyid,
      issuer: options.iss,
      audience: options.aud,
      expiresIn: '500y',
      subject: options.sub,
      header: { typ: undefined },
    },
    (err, token) => {
      if (err) {
        console.error(err);
        return
      }
      const splitToken = token.split('.');
      const purple = chalk.hex('#d63aff');
      red = chalk.hex('#fb015b');
      cyan = chalk.hex('#00b9f1');
      console.log(
        `${red(splitToken[0])}.${purple(splitToken[1])}.${cyan(splitToken[2])}`
      );
    }
  );
});
