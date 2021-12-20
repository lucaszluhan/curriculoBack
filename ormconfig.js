require('dotenv/config');

module.exports = {
   type: 'postgres',
   url: process.env.DATABASE_URL,
   synchronize: false,
   logging: false,
   entities: ['./dist/core/data/database/entities/*.js', './src/core/data/database/entities/*.ts'],
   cli: {
      entitiesDir: 'src/core/data/database/entities',
   },
   extra: {
      ssl: {
         rejectUnauthorized: false,
      },
   },
};
