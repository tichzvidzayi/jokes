import React, { useState, useEffect } from "react";

interface JokeProps {
  type: string;
  setup: string;
  punchline: string;
  id: number;
}

const fetchJoke = async (): Promise<JokeProps | undefined> => {
  try {
    const res = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );

    if (!res.ok) {
      console.error("Fetch error");
      return;
    }

    const data: JokeProps = await res.json();
    return data;
  } catch (err) {
    console.error("Error occurred: ", err);
  }
};

const Slider: React.FC = () => {
  const [joke, setJoke] = useState<JokeProps | null>(null);

  useEffect(() => {
    const fetchAPI = async () => {
      const joke = await fetchJoke();
      setJoke(joke || null);
    };

    fetchAPI();
  }, []);

  return (
    <div className="flex items-center justify-center h-10 w-screen  bg-gradient-to-r from-purple-400 to-blue-500">
      {joke ? (
        <div className="bg-white rounded-lg shadow-lg p-6 w-full  text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Type: {joke.type}
          </h2>
          <p className="text-5xl italic text-gray-600 mb-2">
            Setup: {joke.setup}
          </p>
          <p className="text-5xl font-semibold text-gray-800">
            Punchline: {joke.punchline}
          </p>
        </div>
      ) : (
        <p className="text-white text-xl">Loading...</p>
      )}
    </div>
  );
};

export default Slider;
