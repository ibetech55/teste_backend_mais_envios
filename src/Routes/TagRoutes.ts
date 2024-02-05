import { Router } from "express";
import { createTagsController } from "../Modules/TagModules/CreateTags";
import { getByIdController } from "../Modules/TagModules/GetTagById";
import { getByTagController } from "../Modules/TagModules/GetByTag";
import { getTagsController } from "../Modules/TagModules/GetTags";
import { updateTagController } from "../Modules/TagModules/UpdateTag";
import { deleteTagController } from "../Modules/TagModules/DeleteTag";

const tagRoutes = Router();
tagRoutes.post("/tag", (req, res) => createTagsController.handle(req, res));
tagRoutes.get("/tag/getByTag/:tag", (req, res) => getByTagController.handle(req, res));
tagRoutes.get("/tag", (req, res) => getTagsController.handle(req, res));
tagRoutes.delete("/tag/:id", (req, res) => deleteTagController.handle(req, res));
tagRoutes.get("/tag/:id", (req, res) => getByIdController.handle(req, res));
tagRoutes.put("/tag/:id", (req, res) => updateTagController.handle(req, res));

export { tagRoutes };
