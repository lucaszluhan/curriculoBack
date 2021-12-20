import { randomUUID } from 'crypto';
import { Repository, getRepository } from 'typeorm';

import comentario from '../../../core/data/database/entities/comentarios';

export default class ComentarioController {
   private readonly repository: Repository<comentario>;

   constructor() {
      this.repository = getRepository(comentario);
   }

   async list() {
      try {
         let result = await this.repository.find();
         return {
            ok: true,
            data: result,
         };
      } catch (error) {
         return {
            ok: false,
            error,
         };
      }
   }

   async create(nomeX: string, comentarioX: string) {
      try {
         const comentario = this.repository.create();
         comentario.id = randomUUID();
         comentario.nome = nomeX;
         comentario.comentario = comentarioX;
         this.repository.save(comentario);
         return {
            ok: true,
            msg: `comentario enviado.`,
         };
      } catch (error) {
         return {
            ok: false,
            msg: `Erro ao enviar comentario.`,
         };
      }
   }
}
