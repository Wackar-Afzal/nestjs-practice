import { Type } from "class-transformer";
import { ArrayMinSize, ArrayNotEmpty, IsArray, IsDate, IsEnum, IsIn, IsInt, IsISO8601, IsJSON, IsNotEmpty, IsObject, IsOptional, IsString, IsUrl, Matches, MaxLength, maxLength, MinLength, ValidateNested } from "class-validator";
import { postType } from "../enums/postType.enum";
import { status } from "../enums/status.enum";
import { CreateMetaOptionDto } from "../../meta-options/dtos/create-metaoptions.dto";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
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

    @ApiProperty({required: false,description:"schema should be a valid json",example:"{\"keySchemaPostDto\": \"value\"}"})
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

@ApiPropertyOptional({
    required: false,
    description: "An array of ids of tags associated with the post. Each tag should be a number representing tag id",
    example: [1, 2]  
  })

  
  @ApiPropertyOptional({
    description: 'Array of ids of tags passed as integers in an array',
    example: [1, 2],
  })
  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  tags?: number[];
  
  @ApiPropertyOptional({
    type: 'object',
      properties: {
        metaValue: {
          type: 'json',
          description: 'The metaValue is a JSON string',
          example:  '\"{\"sidebarOpened\": true}\"'
        },
      },
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateMetaOptionDto)
  metaOptions?: CreateMetaOptionDto | null;

  @ApiProperty({type:"ineger",required:true,example:1})
  @IsNotEmpty()
  @IsInt()
  authorId:number;

}