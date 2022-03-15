import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './events/create.user.event';

@Injectable()
export class AppService {
  private readonly analytics: any[] = [];
  getHello(): string {
    return 'Hello World!';
  }

  async handleUserCreated(data: CreateUserEvent) {
    console.log(data);
    await this.analytics.push({
      email: data.email,
      timestamp: new Date(),
    });
  }

  getAnalytics() {
    return this.analytics;
  }
}
