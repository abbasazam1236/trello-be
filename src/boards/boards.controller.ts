import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('boards')
@ApiTags('Board')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Post('add_Board')
  create(@Body() createBoardDto: CreateBoardDto) {
    return this.boardsService.create(createBoardDto);
  }

  @Get('find_all_board')
  findAll() {
    return this.boardsService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.boardsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBoardDto: UpdateBoardDto) {
  //   return this.boardsService.update(+id, updateBoardDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.boardsService.remove(+id);
  // }
}
