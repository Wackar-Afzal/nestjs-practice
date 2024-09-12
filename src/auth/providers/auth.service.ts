import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/users/providers/user.services';

@Injectable()
export class AuthService {
    constructor(
        @Inject(forwardRef(()=>UserService))

        private readonly userService:UserService
    ){}
    public login(email:string,password:string,id:number){
        console.log(email,password,id)
        const user=this.userService.findOneById(id)
        return "logged in sucessfully"
    }
    public isAuth(id:number){
        return {status:true,id:id}
    }
}
