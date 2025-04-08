import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ListService } from './list.service';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';

@Controller('list')
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Post(':boardId')
  create(
    @Body() createListDto: CreateListDto,
    @Param('boardId') boardId: string,
  ) {
    return this.listService.create(createListDto, +boardId);
  }

  @Get('find_all_list')
  findAll() {
    return this.listService.findAll();
  }

  @Get('find_list_against_boardId/:boardId') // ✅ Fix Route Syntax
  async findOne(@Param('boardId') boardId: string) {
    console.log(boardId)
    return this.listService.findOne(+boardId); // ✅ Convert boardId to number
  }
  

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateListDto: UpdateListDto) {
  //   return this.listService.update(+id, updateListDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.listService.remove(+id);
  // }
}
