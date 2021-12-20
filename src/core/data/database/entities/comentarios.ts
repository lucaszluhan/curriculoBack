import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export default class Comentarios {
   @PrimaryColumn()
   id: string;

   @Column()
   nome: string;

   @Column()
   comentario: string;
}
