import { Type } from "class-transformer";
import { ArrayMinSize, ArrayNotEmpty, IsArray, IsDate, IsEnum, IsISO8601, IsJSON, IsNotEmpty, IsObject, IsOptional, IsString, IsUrl, Matches, MinLength } from "class-validator";
import { postType } from "../enums/postType.enum";
import { status } from "../enums/status.enum";
export class CreatePostDto{
    @IsNotEmpty({message:"Please provide title of post"})
    @IsString({message:"Title should of type string"})
    @MinLength(4)
    title:string;

    @IsNotEmpty({message:"Please provide title of post"})
    @IsEnum(postType, { message: "Post type should be one of 'post', 'page', 'story', 'series'" })
    postType:postType;

    @IsNotEmpty({message:"Please provide slug of post"})
    @IsString({message:"slug should of type string"})
    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/,{message:'slug should be small letters and uses only "-" without spaces forexample "my-url" '})
    slug:string;

    @IsNotEmpty({message:"Please provide title of post"})
    @IsEnum(status, { message: "Post type should be one of 'draft', 'scheduled', 'review', 'published'" })
    status:status;

    @IsString({message:"content should of type string"})
    @IsOptional()
    content?:string;

    @IsString({message:"schema should of type string"})
    @IsOptional()
    @IsJSON({message:"schema should be a valid JSON"})
    schema?:string;

    @IsUrl()
    @IsOptional()
    feautredImageUrl?:string;

    @IsISO8601()
    @IsOptional()
    publishedOn?: Date;

    @IsOptional()
    @IsArray({ message: "Tags should be an array" })
    @IsString({ each: true, message: "Each tag should be a string" })  // Ensures each item in the array is a string
    @MinLength(3,{ each: true, message: "Each tag should be of minimum 3 characters" })
    tags?: string[];

    @IsNotEmpty({ message: "Please provide meta option of post" })
    @IsArray({ message: "Meta option should be an array" })
    @ArrayNotEmpty({ message: "Meta option array should not be empty" })
    @ArrayMinSize(1, { message: "Meta option array must contain at least 1 option" })
    @IsObject({ each: true, message: "Each meta option should be an object" })  // Ensures each item in the array is an object
    metaOptions: object[];
}