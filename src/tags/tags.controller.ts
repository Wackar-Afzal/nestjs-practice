import { Body, Controller, Delete, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTagDto } from './dtos/create-tag.dto';
import { TagService } from './providers/tag.service';

@Controller('tags')
@ApiTags('tags')
export class TagsController {
    constructor(private readonly tagService:TagService){}

    @ApiOperation({summary:"creates new tag for a specific post"})
    @ApiResponse({status:201,description:"you get a response of 201 if your tags are created"})
    @Post()
    public createTag(@Body() createtag:CreateTagDto){
        return this.tagService.create(createtag)
    }

    @ApiOperation({summary:"deletes tag and removes post relation also"})
    @ApiResponse({status:201,description:"you get a response of 201 if your tags are deleted"})
    @Delete()
    public delete(@Query('id',ParseIntPipe)id:number){
        return this.tagService.delete(id)

    }

    @ApiOperation({summary:"soft deletes tag and removes post relation also"})
    @ApiResponse({status:201,description:"you get a response of 201 if your tags are soft deleted"})
    @Delete('soft-delete')
    public softDelete(@Query('id',ParseIntPipe)id:number){
        return this.tagService.softDelete(id)

    }

}
