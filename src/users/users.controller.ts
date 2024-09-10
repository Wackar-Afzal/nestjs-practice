import { Controller,Get,Post,Param,Query, Body ,ParseIntPipe,DefaultValuePipe} from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get('/:id?')
    public getUsers(@Param('id',ParseIntPipe) id:number|undefined, @Query('limit',new DefaultValuePipe(10),ParseIntPipe) limit:number,@Query('page',ParseIntPipe) page:number){
        console.log(id,"param",limit,"limit")
        return "get user api was request"
    }
    @Post()
    public createUsers(@Body() body:any){
        console.log(body,"body")
        return "create user api was request"
    }
}
