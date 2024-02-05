import { tagRepository } from "../../../Repositories/TagRepository";
import { DeleteTagController } from "./DeleteTagController";
import { DeleteTagService } from "./DeleteTagService";

const deleteTagService = new DeleteTagService(tagRepository);
const deleteTagController = new DeleteTagController(deleteTagService);
export { deleteTagService, deleteTagController };