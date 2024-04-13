import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Item {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: Number })
  quantity: number;

  @Prop({ type: String })
  description: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
