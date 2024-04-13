import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './interface/item.interface';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}
  @Get()
  findAllitem(): Item[] {
    return this.itemService.getAllitems();
  }

  @Get(':id')
  findOne(@Param() { id }: { id: string }): Item {
    return this.itemService.getSingleitem(id);
  }

  @Post()
  addItem(@Body() createItem: CreateItemDto) {
    console.log(createItem);
    return `${createItem.name}`;
  }

  @Put(':id')
  updateItem({ id }) {
    return id;
  }

  @Delete(':id')
  deleteitem(@Param() { id }) {
    return id;
  }
}
