require('dotenv').config();

module.exports = {
   type: 'postgres',
   url: process.env.DATABASE_URL,
   synchronize: false,
   logging: false,
   entities: ['src/core/data/database/entities/**/*'],
   cli: {
      entitiesDir: 'src/core/data/database/entities',
   },
   extra: {
      ssl: true,
      ssl: {
         rejectUnauthorized: false,
      },
   },
};
