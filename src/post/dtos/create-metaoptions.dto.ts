import { IsNotEmpty, IsString } from "class-validator";
export class CreateMetaOptionDto{
    @IsString({ message:"In meta option array , each obj key should be string "})
    @IsNotEmpty({message:"In meta option array each object should contain key"})
    key:string;
    @IsNotEmpty({message:"In meta option array each object should contain value across key"})
    value:any;
}