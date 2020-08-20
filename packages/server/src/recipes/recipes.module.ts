import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DateScalar } from '../common/scalars/date.scalar';
import { RecipesResolver } from './recipes.resolver';
import { RecipesService } from './recipes.service';
import { Recipe, RecipeSchema } from './models/recipe.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Recipe.name, schema: RecipeSchema }]),
  ],
  providers: [RecipesResolver, RecipesService, DateScalar],
})
export class RecipesModule {}
