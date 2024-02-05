import path from "path";
import { Request, Response } from "express";
import { FileArray, UploadedFile } from "express-fileupload";
import { CREATE_TAGS_LIST } from "../../../Jobs/QueueTypes";
import { RabbitMq } from "../../../Jobs/RabbitMq/RabbitMq";
import { AppError } from "../../../AppError";
import { ICreateTaglist } from "../../../Jobs/Interfaces/ICreateTagsList";

export class CreateTagsController {
  private readonly _rabbitMq: RabbitMq;

  constructor(rabbitMq: RabbitMq) {
    this._rabbitMq = rabbitMq;
  }

  async handle(request: Request, response: Response) {
    if(!request.files) {
      throw new AppError('Por favor, insira um arquivo', 400)
    }
    let file: FileArray;
    file = request.files;
    let tagListFile: UploadedFile;
    tagListFile = file.tagList as UploadedFile;
    const tagListFilePath = path.join(
      __dirname,
      "../../../",
      "Uploads",
      tagListFile.name
    );
    tagListFile.mv(tagListFilePath);
    this._rabbitMq.publish<ICreateTaglist>(CREATE_TAGS_LIST, { fileName: tagListFile.name });

    return response.status(200).json('Arquivo Enviado');
  }
}
