import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Classroom } from "./Classroom";

@Entity("year")
export class Year extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  year_id: string;

  @Column()
  year_name: string;

  @OneToMany(() => Classroom, (classroom) => classroom.year_id, {
    onDelete: "SET NULL",
  })
  classroom: Classroom;

  @CreateDateColumn()
  create_date: Date;

  @UpdateDateColumn()
  update_date: Date;
}
