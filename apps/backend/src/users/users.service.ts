import { Injectable } from '@nestjs/common';
import { User as UserEntity } from './users.entity';
import { CreateUserInput } from './dto/create-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SafeUser } from '@kanban/types';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private repo: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<SafeUser[]> {
    return this.repo.find();
  }

  async createUser(data: CreateUserInput) {
    const user = this.repo.create(data);
    return this.repo.save(user);
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
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
