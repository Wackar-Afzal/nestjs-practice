import { Injectable } from "@nestjs/common";
import { UserService } from "src/users/providers/user.services";

@Injectable()
export class PostService{
    // injecting user service
    constructor(private readonly userService:UserService){}
    public findAll(userId:number){
     const user=this.userService.findOneById(userId)
     console.log(user,"user")
        return[
            {id:"1",title:"title1",text:"text1",userId:user.id},
            {id:"2",title:"title2",text:"text2",userId:user.id}
        ]
    }
}