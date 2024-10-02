import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Tag } from "../tag.entity";
import { In, Repository } from "typeorm";
import { CreateTagDto } from "../dtos/create-tag.dto";

@Injectable()
export class TagService{
    constructor(
        /**
         * inject tag prpperty
         */
        @InjectRepository(Tag)
        private readonly tagRepository:Repository<Tag>
    ){}

    public async create(createTagDto:CreateTagDto){
        let tag=this.tagRepository.create(createTagDto)
        return await this.tagRepository.save(tag)
    }

    public async findMultipleTags(tags:number[]){
        let results=await this.tagRepository.find({
            where:{
                id:In(tags)
            }
        })
        return results
    }

    public async delete(id:number){
        await this.tagRepository.delete(id)
        return{
            deleted:true,
            id
        }
    }

    public async softDelete(id:number){
        await this.tagRepository.softDelete(id)
        return{
            softDeleted:true,
            id
        }
    }
}