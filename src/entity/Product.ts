import {Entity, PrimaryGeneratedColumn, Column, Index, getRepository, ManyToOne, BaseEntity, JoinColumn} from "typeorm";
import {User} from "./User";


@Entity({ name: 'product' })
export class Product extends BaseEntity { 

  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column('varchar', { length: 50 })
  name: string = "";

  @Column('varchar', { length: 250 })
  description: string = "";

  @Column('varchar', { length: 15000, nullable: true })
  photo: string = "";

  @Column('text', { nullable: true })
  price: string = "";

  @Column({ type: "timestamptz", default: "now()" })
  createdAt: Date = new Date();

  @Column({ type: "timestamptz" })
  updatedAt: Date = new Date();

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'fk_user' })
  userId!: User;

}
