import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateWordDto {
  @IsNumber()
  id: number;
  @IsNotEmpty()
  @IsNumber()
  userId: number;
  @IsNotEmpty()
  @IsString()
  word: string;
  @IsNotEmpty()
  @IsString()
  category: string;
  @IsBoolean()
  @IsOptional()
  completed: boolean;
  @IsNotEmpty()
  @IsNumber()
  wordLimit: number;
}

export class UpdateWordDto {
  @IsNumber()
  @IsOptional()
  id?: number;
  @IsNumber()
  @IsOptional()
  userId?: number;
  @IsString()
  @IsOptional()
  word?: string;
  @IsString()
  @IsOptional()
  category?: string;
  @IsBoolean()
  @IsOptional()
  completed?: boolean;
  @IsBoolean()
  @IsOptional()
  failure?: boolean;
  @IsNumber()
  @IsOptional()
  attemps?: number;
  @IsOptional()
  @IsNumber()
  wordLimit: number;
}
