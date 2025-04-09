import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Card } from './entities/card.entity';
import { Repository } from 'typeorm';
import { List } from 'src/list/entities/list.entity';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card)
    private readonly cardRepository: Repository<Card>,
    @InjectRepository(List)
    private readonly listRepository: Repository<List>,
  ){}
  async create(createCardDto: CreateCardDto, listId: number): Promise<Card> {
    const list = await this.listRepository.findOne({where: {id: listId}})

    if (!list) {
      throw new NotFoundException(`List with ID ${listId} not found`);
    }
    const card = new Card();
    card.card_name = createCardDto.card_name;
    card.list = list;
  
    return await this.cardRepository.save(card);
  }

   async findAll(): Promise<Card[]> {
      return await this.cardRepository.find();
    }

  async findOne(listId: number) {
    return await this.cardRepository.find({
      where: { list: { id: listId } }, // ✅ Correct filtering
      relations: ["list"],
    });
  }

  // update(id: number, updateCardDto: UpdateCardDto) {
  //   return `This action updates a #${id} card`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} card`;
  // }
}