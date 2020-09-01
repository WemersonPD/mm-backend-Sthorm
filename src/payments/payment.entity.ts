import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Payment extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  productName: string;

  @Column()
  urlImage: string;

  @Column()
  price: number;

  @Column()
  returnPaymentMessage: string;

  @Column()
  ownerEmail: string;

  @CreateDateColumn()
  createdAt: Date;
  
  @CreateDateColumn()
  updatedAt: Date;
}