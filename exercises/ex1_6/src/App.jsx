
import React, { useState } from 'react';

const Statistics = (props) => {
  good + " " + setGood
  neutral  + " " + setNeutral
  bad + " " + setBad
}


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const Button = (props) => (
    <button onClick={props.handleClick}>{props.text} </button>
  )

const setToGood = NewGood => {
  console.log("value of good: ", NewGood)
  setGood(NewGood)
}
const setToNeutral = NewNeutral => {
  console.log("value of good: ", NewNeutral)
  setNeutral(NewNeutral)
}
const setToBad = NewBad => {
  console.log("value of good: ", NewBad)
  setGood(NewBad)
}
  
  return (
    <div>
      <h2>give feedback</h2>
       
      <Button handleClick={() => setToGood(good + 1)} text="good"/>
  <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral"/>
  <Button handleClick={() => setToBad(bad + 1)} text="bad"/>

   

    </div>
  )
}

export default App

