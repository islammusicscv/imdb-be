import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Genre } from '../../genres/entity/genre';

@Entity('movies') //ime tabele
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  release_date: Date;
  @Column()
  rating: number;
  @ManyToOne(() => Genre, (genre) => genre.movies, { nullable: false })
  @JoinColumn({ name: 'genre_id' })
  genre: Genre;
}
