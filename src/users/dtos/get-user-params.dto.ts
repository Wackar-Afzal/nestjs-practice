import { ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {  IsInt, IsNumber, IsOptional } from "class-validator";
export class GetUserParamsDto{
    @ApiPropertyOptional({description:"Get user by id",example:12345})
    @IsOptional()
    @IsInt()
    @Type(()=>Number)
    id?:number;
}