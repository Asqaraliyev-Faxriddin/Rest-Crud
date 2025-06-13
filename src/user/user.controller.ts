import { Body, Controller, Get, Post ,Delete,Put, Param} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/models/user.model';

@Controller("api")
export class UserController {
constructor(private readonly newUserService: UserService){

}

    @Get("users")
    Get_users(){
        return this.newUserService.Get_users()
    }

    @Post("user/post")
    Post_User(@Body() payload: Partial<User>){
        return this.newUserService.createUser(payload)
    }

    @Delete("user/delete/:id")
    Delete_User(@Param("id") id: string){
        return this.newUserService.DeleteUser(id)
    }

    @Put("User/update")
    Update_User(@Body() payload: Partial<User>){
        return this.newUserService.UpdateUser(payload)
    }
}
