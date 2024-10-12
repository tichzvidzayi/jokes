import React, { useState, useEffect } from "react";

// Define the joke interface
interface JokeProps {
  type: string;
  setup: string;
  punchline: string;
}

// Function to fetch a random joke
const fetchJoke = async (): Promise<JokeProps | undefined> => {
  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );

    if (response.ok) {
      const data: JokeProps = await response.json();
      console.log("Joke fetch was successful");
      return data;
    } else {
      console.error("Fetch joke failed");
    }
  } catch (err) {
    console.error("Error occurred: ", err);
  }
};

// Slider component to display the joke
const Slider = () => {
  const [joke, setJoke] = useState<JokeProps | null>(null);

  useEffect(() => {
    const getJoke = async () => {
      const res = await fetchJoke(); // Call the fetchJoke function
      if (res) {
        setJoke(res); // Update state with the fetched joke
      }
    };
    getJoke();
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
