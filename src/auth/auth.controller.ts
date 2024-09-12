import { Controller, Get, Header, Param } from '@nestjs/common';
import { AuthService } from './providers/auth.service';
import { LoginAuthDto } from './dtos/login.auth.dto';
import { ApiTags } from '@nestjs/swagger';
@Controller('auth')
@ApiTags('Auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}
    @Get('/:email/:password/:id')
    public getAuthToken(@Param() param:LoginAuthDto){
        return this.authService.login(param.email,param.password,param.id)
     }
}
