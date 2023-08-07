import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { WordHistory } from './words-history.schema';
import { CreateWordDto, UpdateWordDto } from './words.dto';
import { Word, WordSchema } from './words.schema';

@Injectable()
export class WordsService {
  constructor(@InjectModel(Word.name) private wordModel: Model<Word>, @InjectModel(WordHistory.name) private wordHistoryModel: Model<WordHistory>) {}

  getWords() {
    return this.wordModel.find();
  }

  getWordHistory(wordId: number) {
    return this.wordHistoryModel.find({
        id: wordId
    });
  }


  createWord(createWord: CreateWordDto){
    return this.wordModel.create(createWord)
  }

  updateWord(id: string, updateWord: UpdateWordDto){

    const wordModel = new this.wordModel({
        id: updateWord.id,
        userId: updateWord.userId,
        category: updateWord.category,
        word: updateWord.word,
        completed: updateWord.completed,
    })
     this.wordHistoryModel.create({
        id: updateWord.id,
        userId: updateWord.userId,
        attemps: updateWord.attemps,
        failure: updateWord.failure

    });
   return  this.wordModel.findByIdAndUpdate(id, wordModel, {new: true})
  }

}
