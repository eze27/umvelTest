import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn, BaseEntity, ManyToOne, OneToOne } from 'typeorm';


@Entity('item')
export class Item  {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name: string;
    
    @Column()
    price: number;

    @Column()
    @CreateDateColumn()
    created_at: Date;

    @Column()
    @UpdateDateColumn()
    updated_at: Date;
}
