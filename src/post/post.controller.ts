import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  findAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const post = this.postService.findOne(+id);
    if (!post) throw new HttpException('Post Not Found', HttpStatus.NOT_FOUND);

    return post;
  }
}
