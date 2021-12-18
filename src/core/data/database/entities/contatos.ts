import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export default class Contatos {
   @PrimaryColumn()
   id: string;

   @Column()
   nome: string;

   @Column()
   telefone: string;

   @Column()
   email: string;

   @Column()
   assunto: string;
}
