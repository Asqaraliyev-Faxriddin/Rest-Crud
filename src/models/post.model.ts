import { DataTypes } from "sequelize";
import { Column, Model, Table } from "sequelize-typescript";


@Table({tableName:"posts"})
export class Posts extends Model{

    @Column({
        type:DataTypes.STRING,
    })
    title:string

    @Column({
        type:DataTypes.STRING
    })
    body:string
}