// @flow
import   { useState } from "react";
import * as React from "react";

let randomNumber  = Math.round(Math.random() * 10);

const GuessTheNumber  = ()  : React.Node  => {

  const [value, setValue]   = useState(0);
  const [results, setResults] = useState("");

  const onClick = () :void => {
    const userGuess :number = Math.floor(value);  
    setValue(userGuess);
    setResults(<p className="alert alert-danger">Pick a number</p>);

    if (userGuess === randomNumber)
      setResults(<p className="alert alert-success">Correct!</p>);
    if (userGuess > randomNumber)
      setResults(<p className="alert alert-warning">High Value, guess again</p>);
    if (userGuess < randomNumber)
      setResults(<p className="alert alert-warning">Low Value, guess again</p>);
  };

  return (
    <>
      <p className="lead">Guess the number between 1 and 10.</p>
      <input
        value={value}
        type="number"
        onChange={e => setValue(e.target.value)}
      />
      <button type="submit" onClick={onClick}> GUESS </button>
      <br />   <br />
      <p> {results} </p>
    </>
  );};
export default GuessTheNumber;