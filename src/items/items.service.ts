import { Injectable } from '@nestjs/common';
import { Item } from './interface/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: 'test',
      name: 'Adepiper',
      qty: 100,
      description: 'test',
    },
  ];
  getAllitems() {
    return this.items;
  }

  getSingleitem(id: string) {
    return this.items.find((item) => item.id === id);
  }

  addNewItem(item: Item) {
    this.items.push(item);
  }

  deleteItem(id: string) {
    this.items.filter((item) => item.id !== id);
  }
}
