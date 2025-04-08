import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCardDto {

  @ApiProperty()
  @IsString()
  card_name: string;

  // @ApiProperty()
  // @IsString()
  // created_at: Date;

  // @ApiProperty()
  // @IsString()
  // updated_at: Date;

  // @ApiProperty()
  // @IsString()
  // listId: number;
}
