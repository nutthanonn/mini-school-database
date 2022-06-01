import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Classroom } from "./Classroom";

@Entity("Student")
export class Student extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  student_id: string;

  @Column()
  student_first_name: string;

  @Column()
  student_last_name: string;

  @Column()
  student_birthday_year: number;

  @Column()
  student_tel: string;

  @ManyToOne(() => Classroom, (classroom) => classroom.student)
  @JoinColumn({
    name: "classroom_id",
  })
  classroom_id: Classroom;

  @CreateDateColumn()
  create_date: Date;

  @UpdateDateColumn()
  update_date: Date;
}
