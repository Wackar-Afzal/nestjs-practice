import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { GetUserParamsDto } from "../dtos/get-user-params.dto";
import { AuthService } from "src/auth/providers/auth.service";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../user.entity";
import { Repository } from "typeorm";
import { CreateUserDtO } from "../dtos/create-user.dto";
import { ConfigService } from "@nestjs/config";

    /**
     * Service that handles operations related to Users.
     */

@Injectable()
export class UserService{


    constructor(
            /**
     * injecting user repository
     * @param userRepository 
     */

        @InjectRepository(User)
        private userRepository:Repository<User>,
    /**
     * injecting config service
     * @param userRepository 
     */

    private readonly configService:ConfigService,

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

        const environment=this.configService.get<string>('URLD')
        console.log(environment,"environment")

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
    public async findOneById(id:number){
        return await this.userRepository.findOneBy({id})
    }

}