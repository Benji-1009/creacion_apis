import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post("/")
  login(@Body() user: {username: string; password: string}) {
    return this.userService.login(user.username,user.password);
  }
}
