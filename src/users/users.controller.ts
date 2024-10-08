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
    @ApiOperation({summary:"fetches user on base of id and queries"})
    @ApiResponse({status:200,description:"user fetched sucessfully"})
    @ApiQuery({name:"limit",type:"number",required:false,example:12,description:"number of entries return for queries"})
    @ApiQuery({name:"page",type:"number",required:false,example:123,description:"number of pages return for queries"})
    public getUsers(@Param() getUserParamsDto:GetUserParamsDto, @Query('limit',new DefaultValuePipe(10),ParseIntPipe) limit:number,@Query('page',ParseIntPipe) page:number){
        return this.userService.getAllUsers(getUserParamsDto,limit,page)
    }

    @Get('/user/:id')
    @ApiOperation({summary:"fetches user on base of id"})
    @ApiResponse({status:200,description:"user fetched sucessfully"})
    public getUser(@Param('id',ParseIntPipe) id:number){
        return this.userService.findOneById(id)
    }


    @Post()
    @ApiOperation({summary:"creates a new user "})
    @ApiResponse({status:200,description:"user created sucessfully"})
    public createUsers(@Body() createUserDtO:CreateUserDtO){
        return this.userService.createUser(createUserDtO)
    }
    @Patch()
    public updateUsers(@Body() updateUserDto:UpdateUserDto){
        console.log(updateUserDto,"body")
        return "create user api was request"
    }
}
