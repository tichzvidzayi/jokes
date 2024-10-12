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
      console.error("Fetch error :");
    }

    const data: JokeProps = await res.json();
    return data;
  } catch (err) {
    console.error("Error occured : ", err);
  }
};

const Slider = () => {
  const [joke, setJoke] = useState<JokeProps | null>();

  useEffect(() => {
    const fetchAPI = async () => {
      const joke = await fetchJoke();

      setJoke(joke);
    };
    fetchAPI();
  }, []);

  return (
    <>
      {joke ? (
        <div>
          <p>Type: {joke.type}</p>
          <p>Setup: {joke.setup}</p>
          <p>Punchline: {joke.punchline}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Slider;
