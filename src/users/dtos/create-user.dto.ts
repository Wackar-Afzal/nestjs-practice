import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString ,IsEmail, MinLength, MaxLength, Matches} from "class-validator";


export class CreateUserDtO {
    @ApiProperty({description:"name should be minimum of 3 character and maximum of 30 character and should of type string",example:"JohnBhai",required:true})
    @IsNotEmpty({message:"Name should not be empty"})
    @IsString({message:"name should be of type string"})
    @MinLength(3,{message:"Min 3 character are required for name"})
    @MaxLength(30,{message:"name can not exceed 30 characters"})
    name:string;

    @ApiProperty({description:"email should be valid email address and should of type string",example:"JohnBhai@gmail.com",required:true})
    @IsNotEmpty({message:"email can not empty"})
    @IsEmail()
    @MaxLength(96,{message:"email can not exceed 96 characters"})
    email:string;

    @ApiProperty({description:"Password should be minimun 8 character and max 96 ,contains atleast one upper casse, one special character, one digit and should of type string",example:"John@123",required:true})
    @IsNotEmpty({message:"Password should not be empty"})
    @IsString()
    @MinLength(8,{message:"Paswword should be 8 chracter"})
    @MaxLength(96,{message:"password can not exceed 96 characters"})
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,{message:"password should contain atleast one upper casse, one special character, one digit"})
    password:string;

}