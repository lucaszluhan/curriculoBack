require('dotenv/config');

module.exports = {
   type: 'postgres',
   url: process.env.DATABASE_URL,
   synchronize: false,
   logging: false,
   entities: ['src/core/data/database/entities/*.ts', './.dist/core/data/database/entities/*.js'],
   cli: {
      entitiesDir: 'src/core/data/database/entities',
   },
   extra: {
      ssl: {
         rejectUnauthorized: false,
      },
   },
};
