import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Payment extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  productName: string;

  @Column()
  ownerEmail: string;

  @Column()
  paymentUrl: string;

  @CreateDateColumn()
  createdAt: Date;
  
  @CreateDateColumn()
  updatedAt: Date;
}