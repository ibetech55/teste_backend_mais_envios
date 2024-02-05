
import { CreateTagsDbDto } from "../../Data/TagDtos/CreateTagsDto";
import { UpdateTagDto } from "../../Data/TagDtos/UpdateTagDto";
import { InMemoryDatabase } from "../../Database/database";
import { Tags } from "../../Entities/tag.entity";
import { ITagRepository } from "./ITagRepository";

export class TagRepository implements ITagRepository {
  private _database: InMemoryDatabase<Tags>;
  constructor() {
    this._database = new InMemoryDatabase<Tags>();
  }
  delete(id: string): Tags {
    return this._database.delete(id);
  }
  update(id: string, values: UpdateTagDto): Tags {
    return this._database.update(id, values);
  }
  find(): Tags[] {
    return this._database.find();
  }
  getByTag(tag: string): Tags {
    return this._database.findOneBy({ tag });
  }
  getById(id: string): Tags {
    return this._database.findById(id);
  }

  createTags(values: CreateTagsDbDto[]): Tags[] {
    return this._database.createMany(values);
  }
}
