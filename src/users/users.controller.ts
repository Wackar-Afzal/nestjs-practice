import { Controller,Get,Post,Param,Query, Body ,ParseIntPipe,DefaultValuePipe,ValidationPipe, Patch} from '@nestjs/common';
import { CreateUserDtO } from './dtos/create-user.dto';
import { GetUserParamsDto} from './dtos/get-user-params.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserService } from './providers/user.services';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
export class UsersController {

    constructor(private readonly userService:UserService){}
    @Get('/:id?')
    @ApiOperation({summary:"fetches useron base of id and queries"})
    @ApiResponse({status:200,description:"userfetched sucessfully"})
    @ApiQuery({name:"limit",type:"number",required:false,example:12,description:"number of entries return for queries"})
    @ApiQuery({name:"page",type:"number",required:false,example:123,description:"number of pages return for queries"})
    public getUsers(@Param() getUserParamsDto:GetUserParamsDto, @Query('limit',new DefaultValuePipe(10),ParseIntPipe) limit:number,@Query('page',ParseIntPipe) page:number){
        return this.userService.findOneById(getUserParamsDto.id)
    }
    @Post()
    public createUsers(@Body() createUserDtO:CreateUserDtO){
        console.log(createUserDtO,"body")
        return "create user api was request"
    }
    @Patch()
    public updateUsers(@Body() updateUserDto:UpdateUserDto){
        console.log(updateUserDto,"body")
        return "create user api was request"
    }
}
