import { Injectable, Factory } from "./inject";

class OtherService {
  a = 1;
}

@Injectable()
class TestService {
  constructor(public readonly otherService: OtherService) {}

  testMethod() {
    return this.otherService.a;
  }
}

test("basic metadata", () => {
  const testService = Factory(TestService);
  expect(testService).toEqual(new TestService(new OtherService()));
  expect(testService.testMethod()).toBe(1);
});
