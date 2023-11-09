
import React, { useState } from 'react';

const Statistics = (props) => {
  good + " " + setGood
  neutral  + " " + setNeutral
  bad + " " + setBad
  all + " " + setAll
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
  const [all, setAll] = useState(0)
  const Button = (props) => (
    <button onClick={props.handleClick}>{props.text} </button>
  )

const setToGood = NewGood => {
  console.log("value of good: ", NewGood)
  setGood(NewGood)
}
const setToNeutral = NewNeutral => {
  console.log("value of neutral: ", NewNeutral)
  setNeutral(NewNeutral)
}
const setToBad = NewBad => {
  console.log("value of bad: ", NewBad)
  setBad(NewBad)
}
const setToAll = NewAll => {
  console.log("value of all: ", NewGood + NewNeutral + NewBad)
  setAll(NewAll)
}
  return (
    <div>
      <h2>give feedback</h2>
       
  <Button  handleClick={() => setToGood(good + 1)} text="good"/>
  <Button   handleClick={() => setToNeutral(neutral + 1)} text="neutral"/>
  <Button   handleClick={() => setToBad(bad + 1)}   text="bad"/>

   

<h2>statistics</h2>

good {good}<br/>
neutral  {neutral}<br/>
bad  {bad}<br/>
all {all}

    </div>
  )
}

export default App

