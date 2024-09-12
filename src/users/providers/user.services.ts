import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { GetUserParamsDto } from "../dtos/get-user-params.dto";
import { AuthService } from "src/auth/providers/auth.service";

@Injectable()
export class UserService{

    constructor(
        @Inject(forwardRef(()=>AuthService))
        private readonly authService:AuthService
){}

    public getAllUsers(getUserParamsDto:GetUserParamsDto,limit:number,page:number){
        return[
            {name:"waqar",
             email:"waqar@wa.com"
            },
            {name:"wiqi",
                email:"wiqir@wa.com"
            },
        ]
    }
    public findOneById(userId:number){
        const authenticated=this.authService.isAuth(userId)
        console.log(userId,"userid in user service")
        return {name:"waqar",
             email:"waqar@wa.com",
             id:userId,
             authenticated
            }
        
    }

}