import { Controller, Get, Param, Post,Body, Patch, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { PostService } from './providers/post.service';
import { GetPostParamDto } from './dtos/getPostParams,dto';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';
import { PatchPostDto } from './dtos/patch-post.dto';

@Controller('post')
@ApiTags("Post")
export class PostController {
   constructor(
      /**
      *  Injecting Posts Service
      */
      private readonly postService:PostService){}


      @ApiOperation({ summary: 'Find posts by user ID' })
      @ApiParam({
         name: 'userId',
         required: true,
         description: 'ID of the user to fetch posts for',
         type: 'string',
       })
      @ApiResponse({ status: 200, description: 'Returns an array of posts for the specified user' })
      @ApiResponse({ status: 404, description: 'User not found' })
      @Get('/:userId')
      public getPosts(@Param('userId') userId: string) {
        return this.postService.findAll(userId);
      }
    

   @ApiOperation({summary:"creates a new post"})
   @ApiResponse({status:201,description:"you get a response of 201 if your post is created"})
   @Post()
   public createPost(@Body() createPostDto:CreatePostDto){
      return this.postService.create(createPostDto)
   }

   
   @ApiOperation({summary:"update a post"})
   @ApiResponse({status:200,description:"you get a response of 200 if your post is updated"})
   @Patch()
   public updatePost(@Body() patchPostDto: PatchPostDto){
      return this.postService.update(patchPostDto)
   }

   @ApiOperation({summary:"delete a post and its related metaoption"})
   @ApiResponse({status:200,description:"you get a response of 200 if your post is deleted"})
   @Delete()
   public deletePost(@Query('id', ParseIntPipe) id:number){
      return this.postService.delete(id)
   }


}
