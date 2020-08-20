import { v4 as uuidv4 } from 'uuid';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { NewRecipeInput } from './dto/new-recipe.input';
import { RecipesArgs } from './dto/recipes.args';
import { Recipe } from './models/recipe.model';

export class RecipesService {
  constructor(@InjectModel(Recipe.name) private recipeModel: Model<Recipe>) {}
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async create(data: NewRecipeInput): Promise<Recipe> {
    const createdRecipe = new this.recipeModel({ ...data, id: uuidv4() });
    return createdRecipe.save();
  }

  async findOneById(id: string): Promise<Recipe> {
    return this.recipeModel.findById(id).exec();
  }

  async findAll(recipesArgs: RecipesArgs): Promise<Recipe[]> {
    return this.recipeModel.find().exec();
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
