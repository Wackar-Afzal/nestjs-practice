import { Type } from "class-transformer";
import { ArrayMinSize, ArrayNotEmpty, IsArray, IsDate, IsEnum, IsISO8601, IsJSON, IsNotEmpty, IsObject, IsOptional, IsString, IsUrl, Matches, MinLength, ValidateNested } from "class-validator";
import { postType } from "../enums/postType.enum";
import { status } from "../enums/status.enum";
import { CreateMetaOptionDto } from "./create-metaoptions.dto";
import { ApiProperty } from "@nestjs/swagger";
export class CreatePostDto{
    @ApiProperty({description:"Title should of type string",example:"this is example"})
    @IsNotEmpty({message:"Please provide title of post"})
    @IsString({message:"Title should of type string"})
    @MinLength(4)
    title:string;

    @ApiProperty()
    @IsNotEmpty({message:"Please provide title of post"})
    @IsEnum(postType, { message: "Post type should be one of 'post', 'page', 'story', 'series'" })
    postType:postType;

    @ApiProperty()
    @IsNotEmpty({message:"Please provide slug of post"})
    @IsString({message:"slug should of type string"})
    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/,{message:'slug should be small letters and uses only "-" without spaces forexample "my-url" '})
    slug:string;

    @ApiProperty()
    @IsNotEmpty({message:"Please provide title of post"})
    @IsEnum(status, { message: "Post type should be one of 'draft', 'scheduled', 'review', 'published'" })
    status:status;

    @ApiProperty({required: false})
    @IsString({message:"content should of type string"})
    @IsOptional()
    content?:string;

    @ApiProperty({required: false})
    @IsString({message:"schema should of type string"})
    @IsOptional()
    @IsJSON({message:"schema should be a valid JSON"})
    schema?:string;

    @ApiProperty({required: false})
    @IsUrl()
    @IsOptional()
    feautredImageUrl?:string;

    @ApiProperty({required: false})
    @IsISO8601()
    @IsOptional()
    publishedOn?: Date;

    @ApiProperty({required: false})
    @IsOptional()
    @IsArray({ message: "Tags should be an array" })
    @IsString({ each: true, message: "Each tag should be a string" })  // Ensures each item in the array is a string
    @MinLength(3,{ each: true, message: "Each tag should be of minimum 3 characters" })
    tags?: string[];

    @ApiProperty({required: false})
    @IsOptional()
    @IsArray({ message: "Meta option should be an array" })
    @ValidateNested({each: true})
    @Type(()=>CreateMetaOptionDto)
    @ArrayNotEmpty({ message: "Meta option array should not be empty" })
    @ArrayMinSize(1, { message: "Meta option array must contain at least 1 option" })
    metaOptions: CreateMetaOptionDto[];
}