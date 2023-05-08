import { Client } from 'pg';

const client = new Client({
  host: 'localhost',
  user: 'test',
  password: '@Test123',
  port: 6500,
});

export default client;
