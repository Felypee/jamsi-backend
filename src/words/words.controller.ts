import { Body, Controller, Get,  Param,  Post, Put } from '@nestjs/common';
import { CreateWordDto, UpdateWordDto } from './words.dto';
import { WordsService } from './words.service';

@Controller('words')
export class WordsController {

    constructor(private wordsService : WordsService){};
    @Get()
    getWords(){
        return this.wordsService.getWords();
    }

    @Get(':id')
    getWordHistory(@Param(':id') id: number){
        return this.wordsService.getWords();
    }

    @Post()
    createWord(@Body() createWord: CreateWordDto){
        return this.wordsService.createWord(createWord)
    }


    @Put(':id')
    updateWord(@Param('id') id: string, @Body() updateWord: UpdateWordDto){
    this.wordsService.updateWord(id, updateWord)
    }

}
