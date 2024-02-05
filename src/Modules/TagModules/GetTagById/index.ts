import { tagRepository } from "../../../Repositories/TagRepository";
import { GetTagByIdController } from "./GetTagByIdController";
import { GetTagByIdService } from "./GetTagByIdService";

const getByIdService = new GetTagByIdService(tagRepository);
const getByIdController = new GetTagByIdController(getByIdService);
export { getByIdService, getByIdController };