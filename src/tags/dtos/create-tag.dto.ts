import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsJSON, IsNotEmpty, IsOptional, IsString, IsUrl, isURL, Matches, MaxLength, MinLength } from "class-validator";

export class CreateTagDto{
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MaxLength(256)
    @MinLength(3)
    name:string;

    @ApiProperty({description:"string having small letters and - should be used instead of space ",example:"my-first-post"})
    @IsNotEmpty({message:"Please provide slug of post"})
    @IsString({message:"slug should of type string"})
    @MaxLength(256)
    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/,{message:'slug should be small letters and uses only "-" without spaces forexample "my-url" '})
    slug:string;

    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    description?:string;

    @ApiPropertyOptional({description:"sschema should be valid json string",example:"{\"tagSchemaPost\": \"value\"}",})
    @IsJSON()
    @IsOptional()
    schema?:string;

    @ApiPropertyOptional({description:"should be a valid url",example:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvIk0nTT-VhxRW8wgWHbzQ-6KPKvSt33DcHQ&s",})
    @IsOptional()
    @IsUrl()
    @MaxLength(1024)
    featuredImage?:string;

}