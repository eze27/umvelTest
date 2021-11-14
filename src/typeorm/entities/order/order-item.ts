import bcrypt from 'bcryptjs';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn, BaseEntity, ManyToOne, OneToOne } from 'typeorm';
import { Item } from '../item/item';
import { Order } from './order';

@Entity('order_item')
export class OrderItem extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @ManyToOne(type => Order, order => order.id) 
    @JoinColumn()
    order!: Order

    @OneToOne(type => Item) @JoinColumn()
    item!: Item
}
