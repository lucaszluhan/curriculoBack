import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export default class comentarios {
   @PrimaryColumn()
   id: string;

   @Column()
   nome: string;

   @Column()
   comentario: string;
}
