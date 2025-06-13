import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { where } from 'sequelize';
import { Posts } from 'src/models/post.model';

@Injectable()
export class PostsService {
constructor(@InjectModel(Posts) private newPost: typeof Posts){}

    async PostsAll(){
        let data = await this.newPost.findAll()
        return data
    }

    async PostCreate(payload:Partial<Posts>){
        let {title,body} = payload
        if(!title){
            return "Titleni kiriting!!!"
        }
        if(!body){
            return "bodyni kiriting!!!"
        }

        let data = await this.newPost.create(payload)
        return " Malumotlar Muffaqiyatli qo'shildi.😀😀😀"
    }

    async PostPut(payload:Partial<Posts>){
        let {id } =payload
        if(!id){
            return "Idni kiritmadingiz"
        }
        let data = await this.newPost.update(payload,{where:{
            id
        }})
        let data2 = await this.newPost.findOne(id)

        return {
            message:"Malumot o'zgartirildi.😀😀😀",
            data:data2
        }
    }

    async PostDelete(id:string){
        
        let data = await this.newPost.destroy({where:{id:+id}})
        return {
            message:"Malumot o'chirildi.😀😀😀",
        }
    }
}