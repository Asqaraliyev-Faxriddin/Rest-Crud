import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { UserModule } from './user/user.module.js';
import { PostsModule } from './posts/posts.module';
import { Posts } from './models/post.model';

@Module({
  imports: [SequelizeModule.forRoot({
    username:"postgres",
    port:5432,
    database:"dars6",
    password:"11201111",
    dialect:"postgres",
    host:"localhost",
    autoLoadModels:true,
    synchronize:true,
    models:[User,Posts]
  }),
  UserModule,
  PostsModule
],
 
})

export class AppModule {}
