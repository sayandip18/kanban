import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SignupInput, LoginInput } from './auth.inputs';
import { SafeUser } from '@kanban/types';
import { User } from 'src/users/users.model';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => User)
  async signup(@Args('input') input: SignupInput): Promise<SafeUser> {
    return this.authService.signup(input.email, input.password, input.name);
  }

  @Mutation(() => User)
  async login(@Args('input') input: LoginInput): Promise<SafeUser> {
    return this.authService.login(input.email, input.password);
  }
}
