import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int)
  id: string;

  @Field({ nullable: true })
  name?: string;

  @Field()
  email: string;
}
