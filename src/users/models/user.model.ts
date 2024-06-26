import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class UserModel extends Model {
  @Column({
    unique: true,
    primaryKey: true,
  })
  username: string;

  @Column
  password: string;

  @Column
  fullName: string;
}
