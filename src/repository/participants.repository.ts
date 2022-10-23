import { Participants } from 'src/entity/participants.entity';
import { ParticipantsDto } from 'src/participants/dtos/participants.dto';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Participants)
export class ParticipantsRepository extends Repository<Participants> {
  async onCreate(participantsDto: ParticipantsDto): Promise<boolean> {
    const { user_email, user_name, is_comming, is_dinner, comments } =
      participantsDto;

    const participants = await this.save({
      user_email,
      user_name,
      is_comming,
      is_dinner,
      comments,
    });

    return participants ? true : false;
  }
}
