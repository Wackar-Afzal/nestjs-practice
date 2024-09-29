import { Type } from "class-transformer";
import { ArrayMinSize, ArrayNotEmpty, IsArray, IsDate, IsEnum, IsISO8601, IsJSON, IsNotEmpty, IsObject, IsOptional, IsString, IsUrl, Matches, MaxLength, maxLength, MinLength, ValidateNested } from "class-validator";
import { postType } from "../enums/postType.enum";
import { status } from "../enums/status.enum";
import { CreateMetaOptionDto } from "../../meta-options/dtos/create-metaoptions.dto";
import { ApiProperty } from "@nestjs/swagger";
export class CreatePostDto{
    @ApiProperty({description:"Title should of type string",example:"this is example"})
    @IsNotEmpty({message:"Please provide title of post"})
    @IsString({message:"Title should of type string"})
    @MaxLength(512)
    @MinLength(4)
    title:string;

    @ApiProperty({enum:postType,description:"Post type should be string and is enum",example:"page"})
    @IsNotEmpty({message:"Please provide title of post"})
    @IsEnum(postType, { message: "Post type should be one of 'post', 'page', 'story', 'series'" })
    postType:postType;

    @ApiProperty({description:"string having small letters and - should be used instead of space ",example:"my-first-post"})
    @IsNotEmpty({message:"Please provide slug of post"})
    @IsString({message:"slug should of type string"})
    @MaxLength(512)
    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/,{message:'slug should be small letters and uses only "-" without spaces forexample "my-url" '})
    slug:string;

    @ApiProperty({enum:status,description:"provide status of post like draft, sehduled etc",example:"review"})
    @IsNotEmpty({message:"Please provide status of post like draft, sehduled etc"})
    @IsEnum(status, { message: "Post type should be one of 'draft', 'scheduled', 'review', 'published'" })
    status:status;

    @ApiProperty({required: false,description:"content means writing/ words",example:"this is a exapmle paragraph of content of post"})
    @IsString({message:"content should of type string"})
    @IsOptional()
    content?:string;

    @ApiProperty({required: false,description:"schema should be a valid json",example:"{'key1':'hello'}"})
    @IsString({message:"schema should of type string"})
    @IsOptional()
    @IsJSON({message:"schema should be a valid JSON"})
    schema?:string;

    @ApiProperty({required: false,description:"url of image which is to e displayed in this post",example:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvIk0nTT-VhxRW8wgWHbzQ-6KPKvSt33DcHQ&s"})
    @IsUrl()
    @IsOptional()
    @MaxLength(1024)
    feautredImageUrl?:string;

    @ApiProperty({required: false,description: "Date on which post will be published",example: "2024-09-30T12:30:00Z"  })
      @IsISO8601()
      @IsOptional()
      publishedOn?: Date;

@ApiProperty({
    required: false,
    description: "An array of tags associated with the post. Each tag should be a string and at least 3 characters long.",
    example: ["tech", "development", "AI"]  
  })
  @IsOptional()
  @IsArray({ message: "Tags should be an array" })
  @IsString({ each: true, message: "Each tag should be a string" })  // Ensures each item in the array is a string
  @MinLength(3, { each: true, message: "Each tag should be of minimum 3 characters" })
  @MaxLength(256)
  tags?: string[];
  
  @ApiProperty({
    required: false,
    type:'array',
    items:{
      type:'object',
      properties:{
        key:{
          type:"string",
          description:"key can be any string identifier for you meta option",
          example:"sidebarEnabled"
        },
        value:{
          type:'any',
          description:"Any value you want to save to the key",
          example:true
        }
      }
    },

  })
  @IsOptional()
  @IsArray({ message: "Meta option should be an array" })
  @ValidateNested({ each: true })
  @Type(() => CreateMetaOptionDto)
  @ArrayNotEmpty({ message: "Meta option array should not be empty" })
  @ArrayMinSize(1, { message: "Meta option array must contain at least 1 option" })
  metaOptions: CreateMetaOptionDto[];
  
}