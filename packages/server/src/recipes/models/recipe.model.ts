import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType()
@Schema()
export class Recipe extends Document {
  @Field(type => ID)
  @Prop()
  id: string;

  @Field()
  @Prop()
  title: string;

  @Field({ nullable: true })
  @Prop()
  description?: string;

  @Field()
  @Prop()
  creationDate: Date;

  @Field(type => [String], { nullable: true })
  @Prop()
  ingredients: string[];
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);
