import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';



@Schema()
export class WordHistory {
  @Prop({
    required: true,
  })
  wordId: number;

  @Prop({
    required: true,
    unique: true,
  })
  userId: number;

  @Prop({
    default: 0
  })
  attemps: number;

  @Prop({
    default: false
  })
  failure: boolean;

}

export const WordHistorySchema = SchemaFactory.createForClass(WordHistory);