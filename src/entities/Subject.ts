import { ClassPeriod } from "./ClassPeriod";
import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
} from "typeorm";

@Entity("subject")
export class Subject extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  subject_id: string;

  @Column()
  subject_name: string;

  @OneToOne(() => ClassPeriod, (classPeriod) => classPeriod.subject_id, {
    onDelete: "SET NULL",
  })
  classPeriod: ClassPeriod;

  @CreateDateColumn()
  create_date: Date;

  @UpdateDateColumn()
  update_date: Date;
}
