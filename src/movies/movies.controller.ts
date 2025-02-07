import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie';
import { CreateMovieDto } from './entities/create-movie.dto';
import { UpdateMovieDto } from './entities/update-movie.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('movies')
@UseGuards(JwtAuthGuard)
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Get()
  async findAll(): Promise<Movie[]> {
    return this.movieService.findAll();
  }

  @Post()
  async create(
    @Body() createMovieDto: CreateMovieDto,
    @Request() req,
  ): Promise<Movie> {
    return this.movieService.create(createMovieDto, req.user.userId);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMovieDto: UpdateMovieDto,
  ): Promise<Movie> {
    return this.movieService.update(+id, updateMovieDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    this.movieService.delete(+id);
  }
}
