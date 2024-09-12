import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginAuthDto{
    @IsNotEmpty()
    @Type(()=>Number)
    id:number

    @IsNotEmpty()
   @IsEmail()
    email:string

    @IsNotEmpty()
    @IsString()
    password:string
}