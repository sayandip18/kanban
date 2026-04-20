import { Injectable } from '@nestjs/common';
import { User } from './users.model';
import { CreateUserInput } from './dto/create-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SafeUser } from '@kanban/types';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>,
  ) {}

  async findAll(): Promise<SafeUser[]> {
    return this.repo.find();
  }

  async createUser(data: CreateUserInput) {
    const user = this.repo.create(data);
    return this.repo.save(user);
  }

  async findByEmail(email: string) {
    return this.repo.findOne({ where: { email } });
  }

  async findById(id: string) {
    return this.repo.findOne({ where: { id } });
  }

  async deleteUser(id: string) {
    await this.repo.delete(id);
    return true;
  }
}
