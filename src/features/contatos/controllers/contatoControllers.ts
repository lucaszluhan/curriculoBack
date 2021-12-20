import { randomUUID } from 'crypto';
import { getRepository, Repository } from 'typeorm';
import contatos from '../../../core/data/database/entities/contatos';

export default class ContatoController {
   private readonly repository: Repository<contatos>;

   constructor() {
      this.repository = getRepository(contatos);
   }

   create(nome: string, telefone: string, email: string, assunto: string) {
      try {
         const contato = this.repository.create();
         contato.id = randomUUID();
         contato.nome = nome;
         contato.telefone = telefone;
         contato.email = email;
         contato.assunto = assunto;
         this.repository.save(contato);
         return {
            ok: true,
            msg: 'Contato enviado.',
         };
      } catch (error) {
         throw new Error('Erro ao enviar novo contato');
      }
   }
}
