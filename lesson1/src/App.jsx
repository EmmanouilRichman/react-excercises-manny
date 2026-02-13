import { useState } from 'react'

const Statistics = ({good,neutral,bad,all}) => {
  return(
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => {
    setGood(good + + 1)
    setAll(all + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)

  }

  const handleResetClick = () => {
    setAll(0)
    setGood(0)
    setBad(0)
    setNeutral(0)
  }

  return (
    <div>
      <h2>Give Feedback</h2>
      <button onClick={handleGoodClick}>good </button>
      <button onClick={handleNeutralClick}>neutral </button>
      <button onClick={handleBadClick}>bad </button>
      <button onClick={handleResetClick}>Reset </button>


      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  )
}

export default App