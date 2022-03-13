import { Injectable } from '@nestjs/common';
import { CreateUserRequest } from './dtos/create.user.request.body.dto';

@Injectable()
export class AppService {
  private readonly users: any[] = [];

  getHello(): string {
    return 'Hello World!';
  }

  createUser(request: CreateUserRequest) {
    this.users.push(request);
  }
}
