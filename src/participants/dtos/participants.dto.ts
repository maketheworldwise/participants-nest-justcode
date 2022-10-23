import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class ParticipantsDto {
  @IsString()
  @IsNotEmpty()
  user_email: string;

  @IsString()
  @IsNotEmpty()
  user_name: string;

  @IsBoolean()
  @IsNotEmpty()
  is_comming: boolean;

  @IsBoolean()
  @IsNotEmpty()
  is_dinner: boolean;

  @IsString()
  comments: string;
}
