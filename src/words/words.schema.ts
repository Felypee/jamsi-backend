import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


@Schema({ timestamps: true })
export class Word {
  @Prop({
    unique: true,
  })
  id: string;

  @Prop({
    required: true,
    unique: true,
  })
  userId: number;

  @Prop({
    require: true,
  })
  word: string;

  @Prop({
    required: true,
    trim: true,
  })
  category: string;

  @Prop({
    required: true,
  })
  completed: boolean;

  @Prop({
    required: true,
    
  })
  wordLimit: number;
}

export const WordSchema = SchemaFactory.createForClass(Word);
