import bcrypt from 'bcryptjs';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn, BaseEntity } from 'typeorm';
import { OrderItem } from './order-item';

@Entity('order')
export class Order  extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @OneToMany(type => OrderItem, order_item => order_item.item)
    @JoinColumn() order_items!: OrderItem

    @Column()
    subtotal!: number

    @Column()
    vat!: number

    @Column()
    total!: number

    @Column()
    token!: string

    @Column()
    total_items!: number

    @Column()
    customer_name!: string

    @Column()
    status!: string

   
}
