require('dotenv/config');

module.exports = {
   type: 'postgres',
   url: process.env.DATABASE_URL,
   synchronize: false,
   logging: false,
   entities: ['.dist/src/core/data/database/entities/**/*', 'src/core/data/database/entities/**/*'],
   cli: {
      entitiesDir: 'src/core/data/database/entities/**/*',
   },
   extra: {
      ssl: {
         rejectUnauthorized: false,
      },
   },
};
