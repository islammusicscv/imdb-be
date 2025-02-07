import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Genre } from '../../genres/entity/genre';
import { User } from '../../users/entity/user.entity';

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
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Genre, (genre) => genre.movies, { nullable: false })
  @JoinColumn({ name: 'genre_id' })
  genre: Genre;
  @ManyToOne(() => User, (user) => user.movies, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  user: User;
}
