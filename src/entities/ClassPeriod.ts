import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { Classroom } from "./Classroom";
import { Subject } from "./Subject";
import { Teacher } from "./Teacher";

@Entity("classPeriod")
export class ClassPeriod extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  classPeriod_id: string;

  @Column()
  classPeriod_name: string;

  @OneToOne(() => Subject, (subject) => subject.classPeriod)
  @JoinColumn({
    name: "subject_id",
  })
  subject_id: Subject;

  @ManyToOne(() => Teacher, (teacher) => teacher.classPeriod)
  @JoinColumn({
    name: "teacher_id",
  })
  teacher_id: Teacher;

  @ManyToOne(() => Classroom, (classroom) => classroom.classPeriod)
  @JoinColumn({
    name: "classroom_id",
  })
  classroom_id: Classroom;

  @CreateDateColumn()
  create_date: Date;

  @UpdateDateColumn()
  update_date: Date;
}
