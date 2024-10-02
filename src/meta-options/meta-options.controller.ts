import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MetaOptionService } from './providers/metaOption.service';
import { CreateMetaOptionDto } from './dtos/create-metaoptions.dto';

@Controller('meta-options')
@ApiTags('meta option')
export class MetaOptionsController {
    constructor(private readonly meatOptionService:MetaOptionService){}
   @ApiOperation({summary:"creates new meta option for a specific post"})
   @ApiResponse({status:201,description:"you get a response of 201 if your metaoption are created"})
    @Post()
    public createMetaOption(@Body() createMetaOptionDto:CreateMetaOptionDto){
        return this.meatOptionService.create(createMetaOptionDto)
    }
}
