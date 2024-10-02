import { Injectable } from "@nestjs/common";
import { CreateMetaOptionDto } from "../dtos/create-metaoptions.dto";
import { Repository } from "typeorm";
import { MetaOption } from "../meta-options.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class MetaOptionService{
    constructor(
        /**
         * inject meta option prpperty
         */
        @InjectRepository(MetaOption)
        private readonly metaOptionRepository:Repository<MetaOption>
    ){}
    public async create(createMetaOptionDto:CreateMetaOptionDto){
        let meatOption= this.metaOptionRepository.create(createMetaOptionDto)
        return await this.metaOptionRepository.save(meatOption)

    }
}