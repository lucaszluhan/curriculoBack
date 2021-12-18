// import { createConnection, getConnection as getConnectionTypeORM } from 'typeorm';

// export const initConnection = async () => createConnection();

// export const getConnection = () => {
//    let conn = getConnectionTypeORM();

//    if (!conn) {
//       throw new Error('Database is not connected');
//    }

//    return conn;
// };

import { Connection, createConnection } from 'typeorm';

class Database {
   private static connection: Connection;

   public getConnection(): Connection {
      if (Database.connection == null || Database.connection == undefined) {
         throw new Error('CONEXAO_DATABASE_NAO_ABERTA');
      }
      return Database.connection;
   }

   public async openConnection(): Promise<void> {
      Database.connection = await createConnection();
   }
}

const database = new Database();

export default database;
