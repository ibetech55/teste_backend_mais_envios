import { tagRepository } from "../../../Repositories/TagRepository";
import { GetByTagController } from "./GetByTagController";
import { GetByTagService } from "./GetByTagService";

const getByTagService = new GetByTagService(tagRepository);
const getByTagController = new GetByTagController(getByTagService);
export { getByTagService, getByTagController };