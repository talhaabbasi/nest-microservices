import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserRequest } from './dtos/create.user.request.body.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  createUser(@Body() request: CreateUserRequest) {
    return this.appService.createUser(request);
  }
}
