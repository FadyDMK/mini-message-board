const {Client} = require('pg');
require('dotenv').config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  text VARCHAR(255),
  username VARCHAR(40),
  added TIMESTAMP DEFAULT NOW()
);
INSERT INTO messages (text, username) VALUES ('Hi there!', 'Amando');
`;

async function main() {
    console.log("seeding...");
    const client = new Client({
                        
      connectionString: `postgresql://${process.env.ROLE}:${process.env.ROLE_PWD}@${process.env.HOST}/${process.env.DB_NAME}?ssl=true`,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
  }
  
  main();