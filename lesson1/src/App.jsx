import { useState } from 'react'

const Statistics = ({good,neutral,bad}) => {
  return(
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)

  }

  return (
    <div>
      <h2>Give Feedback</h2>
      <button onClick={handleGoodClick}>good </button>
      <button onClick={handleNeutralClick}>neutral </button>
      <button onClick={handleBadClick}>bad </button>


      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App