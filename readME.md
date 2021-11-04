# siwa-jwt-secret

Sign in with Apple JWT generator. This is a tiny utility that will help you generate the JWT secret needed by Apple for Sign In With Apple (SIWA)

This tool will generate a JWT that's valid for six months, which is the longest Apple allows.

---

## Requirements

You need nodeJS and NPM installed to use this utility

## Install

    npm install -g siwa-jwt-secret

## Usage

    siwa-jwt -a <audience> -k <key file name/path> -d <key id> -i <issuer> -s <subject>

## Aliases

    siwa-jwt --aud <audience> --key <key file name/path> --keyid <key id> --iss <issuer> --sub <subject>

## Dependencies

This tool relies on jsonwebtoken, yargs, and chalk
