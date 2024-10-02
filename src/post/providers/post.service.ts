import { Body, Injectable } from "@nestjs/common";
import { UserService } from "src/users/providers/user.services";
import { CreatePostDto } from "../dtos/create-post.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Post } from "../post.entity";
import { Repository } from "typeorm";
import { MetaOption } from "src/meta-options/meta-options.entity";
import { TagService } from "src/tags/providers/tag.service";
import { PatchPostDto } from "../dtos/patch-post.dto";


@Injectable()
export class PostService{

    constructor(

   private readonly userService:UserService,

    /**
     * injecting post repository
     */
    @InjectRepository(Post)
        private readonly postRepository:Repository<Post>,
        /**
     * injecting meat option repository
     */
    @InjectRepository(MetaOption)
        private readonly metaOptionRepository:Repository<MetaOption>,

        /**
         * injecting tag service
         */
        private readonly tagsService: TagService
    ){}
    /**
     * creating new post
     * @param createPostDto 
     * @returns 
     */
    public async create(createPostDto:CreatePostDto){
        // commented below code as we are using cascade
        // let metaOptions=createPostDto.metaOptions?this.metaOptionRepository.create(createPostDto.metaOptions):null
        // if(metaOptions){
        //     await this.metaOptionRepository.save(metaOptions)
        // }
        let user=await this.userService.findOneById(createPostDto.authorId)

        let tags=await this.tagsService.findMultipleTags(createPostDto.tags)

        let post=this.postRepository.create({...createPostDto,author:user,tags:tags})
        // if(metaOptions){
        //     post.metaOptions=metaOptions
        // }
        return await this.postRepository.save(post)
    }
    public async findAll(userId:string){
    //  const user=this.userService.findOneById()
    // you can use relation or eager in entity when definig relation
     const post=await this.postRepository.find({relations:{metaOptions:true,
        // author:true,
        // tags:true
    }})
     return post
    }

    public async delete(id:number){
        // const post=await this.postRepository.findOneBy({id})
        await this.postRepository.delete(id)
        // let inversePost=await this.metaOptionRepository.find({
        //     where:{id:post.metaOptions.id,},
        //     relations:{post:true}
        // })
        // await this.metaOptionRepository.delete(post.metaOptions.id)
        // await this.metaOptionRepository.delete(id)
        return {deleted:true,id:id}
    }

    public async update(patchPostDto:PatchPostDto){
        let tags=await this.tagsService.findMultipleTags(patchPostDto.tags)

        let post =await this.postRepository.findOneBy({id:patchPostDto.id})

        post.title=patchPostDto.title??post.title;
        post.postType=patchPostDto.postType??post.postType;
        post.slug=patchPostDto.slug??post.slug;
        post.status=patchPostDto.status??post.status;
        post.content=patchPostDto.content??post.content;
        post.schema=patchPostDto.schema??post.schema;
        post.feautredImageUrl=patchPostDto.feautredImageUrl??post.feautredImageUrl;
        post.publishedOn=patchPostDto.publishedOn??post.publishedOn;
        post.tags=tags;

        return await this.postRepository.save(post)

    }
}