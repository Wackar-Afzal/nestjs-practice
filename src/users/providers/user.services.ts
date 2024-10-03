import { BadRequestException, forwardRef, Inject, Injectable, RequestTimeoutException } from "@nestjs/common";
import { GetUserParamsDto } from "../dtos/get-user-params.dto";
import { AuthService } from "src/auth/providers/auth.service";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../user.entity";
import { DataSource, Repository } from "typeorm";
import { CreateUserDtO } from "../dtos/create-user.dto";
import { ConfigService } from "@nestjs/config";
import { TimeoutError } from "rxjs";

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

    /**  */
    private readonly dataSource:DataSource
){}

/**
 * create a new user
 * @param createUserDto 
 */
public async createUser(createUserDto:CreateUserDtO){
    let existingUser=undefined

    try{
        existingUser=await this.userRepository.findOne({
            where:{email:createUserDto.email}
            })
    }catch(err){
        throw new RequestTimeoutException(
            ['unable to process your request, try again later'],
            {
                description:`Something went wrong. errorCode [usrcrte1] ${err}`
            }
        )
    }

    /**
     * already registered email exception
     */
    if(existingUser){
        throw new BadRequestException(['This email is already registered. please login using that email'])
    }

    let newUser= this.userRepository.create(createUserDto)
    try{
        newUser=await this.userRepository.save(newUser)
    }catch(err){
        throw new RequestTimeoutException(['unable to process this request, please try again later'],{
            description:`something went wrong, errorCode [usrcrte2] ${err}`,
            
        })
    }
    
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
        let user=undefined;
        try{
             user=await this.userRepository.findOneBy({id})
        }catch(err){
            throw new RequestTimeoutException(['unable to process this request, please try again later'],{
                description:`something went wrong, errorCode [usrfnde1] ${err}`,
                
            })
        }
    /**
     * user not registered email exception
     */
        if(user){
            return user
        }else{
            throw new BadRequestException('The request user is not registered.')
        }
    }

    public async createMany(dto:CreateUserDtO[]){
        let users:User[]=[]
        // create a query runner
        let queryRunner=this.dataSource.createQueryRunner();
        // connect queryrunner to datasource
        await queryRunner.connect();
        // start transction
        await queryRunner.startTransaction()
        // performing crud

        try{
            for(let user of dto){
                let newUser= queryRunner.manager.create(User,user)
                let result=await queryRunner.manager.save(newUser)
                users.push(result)
            }
            // if sucess commit 
            await queryRunner.commitTransaction();
        }catch(err){
            // trasction failed
            await queryRunner.rollbackTransaction();

        } finally{
            // releas the connection with database
            await queryRunner.release();
        }

    }

}