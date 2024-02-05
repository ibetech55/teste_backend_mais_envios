import { tagRepository } from "../../../Repositories/TagRepository";
import { CreateTagsController } from "./CreateTagsController";
import { CreateTagsService } from "./CreateTagsService";
import { ExcelHandler } from "../../../Utils/ExcelHandler";
import { rabbitMq } from "../../../Jobs/RabbitMq";

const excelHandler = new ExcelHandler();
const createTagsService = new CreateTagsService(tagRepository, excelHandler);
const createTagsController = new CreateTagsController(rabbitMq);
export { createTagsService, createTagsController };
