"use client";

import { useState } from "react";

export default function JokePage() {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchJoke = async () => {
    setLoading(true);
    setError("");
    setJoke("");

    try {
      const res = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
      if (!res.ok) throw new Error("Failed to fetch joke");

      const data = await res.json();
      setJoke(data.joke);
    } catch (err) {
      setError("😢 Oops! Couldn't load the joke.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 to-pink-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">🤣 Random Joke Generator</h1>
      <button
        onClick={fetchJoke}
        className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition mb-4"
      >
        Tell Me a Joke
      </button>

      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}
      {joke && (
        <p className="bg-white p-4 rounded shadow-md max-w-xl text-center text-lg text-gray-800">
          {joke}
        </p>
      )}
    </div>
  );
}
