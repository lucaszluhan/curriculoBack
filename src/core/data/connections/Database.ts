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
      console.log(Database.connection);
      if (Database.connection == null || Database.connection == undefined) {
         try {
            Database.connection = await createConnection();
         } catch (error) {
            console.log(error);
            throw new Error('Erro ao conectar no banco');
         }
      }
   }
}

const database = new Database();

export default database;
