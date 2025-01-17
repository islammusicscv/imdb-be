import { Body, Controller, Get, Post } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie';
import { CreateMovieDto } from './entities/create-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Get()
  async findAll(): Promise<Movie[]> {
    return this.movieService.findAll();
  }

  @Post()
  async create(@Body() createMovieDto: CreateMovieDto): Promise<Movie> {
    return this.movieService.create(createMovieDto);
  }
}
