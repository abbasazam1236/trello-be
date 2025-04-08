import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { List } from './entities/list.entity';
import { Repository } from 'typeorm';
import { Board } from 'src/boards/entities/board.entity';

@Injectable()
export class ListService {
  constructor(
    @InjectRepository(List)
    private readonly listRepository: Repository<List>,
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>,
  ) {}
  async create(createListDto: CreateListDto, boardId: number): Promise<List> {
    // Find the board by its ID
    const board = await this.boardRepository.findOne({
      where: { id: boardId },
    });
    console.log(board);

    if (!board) {
      throw new NotFoundException(`Board with ID ${boardId} not found`);
    }

    // ✅ Create a new list and associate it with the board
    const list = new List();
    list.list_name = createListDto.list_name;
    list.board = board; // ✅ This should now work correctly

    return await this.listRepository.save(list);
  }

  async findAll(): Promise<List[]> {
    return await this.listRepository.find();
  }

  async findOne(boardId: number) {
    return await this.listRepository.find({
      where: { board: { id: boardId } }, // ✅ Correct filtering
      relations: ["board"], // ✅ Include board relation if needed
    });
  }
  

  // update(id: number, updateListDto: UpdateListDto) {
  //   return `This action updates a #${id} list`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} list`;
  // }
}
