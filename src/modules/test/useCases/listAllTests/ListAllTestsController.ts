import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAllTestsUseCase } from "./ListAllTestsUseCase";

class ListAllTestsController {
  async handle(request: Request, response: Response): Promise<Response> {
    // const { name } = request.body;

    const listAllTestsUseCase = container.resolve(ListAllTestsUseCase);

    const tests = await listAllTestsUseCase.execute();

    return response.json(tests);
  }
}

export { ListAllTestsController };
