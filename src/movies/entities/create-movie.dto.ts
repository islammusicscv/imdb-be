import { IsDateString, IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  title: string;
  @IsString()
  description: string;
  @IsDateString()
  release_date: Date;
  @IsNumber()
  @Min(1)
  @Max(10)
  rating: number;
}
