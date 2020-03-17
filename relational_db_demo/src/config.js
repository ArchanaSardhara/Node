"use strict";

const assert = require('assert');
const dotenv = require('dotenv');

//read in .env file
dotenv.config();

// capture the environment variables the application needs
const {
  PORT,
  HOST,
  HOST_URL,
  COOKIE_ENCRYPT_PWD,
  SQL_SERVER,
  SQL_DATABASE,
  SQL_USER,
  SQL_PASSWORD,
  OKTA_ORG_URL,
  OKTA_CLIENT_ID,
  OKTA_CLIENT_SECRET
} = process.env;
console.log('process',process.env)

const sqlEncrypt = process.env.SQL_ENCRYPT === 'true';


//validate required configration info
assert(PORT, "PORT Configration is required!");
assert(HOST, "HOST Configration is required!");
assert(HOST_URL, "HOST_URL Configration is required!");
assert(COOKIE_ENCRYPT_PWD, "COOKIE_ENCRYPT_PWD Configration is required!");
assert(SQL_SERVER, "SQL_SERVER Configration is required!");
assert(SQL_DATABASE, "SQL_DATABASE Configration is required!");
assert(SQL_USER, "SQL_USER Configration is required!");
assert(SQL_PASSWORD, "SQL_PASSWORD Configration is required!");
assert(OKTA_ORG_URL, "OKTA_ORG_URL configuration is required.");
assert(OKTA_CLIENT_ID, "OKTA_CLIENT_ID configuration is required.");
assert(OKTA_CLIENT_SECRET, "OKTA_CLIENT_SECRET configuration is required.");

module.exports = {
  port: PORT,
  host: HOST,
  url: HOST_URL,
  cookiePwd: COOKIE_ENCRYPT_PWD,
  sql: {
    server: SQL_SERVER,
    database: SQL_DATABASE,
    user: SQL_USER,
    password: SQL_PASSWORD,
    options: {
      encrypt: sqlEncrypt
    },
  },
  okta: {
    url: OKTA_ORG_URL,
    clientId: OKTA_CLIENT_ID,
    clientSecret: OKTA_CLIENT_SECRET
  }
};