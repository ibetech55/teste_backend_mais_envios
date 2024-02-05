import { AppError } from "../../../AppError";
import { Tags } from "../../../Entities/tag.entity";
import { ITagRepository } from "../../../Repositories/TagRepository/ITagRepository";

export class GetTagByIdService {
  private readonly _tagRepository: ITagRepository;

  constructor(tagRepository: ITagRepository) {
    this._tagRepository = tagRepository;
  }
  execute(id: string): Tags {
    const data = this._tagRepository.getById(id);
    if (!data) {
      throw new AppError("A etiqueta não existe", 404);
    }
    return this._tagRepository.getById(id);
  }
}
