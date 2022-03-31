import { getRepository, Repository } from "typeorm";

import { Test } from "@modules/test/entities/Test";

import { ITestsRepository } from "../ITestsRepository";

class TestsRepository implements ITestsRepository {
  private repository: Repository<Test>;

  constructor() {
    this.repository = getRepository(Test);
  }

  list(): Promise<Test[]> {
    const allTests = this.repository.find();

    return allTests;
  }
}

export { TestsRepository };
