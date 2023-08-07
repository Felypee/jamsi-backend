import { Body, Controller, Post } from '@nestjs/common';
import { ExerciseService } from './exercise.service';

@Controller('exercise')
export class ExerciseController {

    constructor(private exerciseService: ExerciseService){}

    @Post()
    generateExercise(@Body('word') word: string){
        return this.exerciseService.generateExercise(word)
    }
}
