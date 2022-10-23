import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserDto } from './dtos/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getTest(): string {
    return this.userService.getTest();
  }

  /*
   * 전달 데이터 테스트 API
   * [POST] http://localhost:3000/user/req/:id
   *
   * @author Kevin
   * @description param, body test
   *
   * @param id test param
   * @param name test body
   */
  @Post('/req/:id')
  postTest(@Param('id') id: number, @Body('name') name: string): string {
    return 'id: ' + id + ', name: ' + name;
  }

  /*
   * Handler, Parameter 레벨에서의 DTO 검증 테스트 API
   * [POST] http://localhost:3000/user/dto
   *
   * @author Kevin
   * @description dto test
   *
   * @param UserDto test dto
   */
  @Post('/dto')
  @UsePipes(ValidationPipe)
  postTestDto(@Body() UserDto: UserDto): string {
    return 'id: ' + UserDto.id + ', name: ' + UserDto.name;
  }
}
