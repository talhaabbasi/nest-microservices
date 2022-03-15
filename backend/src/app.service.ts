import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserRequest } from './dtos/create.user.request.body.dto';
import { CreateUserEvent } from './events/create.user.event';

@Injectable()
export class AppService {
  private readonly users: any[] = [];

  constructor(
    @Inject('COMMUNICATION') private readonly communication: ClientProxy,
    @Inject('ANALYTICS') private readonly analytics: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  createUser(request: CreateUserRequest) {
    this.users.push(request);
    this.communication.emit('user_created', new CreateUserEvent(request.email));
    this.analytics.emit('user_created', new CreateUserEvent(request.email));
  }

  getAnalytics() {
    return this.analytics.send({ cmd: 'get_analytics' }, {});
  }
}
