import { Column, Entity, PrimaryColumn } from 'typeorm';
// let typeorm = require('typeorm');
// let Entity = typeorm.Entity();
// let PrimaryColumn = typeorm.PrimaryColumn();
// let Column = typeorm.Column();

@Entity()
export default class Comentarios {
   @PrimaryColumn()
   id: string;

   @Column()
   nome: string;

   @Column()
   comentario: string;
}
