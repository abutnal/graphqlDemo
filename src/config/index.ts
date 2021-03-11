import {config}  from 'dotenv';
config();
export const {
  PORT,
  DB,
  MODE 
} = process.env