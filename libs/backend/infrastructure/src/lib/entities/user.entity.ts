import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '@nestjs-api/shared/domain';

@Entity()
export class UserEntity implements User {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({ unique: true })
  public email!: string;

  @Column()
  public name!: string;

  @Column()
  public password!: string;
}
