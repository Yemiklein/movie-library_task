/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { Movie } from "../types/movie";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=da93b27d3d525687d0bbd9ae4d588e85"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data && Array.isArray(data.results)) {
          setMovies(data.results);
        } else {
          throw new Error("Invalid API response structure.");
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
        setMovies([]); // Fallback to an empty array
      }
    }

    fetchMovies();
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search movies..."
        className="p-2 border rounded mb-4 w-full"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredMovies.map((movie) => (
          <a key={movie.id} href={`/movie/${movie.id}`} className="block">
            <div className="border rounded-lg p-2 hover:shadow-md">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded"
              />
              <h3 className="mt-2 text-lg font-bold">{movie.title}</h3>
              <p className="text-sm text-gray-500">{movie.release_date}</p>
              <p className="text-sm text-yellow-500">⭐ {movie.vote_average}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
