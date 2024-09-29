import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/users/providers/user.services';

@Injectable()
export class AuthService {

    public login(email:string,password:string,id:number){
        console.log(email,password,id)
        return "logged in sucessfully"
    }
    public isAuth(id:number){
        return {status:true,id:id}
    }
}
