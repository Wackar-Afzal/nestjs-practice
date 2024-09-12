import { Type } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export class GetPostParamDto{
    @IsNotEmpty()
    @Type(()=>Number)
    id?:number
}