import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './entities/movie';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './entities/create-movie.dto';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}

  async findAll(): Promise<Movie[]> {
    return this.movieRepository.find();
  }

  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    const newMovie = this.movieRepository.create(createMovieDto);
    return this.movieRepository.save(newMovie);
  }
}
