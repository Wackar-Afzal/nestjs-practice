import { ApiProperty } from "@nestjs/swagger";
import { IsJSON, IsNotEmpty, IsString } from "class-validator";
export class CreateMetaOptionDto{
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsJSON()
    metaValue:string;
}