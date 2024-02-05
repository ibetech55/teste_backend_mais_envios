import { tagRepository } from "../../../Repositories/TagRepository";
import { GetTagsController } from "./GetTagsController";
import { GetTagsService } from "./GetTagsService";

const getTagsService = new GetTagsService(tagRepository);
const getTagsController = new GetTagsController(getTagsService);
export { getTagsService, getTagsController };