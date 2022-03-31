import { inject, injectable } from "tsyringe";

import { Test } from "@modules/test/entities/Test";
import { ITestsRepository } from "@modules/test/repositories/ITestsRepository";

@injectable()
class ListAllTestsUseCase {
  constructor(
    @inject("TestsRepository")
    private testsRepository: ITestsRepository
  ) {}

  async execute(): Promise<Test[]> {
    const cars = await this.testsRepository.list();
    return cars;
  }
}

export { ListAllTestsUseCase };
