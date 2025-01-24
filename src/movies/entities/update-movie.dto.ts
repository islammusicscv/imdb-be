import {
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class UpdateMovieDto {
  @IsOptional()
  @IsString()
  title?: string;
  @IsOptional()
  @IsString()
  description?: string;
  @IsOptional()
  @IsDateString()
  release_date?: Date;
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(10)
  rating?: number;
  @IsOptional()
  @IsNumber()
  genre_id?: number;
}
