import { IsNotEmpty, IsString ,IsEmail, MinLength, MaxLength, Matches} from "class-validator";
export class CreateUserDtO {
    @IsNotEmpty({message:"Name should not be empty"})
    @IsString({message:"name should be of type string"})
    @MinLength(3,{message:"Min 3 character are required for name"})
    @MaxLength(30,{message:"name can not exceed 30 characters"})
    name:string;

    @IsNotEmpty({message:"email can not empty"})
    @IsEmail()
    email:string;

    @IsNotEmpty({message:"Password should not be empty"})
    @IsString()
    @MinLength(8,{message:"Paswword should be 8 chracter"})
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,{message:"password should contain atleast one upper casse, one special character, one digit"})
    password:string;

}