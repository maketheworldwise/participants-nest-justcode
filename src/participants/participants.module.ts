import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomTypeOrmModule } from 'src/config/customtypeorm.config';
import { Participants } from 'src/entity/participants.entity';
import { ParticipantsRepository } from 'src/repository/participants.repository';
import { ParticipantsController } from './participants.controller';
import { ParticipantsService } from './participants.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Participants]),
    CustomTypeOrmModule.forCustomRepository([ParticipantsRepository]),
  ],
  controllers: [ParticipantsController],
  providers: [ParticipantsService],
})
export class ParticipantsModule {}
