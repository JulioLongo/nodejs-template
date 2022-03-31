import { Test } from "@modules/test/entities/Test";

interface ITestsRepository {
  list(): Promise<Test[]>;
}

export { ITestsRepository };
