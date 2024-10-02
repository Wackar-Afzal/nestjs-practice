import { ApiProperty } from "@nestjs/swagger";
import { IsJSON, IsNotEmpty, IsString } from "class-validator";
export class CreateMetaOptionDto{
    @ApiProperty({description:"metavalue sholud be valid json",example: "{\"keyMetaOptionDTo\": \"value\"}"})
    @IsString()
    @IsNotEmpty()
    @IsJSON()
    metaValue:string;
}