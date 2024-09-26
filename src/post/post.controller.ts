import { Controller, Get, Param, Post,Body, Patch } from '@nestjs/common';
import { PostService } from './providers/post.service';
import { GetPostParamDto } from './dtos/getPostParams,dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';
import { PatchPostDto } from './dtos/patch-post.dto';

@Controller('post')
@ApiTags("Post")
export class PostController {
   constructor(private readonly postService:PostService){}
   @Get('/:id')
   public getposts(@Param() getPostParamDto: GetPostParamDto){
    return this.postService.findAll(getPostParamDto.id)
   }

   @ApiOperation({summary:"creates a new post"})
   @ApiResponse({status:201,description:"you get a response of 201 if your post is created"})
   @Post()
   public createPost(@Body() createPostDto:CreatePostDto){
      console.log(createPostDto)
   }

   
   @ApiOperation({summary:"update a post"})
   @ApiResponse({status:200,description:"you get a response of 200 if your post is updated"})
   @Patch()
   public updatePost(@Body() patchPostDto: PatchPostDto){
      console.log(patchPostDto)
   }
}
