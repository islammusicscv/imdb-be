import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './entities/movie';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Movie]), UsersModule],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
