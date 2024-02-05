import { AppError } from "../../../AppError";
import { Tags } from "../../../Entities/tag.entity";
import { ITagRepository } from "../../../Repositories/TagRepository/ITagRepository";

export class GetByTagService {
  private readonly _tagRepository: ITagRepository;

  constructor(tagRepository: ITagRepository) {
    this._tagRepository = tagRepository;
  }
  execute(tag: string): Tags {
    const data = this._tagRepository.getByTag(tag);
    if (!data) {
      throw new AppError("A etiqueta não existe", 404);
    }
    return data;
  }
}
