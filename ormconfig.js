require('dotenv/config');

module.exports = {
   type: 'postgres',
   url: process.env.DATABASE_URL,
   synchronize: false,
   logging: false,
   entities: ['./**/core/data/database/entities/*{.ts,.js}'],
   cli: {
      entitiesDir: '**/core/data/database/entities',
   },
   extra: {
      ssl: {
         rejectUnauthorized: false,
      },
   },
};
