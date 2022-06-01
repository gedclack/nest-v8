import { Injectable } from '@nestjs/common';
import { Post } from './post.interface';
import * as POSTS from './posts.json';

@Injectable()
export class PostService {
  findAll(): Post[] {
    return POSTS;
  }

  findOne(id: number): Post {
    return POSTS.find((p: Post) => p.id === id);
  }
}
