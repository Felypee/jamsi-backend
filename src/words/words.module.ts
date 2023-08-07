import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WordHistory, WordHistorySchema } from './words-history.schema';
import { WordsController } from './words.controller';
import { Word, WordSchema } from './words.schema';
import { WordsService } from './words.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Word.name,
        schema: WordSchema,
      },

      {
        name: WordHistory.name,
        schema: WordHistorySchema,
      },
    ]),
  ],
  controllers: [WordsController],
  providers: [WordsService],
})
export class WordsModule {}
