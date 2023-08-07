
import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';
import 'dotenv/config'




@Injectable()
export class ExerciseService {
    private readonly openai: any;

    constructor(){
        const configuration = new Configuration({
            organization: process.env.OPENAI_API_ORG,
            apiKey: process.env.OPENAI_API_KEY,
        });
         this.openai = new OpenAIApi(configuration);
    }

    async generateExercise(word: string){

        try {
            const data = {
                model: "gpt-3.5-turbo",
                prompt: `Say hello word in chatgpt using this word: ${word}`,
                temperature: 0.7,
                max_tokens: 15,
                stop: null,
                n: 1
              }
      
            const result = await this.openai.createCompletion(data)
            console.log("ChatGPT result: ", result)
            return result;
        } catch (error) {
            console.log("ChatGPT error: ", error)
        }
       
        
    }
}
