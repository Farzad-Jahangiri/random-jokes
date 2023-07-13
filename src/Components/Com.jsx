import React, { useState } from "react";
import "./Com.css";
import Image from "./1.png";
import axios from "axios";

const GetNewJokes = async () => {
  let joke = "";
  const url =
    "https://api.humorapi.com/jokes/random?api-key=8030a698901d46a0946cc0281134f3fa&max-length=140";
  try {
    const response = await axios.get(url);
    const data = response.data;
    joke = data;
  } catch (error) {
    joke = error.message;
  }
  return joke;
};

function Com() {
  const [textElementJoke, setTextElementJoke] = useState(
    "Click below to read a joke"
  );

  const BTNgetJokeHandler = async() => {
    setTextElementJoke("LOADING...");
    await GetNewJokes().then((response) => {
      if (response.joke) setTextElementJoke(response.joke);
      else setTextElementJoke(response);
    });
  };

  return (
    <div className="Com">
      <nav className="com1">
        <img src={Image} alt="" />
        <p className="one">{textElementJoke}</p>
        <button onClick={BTNgetJokeHandler} type="button" className="btn">
          Get Random Joke
        </button>
      </nav>
    </div>
  );
}

export default Com;

// https://phoenixnap.com/kb/yarn-windows
