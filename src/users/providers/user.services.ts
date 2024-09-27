import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { GetUserParamsDto } from "../dtos/get-user-params.dto";
import { AuthService } from "src/auth/providers/auth.service";

    /**
     * Service that handles operations related to Users.
     */

@Injectable()
export class UserService{
//
    constructor(
        @Inject(forwardRef(()=>AuthService))
        private readonly authService:AuthService
){}
   /**
     * Fetches all users.
     * @param getUserParamsDto - Parameters for getting users.
     * @param limit - Maximum number of users to fetch.
     * @param page - Page number for pagination.
     * @returns A list of users.
     */
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
    /**
     * getting single user by using user unique id 
     */
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