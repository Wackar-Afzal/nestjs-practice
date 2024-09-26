import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsInt, IsNotEmpty } from "class-validator";
import { CreatePostDto } from "./create-post.dto";

export class PatchPostDto extends PartialType(CreatePostDto){
    @ApiProperty({description:"the id post which need to be updated"})
    @IsNotEmpty()
    @IsInt()
    id:number
}