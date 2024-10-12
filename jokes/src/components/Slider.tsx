import React, { useState, useEffect } from "react";

// fetch joke

const fetchJoke = async () => {
  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );

    if (response.ok) {
      const data = response.json();
      console.log("Joke fetch was successful");
      return data;
    } else {
      console.error("Fetch joke failed");
    }
  } catch (err) {
    console.error("Error occured : ", err);
  }
};

const Slider = () => {
  const [joke, setJoke] = useState<{}>();

  useEffect(() => {
    const getJoke = async () => {
      const res = await fetchJoke;
      if (res) {
        setJoke(res);
      }
    };
    getJoke();
  }, []);

  return (
    <>
      <p> Info</p>
      <h1> Abc </h1>
    </>
  );
};

export default Slider;
