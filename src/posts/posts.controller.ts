import { Body, Controller, Delete, Get, Post, Put ,Param} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Posts } from 'src/models/post.model';

@Controller('api')
export class PostsController {

    constructor(private readonly newPostService : PostsService ){}

    @Get("posts")
    PostsAll(){
        return this.newPostService.PostsAll()
    }

    @Post("addpost")
    PostsPost(@Body() payload:Partial<Posts>){
        return this.newPostService.PostCreate(payload)
    }

    @Put("posts/update")
    PostsUpdate(@Body() payload:Partial<Posts>){
        return this.newPostService.PostPut(payload)
    }

    @Delete("posts/delete/:id")
    PostsDelete(@Param("id") id: string){
        return this.newPostService.PostDelete(id)
    }


}
