import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './schemas/item.schema';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}
  @Get()
  findAllitem(): Promise<Item[]> {
    return this.itemService.getAllitems();
  }

  @Get(':id')
  findOne(@Param() { id }: { id: string }): Promise<Item> {
    return this.itemService.getSingleitem(id);
  }

  @Post()
  addItem(@Body() createItem: CreateItemDto): Promise<Item> {
    return this.itemService.create(createItem);
  }

  @Delete(':id')
  deleteitem(@Param() { id }: { id: string }) {
    return this.itemService.deleteItem(id);
  }
}
