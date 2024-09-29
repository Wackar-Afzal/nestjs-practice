import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { GetUserParamsDto } from "../dtos/get-user-params.dto";
import { AuthService } from "src/auth/providers/auth.service";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../user.entity";
import { Repository } from "typeorm";
import { CreateUserDtO } from "../dtos/create-user.dto";

    /**
     * Service that handles operations related to Users.
     */

@Injectable()
export class UserService{
/**
 * injecting user repository
 * @param userRepository 
 */
    constructor(

        @InjectRepository(User)
        private userRepository:Repository<User>,

){}

/**
 * create a new user
 * @param createUserDto 
 */
public async createUser(createUserDto:CreateUserDtO){
    const existingUser=await this.userRepository.findOne({
    where:{email:createUserDto.email}
    })

    let newUser= this.userRepository.create(createUserDto)
     newUser=await this.userRepository.save(newUser)
     return newUser
}
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
        // const authenticated=this.authService.isAuth(userId)
        // console.log(userId,"userid in user service")
        return {name:"waqar",
             email:"waqar@wa.com",
             id:userId,
            }
        
    }

}