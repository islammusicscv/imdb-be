import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Genre } from './entity/genre';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GenresService {
  constructor(
    @InjectRepository(Genre)
    private readonly genreRepository: Repository<Genre>,
  ) {}

  async findAll(): Promise<Genre[]> {
    return this.genreRepository.find();
  }

  async create(title: string): Promise<Genre> {
    const genre = this.genreRepository.create({ title: title });
    return this.genreRepository.save(genre);
  }

  async delete(id: number): Promise<void> {
    await this.genreRepository.delete(id);
  }

  async update(id: number, title: string): Promise<Genre> {
    const genre = await this.genreRepository.findOne({ where: { id: id } });
    genre.title = title;
    return this.genreRepository.save(genre);
  }
}
