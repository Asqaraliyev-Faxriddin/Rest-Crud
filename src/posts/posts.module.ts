import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Posts } from 'src/models/post.model';

@Module({
    imports:[SequelizeModule.forFeature([Posts])],
    controllers:[PostsController],
    providers:[PostsService]
})
export class PostsModule {}
