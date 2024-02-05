import { Tags } from "../../../Entities/tag.entity";
import { ITagRepository } from "../../../Repositories/TagRepository/ITagRepository";

export class GetTagsService {
  private readonly _tagRepository: ITagRepository;

  constructor(tagRepository: ITagRepository) {
    this._tagRepository = tagRepository;
  }
  execute(tag: string): Tags[] {
    return this._tagRepository.find();
  }
}
