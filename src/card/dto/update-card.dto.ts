import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateCardDto {
  @ApiProperty({ required: false })
  @IsBoolean()
  @IsOptional()
  completed?: boolean;
}
