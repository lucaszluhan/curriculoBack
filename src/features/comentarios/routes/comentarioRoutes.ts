import { Request, Response, Router } from 'express';
import ComentarioController from '../controllers/ComentarioController';

export default class ComentarioRoutes {
   public init(): Router {
      const routes = Router();
      routes.get('/comentarios', async (req: Request, res: Response) => {
         try {
            const result = await new ComentarioController().list();
            res.status(200).send({ ok: result.ok, data: result.data });
         } catch (error) {
            res.status(500).send(error);
         }
      });
      routes.post('/comentarios', async (req: Request, res: Response) => {
         try {
            let { nome, comentario } = req.body;
            let result = await new ComentarioController().create(nome as string, comentario as string);
            res.status(200).send({ ok: result.ok, msg: result.msg });
         } catch (error) {
            res.status(500).send(error);
         }
      });
      return routes;
   }
}
