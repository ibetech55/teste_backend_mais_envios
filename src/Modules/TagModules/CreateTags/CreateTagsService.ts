import path from "path";
import fs from "fs";
import { ConsumeMessage } from "amqplib";
import { ITagRepository } from "../../../Repositories/TagRepository/ITagRepository";
import { ExcelHandler } from "../../../Utils/ExcelHandler";
import { rabbitMq } from "../../../Jobs/RabbitMq";
import { CREATE_TAGS_LIST } from "../../../Jobs/QueueTypes";
import {
  CreateTagsDto,
  CreateTagsDbDto,
} from "../../../Data/TagDtos/CreateTagsDto";

export class CreateTagsService {
  private readonly _tagRepository: ITagRepository;
  private readonly _excelHandler: ExcelHandler;

  constructor(tagRepository: ITagRepository, excelHandler: ExcelHandler) {
    this._tagRepository = tagRepository;
    this._excelHandler = excelHandler;
  }
  async execute(msg: ConsumeMessage): Promise<void> {
    const message = JSON.parse(msg.content.toString());
    const repeatedTags = [];
    const chunks = [];

    const filePath = path.join(
      __dirname,
      "../../../",
      "Uploads",
      message.fileName
    );
    const readStream = fs.createReadStream(filePath);
    readStream.on('data', async (chunk) => {
      chunks.push(chunk);
      const tagsListData: CreateTagsDto[] = await this._excelHandler.execute(
        chunks[0]
      );
      for (const tag of tagsListData) {
        const tagData = this._tagRepository.getByTag(tag.Tag);
        if (tagData) {
          repeatedTags.push(tag.Tag);
        }
      }

      if (repeatedTags.length === 0) {
        const data: CreateTagsDbDto[] = tagsListData.map(
          (val: CreateTagsDto) => ({
            name: val.name,
            tag: val.Tag,
            status: val.status,
            source: val.source,
            price: val.price,
          })
        );
        this._tagRepository.createTags(data);
        console.log(
          `${CREATE_TAGS_LIST} - executado com sucesso - ${new Date()}`
        );
      } else {
        console.log(
          `Não posso ter etiquetas duplicados. Os seguintes etiquetas estão duplicados ${JSON.stringify(
            repeatedTags
          )}`
        );
        console.log(
          `${CREATE_TAGS_LIST} - etiquetas não foram criadas - ${new Date()}`
        );
      }
      rabbitMq.subChannel.ack(msg);
    });
  }
}
