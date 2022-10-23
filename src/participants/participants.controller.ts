import {
  Body,
  Controller,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ParticipantsDto } from './dtos/participants.dto';
import { ParticipantsService } from './participants.service';

@Controller('participate')
export class ParticipantsController {
  constructor(private readonly participantsService: ParticipantsService) {}

  /*
   * [POST] http://localhost:3000/participate
   *
   * @author Kevin
   * @description JustCode 수료식 참여 API
   *
   * @param ParticipantsDto 참여자 정보
   */
  @Post()
  @UsePipes(ValidationPipe)
  postParticipants(@Body() participantsDto: ParticipantsDto): Promise<boolean> {
    return this.participantsService.postParticipants(participantsDto);
  }
}
