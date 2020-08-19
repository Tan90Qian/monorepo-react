import { gqlInstance } from "@pcr/core";
import { gql } from "@apollo/client";

import { IService } from "./interface";

export default class TemplateService implements IService {
  private engine: typeof gqlInstance;
  constructor() {
    this.engine = gqlInstance;
  }

  fetchRecipes() {
    return this.engine.query({
      query: gql`
        {
          recipes {
            id
            title
          }
        }
      `,
    });
  }

  fetchList() {
    return [{ id: 1, name: "test" }];
  }

  fetchDetail() {
    return {
      id: 1,
      name: "test",
    };
  }
}
