import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    Unique,
  } from 'typeorm';
  
  @Entity()
  @Unique(['name'])
  export class Products extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    name: string;

    @Column()
    urlImage: string;

    @Column()
    price: number;
  
    @Column()
    status: boolean;
  
    @Column()
    type: string;

    @CreateDateColumn()
    createdAt: Date;
  
    @CreateDateColumn()
    updatedAt: Date;
}
  