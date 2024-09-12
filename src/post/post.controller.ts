import { Controller, Get, Param } from '@nestjs/common';
import { PostService } from './providers/post.service';
import { GetPostParamDto } from './dtos/getPostParams,dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('post')
@ApiTags("Post")
export class PostController {
   constructor(private readonly postService:PostService){}
   @Get('/:id')
   public getposts(@Param() getPostParamDto: GetPostParamDto){
    return this.postService.findAll(getPostParamDto.id)
   }

}
