import { ClassPeriod } from "./ClassPeriod";
import { Student } from "./Student";
import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Year } from "./Year";

@Entity("classroom")
export class Classroom extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  classroom_id: string;

  @Column()
  classroom_name: string;

  @ManyToOne(() => Year, (year) => year.classroom)
  @JoinColumn({
    name: "year_id",
  })
  year_id: Year;

  @OneToMany(() => Student, (student) => student.classroom_id, {
    onDelete: "SET NULL",
  })
  student: Student;

  @OneToMany(() => ClassPeriod, (classPeriod) => classPeriod.classroom_id)
  classPeriod: ClassPeriod;

  @CreateDateColumn()
  create_date: Date;

  @UpdateDateColumn()
  update_date: Date;
}
