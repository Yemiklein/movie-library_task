import { ReactNode } from "react";

export interface Movie {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
}


export interface MovieDetails {
  release_date: ReactNode;
  vote_average: ReactNode;
  title: string;
  poster_path: string;
  overview: string;
  genres: { name: string }[];
}
