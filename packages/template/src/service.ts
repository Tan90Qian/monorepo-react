import { gqlInstance } from "@pcr/core";
import { gql } from "@apollo/client";

import { IService, IModel } from "./interface";

export default class TemplateService implements IService {
  private engine: typeof gqlInstance;
  constructor() {
    this.engine = gqlInstance;
  }

  async fetchRecipes() {
    const res = await this.engine.query({
      query: gql`
        {
          recipes {
            id
            title
          }
        }
      `,
    });
    return res.data.recipes;
  }

  fetchList() {
    return [{ id: 1, title: "test" }];
  }

  fetchDetail() {
    return {
      id: "1",
      title: "test",
    };
  }

  addRecipe(data: IModel) {
    return this.engine.mutate({
      mutation: gql`
        mutation {
          addRecipe(newRecipeData: ${data}) {
          }
        }
      `,
    });
  }
}
