/* eslint-disable @next/next/no-img-element */

"use client"; // Marks this file as a client component

import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../../utils/tmdb";
import { MovieDetails } from "../../../types/movie";

// Define Params type
interface Params {
  id: string;
}

interface MovieDetailsPageProps {
  params: Params; // params as passed by Next.js
}

export default function MovieDetailsPage({ params }: MovieDetailsPageProps) {
  const [movie, setMovie] = useState<MovieDetails | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const movieDetails = await fetchMovieDetails(params.id);
      setMovie(movieDetails);
    };

    fetchData();
  }, [params.id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 min-h-screen flex flex-col justify-between items-center w-full bg-gray-100">
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-7xl mx-auto">
        {/* Movie Poster */}
        <div className="w-full md:w-1/2">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>

        {/* Movie Details */}
        <div className="flex flex-col justify-start w-full md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <p className="text-gray-700 mb-6">{movie.overview}</p>

          <div className="mb-4">
            <strong>Genres: </strong>
            {movie.genres.map((genre) => genre.name).join(", ")}
          </div>

          <div className="mb-4">
            <strong>Release Date: </strong>
            {movie.release_date}
          </div>

          <div className="mb-4">
            <strong>Rating: </strong> ⭐ {movie.vote_average}
          </div>
        </div>
      </div>
    </div>
  );
}
