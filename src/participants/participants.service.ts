import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ParticipantsRepository } from 'src/repository/participants.repository';
import { ParticipantsDto } from './dtos/participants.dto';

@Injectable()
export class ParticipantsService {
  constructor(
    @InjectRepository(ParticipantsRepository)
    private participantsRepository: ParticipantsRepository,
  ) {}

  postParticipants(participantsDto: ParticipantsDto): Promise<boolean> {
    return this.participantsRepository.onCreate(participantsDto);
  }
}
