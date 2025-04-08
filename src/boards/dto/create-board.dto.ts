import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateBoardDto {
  @ApiProperty()
  @IsString()
  board_title: string;

  @ApiProperty()
  @IsString()
  workspace: string;

  @ApiProperty()
  @IsString()
  visibility: string;

  // @ApiProperty()
  // @IsString()
  // created_at: Date;

  // @ApiProperty()
  // @IsString()
  // updated_at: Date;
}
