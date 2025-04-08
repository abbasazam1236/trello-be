import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>,
  ) {}
  
  async create(createBoardDto: CreateBoardDto): Promise<Board> {
    const board = this.boardRepository.create(createBoardDto);
    return await this.boardRepository.save(board);
  }
  
  async findAll(): Promise<Board[]> {
    return await this.boardRepository.find();
  }

  // async findOne(id: number): Promise<Board> {
  //   return await this.boardRepository.findOne({ where: { id } });
  // }

  // async update(id: number, updateBoardDto: UpdateBoardDto): Promise<Board> {
  //   await this.boardRepository.update(id, updateBoardDto);
  //   return this.findOne(id);
  // }

  // async remove(id: number): Promise<void> {
  //   await this.boardRepository.delete(id);
  // }
}
