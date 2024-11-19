/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { Movie } from "../../types/movie";

export default function Favorites() {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    try {
      const storedFavorites = JSON.parse(
        localStorage.getItem("favorites") || "[]"
      );

      if (Array.isArray(storedFavorites)) {
        setFavorites(
          storedFavorites.filter((movie) => movie?.id && movie?.title)
        );
      }
    } catch (error) {
      console.error("Error reading favorites from localStorage:", error);
      setFavorites([]);
    }
  }, []);

  const removeFavorite = (id: number) => {
    const updatedFavorites = favorites.filter((movie) => movie.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Favorite Movies</h1>
      {favorites.length === 0 ? (
        <p className="text-gray-500">
          No favorite movies yet. Add some to your favorites!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favorites.map((movie) => (
            <div key={movie.id} className="border rounded-lg p-2">
              <img
                src={`https://image.tmdb.org/t/p/w500${
                  movie.poster_path || ""
                }`}
                alt={movie.title || "No Title Available"}
                className="rounded"
              />
              <h3 className="mt-2 text-lg font-bold">
                {movie.title || "Unknown Movie"}
              </h3>
              <button
                onClick={() => removeFavorite(movie.id)}
                className="mt-2 p-1 bg-red-500 text-white rounded"
                aria-label={`Remove ${
                  movie.title || "this movie"
                } from favorites`}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
