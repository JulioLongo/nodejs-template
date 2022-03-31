import { container } from "tsyringe";

import { TestsRepository } from "@modules/test/repositories/implementations/TestsRepository";
import { ITestsRepository } from "@modules/test/repositories/ITestsRepository";

container.registerSingleton<ITestsRepository>(
  "TestsRepository",
  TestsRepository
);
