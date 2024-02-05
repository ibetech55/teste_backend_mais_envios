import { tagRepository } from "../../../Repositories/TagRepository";
import { UpdateTagController } from "./UpdateTagController";
import { UpdateTagService } from "./UpdateTagService";

const updateTagService = new UpdateTagService(tagRepository);
const updateTagController = new UpdateTagController(updateTagService);
export { updateTagService, updateTagController };