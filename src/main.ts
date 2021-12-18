import express from 'express';
import cors from 'cors';
import 'reflect-metadata';
import ComentarioRoutes from './features/comentarios/routes/comentarioRoutes';
import ContatoRoutes from './features/contatos/routes/contatoRoutes';
import database from './core/data/connections/Database';
import { PrimaryColumn } from 'typeorm';
require('dotenv/config');

let app = express();

app.use(express.json());
app.use(cors());

let comentarioRoutes = new ComentarioRoutes().init();
app.use(comentarioRoutes);

let contatoRoutes = new ContatoRoutes().init();
app.use(contatoRoutes);

let port = process.env.PORT || 9191;
console.log(process.env.DATABASE_URL);

app.get('/', () => {
   return {
      ola: 'ola',
   };
});

database
   .openConnection()
   .then(() => app.listen(port, () => console.log(`app rodando na porta ${port}`)))
   .catch((error) => {
      console.log(error);
   });
