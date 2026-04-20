import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from './users.model';
import { UserService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly UserService: UserService) {}

  @Query(() => [User], { name: 'users' })
  findAll(): Promise<User[]> {
    return this.UserService.findAll();
  }

  @Query(() => User, { name: 'user', nullable: true })
  findOne(
    @Args('id', { type: () => String }) id: string,
  ): Promise<User | null> {
    return this.UserService.findById(id);
  }

  @Query(() => User, { name: 'userByEmail', nullable: true })
  findByEmail(
    @Args('email', { type: () => String }) email: string,
  ): Promise<User | null> {
    return this.UserService.findByEmail(email);
  }

  @Mutation(() => User)
  createUser(@Args('createUserInput') input: CreateUserInput): Promise<User> {
    return this.UserService.createUser(input);
  }

  @Mutation(() => Boolean)
  removeUser(@Args('id', { type: () => String }) id: string): Promise<boolean> {
    return this.UserService.deleteUser(id);
  }
}
