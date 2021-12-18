import { Request, Response, Router } from 'express';
import ContatoController from '../controllers/contatoControllers';

export default class ContatoRoutes {
   public init(): Router {
      const routes = Router();
      routes.post('/contatos', async (req: Request, res: Response) => {
         try {
            let { nome, telefone, email, assunto } = req.body;
            const result = new ContatoController().create(nome as string, telefone as string, email as string, assunto as string);
            res.status(200).send({ msg: result.msg, ok: result.ok });
         } catch (error) {
            res.status(500).send(error);
         }
      });
      return routes;
   }
}
