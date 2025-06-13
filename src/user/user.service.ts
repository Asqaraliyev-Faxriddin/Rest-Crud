import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/models/user.model';

@Injectable()
export class UserService {
    constructor( @InjectModel(User) private UserModel:typeof User){}
    async Get_users(){
        let data = await this.UserModel.findAll()
        return data
    }
    async createUser(payload:Partial<User>){
        let data = await this.UserModel.create(payload)
        return data 

    }

    async DeleteUser(id: string) {
        
        let user = await this.UserModel.findOne({ where: { UserId: +id } });
        console.log(user)
        if (!user) {
            return "User Not Found"
        }
    
        await user.destroy();
        return { message: "Malumot o'chirildi.😀😀😀" };
    }
    

    async UpdateUser(payload:Partial<User>){
        let {id} = payload
        let data = await this.UserModel.update(payload,{where:{UserId:id}})
        return data 

    }


}
