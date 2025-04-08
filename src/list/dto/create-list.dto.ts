import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateListDto {

  @ApiProperty()
  @IsString()
  list_name: string;

  // @ApiProperty()
  // @IsString()
  // created_at: Date;

  // @ApiProperty()
  // @IsString()
  // updated_at: Date;

  // @ApiProperty()
  // @IsString()
  // boardId: number;
}
