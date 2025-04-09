import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CardService } from './card.service';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Post(':listId')
  create(
    @Body() createCardDto: CreateCardDto,
    @Param('listId') listId: string,
  ) {
    return this.cardService.create(createCardDto, +listId);
  }

  @Get('find_all_cards')
  findAll() {
    return this.cardService.findAll();
  }

  @Get('find_list_against_listId/:listId')
  async findOne(@Param('listId') listId: string) {
    return this.cardService.findOne(+listId);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCardDto: UpdateCardDto) {
  //   return this.cardService.update(+id, updateCardDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.cardService.remove(+id);
  // }
}
