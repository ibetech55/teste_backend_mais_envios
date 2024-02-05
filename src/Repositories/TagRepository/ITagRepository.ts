import { CreateTagsDbDto } from "../../Data/TagDtos/CreateTagsDto";
import { UpdateTagDto } from "../../Data/TagDtos/UpdateTagDto";
import { Tags } from "../../Entities/tag.entity";

export interface ITagRepository {
  createTags(values: CreateTagsDbDto[]): Tags[];
  getById(id: string): Tags;
  getByTag(tag: string): Tags;
  find():Tags[];
  update(id:string, values:UpdateTagDto):Tags
  delete(id: string): Tags;
}
