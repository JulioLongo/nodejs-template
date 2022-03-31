import { Router } from "express";

import { ListAllTestsController } from "@modules/test/useCases/listAllTests/ListAllTestsController";

const testRoutes = Router();

const listAllTestsController = new ListAllTestsController();

testRoutes.get("/all", listAllTestsController.handle);

export { testRoutes };
