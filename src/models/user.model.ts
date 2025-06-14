import { DataTypes } from "sequelize"
import {Table,Model,Column} from "sequelize-typescript"

@Table({tableName:"users"})
export class User extends Model{
    
@Column({
    type:DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true,

})
UserId:number

@Column({
    type:DataTypes.STRING,
    unique:true,
})
    username:string

@Column({
    type:DataTypes.STRING,
    
})
password:string

@Column({
    type:DataTypes.STRING
})
email:string



}