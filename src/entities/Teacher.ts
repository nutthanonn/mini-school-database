import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { IsEmail } from "class-validator";
import { ClassPeriod } from "./ClassPeriod";

@Entity("teacher")
export class Teacher extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  teacher_id: string;

  @Column()
  teacher_first_name: string;

  @Column()
  teacher_last_name: string;

  @Column()
  teacher_birthday_year: number;

  @Column()
  teacher_tel: string;

  @Column()
  @IsEmail()
  teacher_email: string;

  @OneToMany(() => ClassPeriod, (classPeriod) => classPeriod.teacher_id, {
    onDelete: "SET NULL",
  })
  classPeriod: ClassPeriod;

  @CreateDateColumn()
  create_date: Date;

  @UpdateDateColumn()
  update_date: Date;
}
