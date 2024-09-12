import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDtO } from "./create-user.dto";
export class UpdateUserDto extends PartialType(CreateUserDtO){}