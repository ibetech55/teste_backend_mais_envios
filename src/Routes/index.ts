import { Router } from "express";
import { tagRoutes } from "./TagRoutes";

const apiRoutes = Router();
apiRoutes.use([tagRoutes]);

export { apiRoutes };
