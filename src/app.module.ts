import { Module } from '@nestjs/common';
import { WordsModule } from './words/words.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ExerciseModule } from './exercise/exercise.module';




@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/jamsi'),
    WordsModule,
    ExerciseModule,
  ],

})
export class AppModule {}
