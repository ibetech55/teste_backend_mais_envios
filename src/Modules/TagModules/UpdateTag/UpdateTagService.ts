import { AppError } from "../../../AppError";
import { UpdateTagDto } from "../../../Data/TagDtos/UpdateTagDto";
import { Tags } from "../../../Entities/tag.entity";
import { ITagRepository } from "../../../Repositories/TagRepository/ITagRepository";

export class UpdateTagService {
  private readonly _tagRepository: ITagRepository;

  constructor(tagRepository: ITagRepository) {
    this._tagRepository = tagRepository;
  }
  execute(id: string, values: UpdateTagDto): Tags {
    const data = this._tagRepository.getById(id);
    if (!data) {
      throw new AppError("A etiqueta não existe", 404);
    }
    const updateData: UpdateTagDto = {};
    if (values.name) updateData.name = values.name;
    if (values.tag) updateData.tag = values.tag;
    if (values.status) updateData.status = values.status;
    if (values.source) updateData.source = values.source;
    if (values.price) updateData.price = values.price;

    return this._tagRepository.update(id, values);
  }
}
