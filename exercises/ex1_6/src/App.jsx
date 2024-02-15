
import React, { useState } from 'react';

/*const Statistics = (props) => {
  good + " " + setGood
  neutral  + " " + setNeutral
  bad + " " + setBad
  all + " " + setAll
}*/


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
  

const setToGood = () => {
  console.log("value of good: ", NewGood)
  const upgood = good + 1
  setGood(upgood)
  setAll(upgood + upneutral + upbad)
}
const setToNeutral = () => {
  console.log("value of neutral: ", NewNeutral)
  const upneutral = bad + 1
  setNeutral(upneutral)
  setAll(upgood + upneutral + upbad)
}
const setToBad = () => {
  console.log("value of bad: ", NewBad)
  const upbad = bad + 1
  setBad(upbad)
  setAll(upgood + upneutral + upbad)
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

