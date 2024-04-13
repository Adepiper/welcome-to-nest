import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Item } from './schemas/item.schema';
import { Model } from 'mongoose';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item.name) private readonly item: Model<Item>) {}

  async getAllitems(): Promise<Item[]> {
    return await this.item.find();
  }

  async getSingleitem(id: string): Promise<Item> {
    return await this.item.findById({ _id: id });
  }

  async create(item: CreateItemDto) {
    const newItem = new this.item({
      description: item.description,
      name: item.name,
      quantity: item.qty,
    });

    return await newItem.save();
  }

  async deleteItem(id: string) {
    return await this.item.findByIdAndDelete({ _id: id });
  }
}
