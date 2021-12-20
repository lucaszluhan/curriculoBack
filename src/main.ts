import express from 'express';
import cors from 'cors';
import 'reflect-metadata';
import ComentarioRoutes from './features/comentarios/routes/comentarioRoutes';
import ContatoRoutes from './features/contatos/routes/contatoRoutes';
import database from './core/data/connections/Database';
require('dotenv/config');

let app = express();

app.use(express.json());

let comentarioRoutes = new ComentarioRoutes().init();
app.use(comentarioRoutes);

let contatoRoutes = new ContatoRoutes().init();
app.use(contatoRoutes);

let port = process.env.PORT || 9191;

database
   .openConnection()
   .then(() => app.listen(port, () => console.log(`app rodando na porta ${port}`)))
   .catch((error) => {
      console.log(error);
   });
