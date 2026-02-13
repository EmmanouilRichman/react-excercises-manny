import { useState } from 'react'

const StatisticsLine = ({text, value}) => {
  return (
    <div>
      <p>{text} {value}</p>
    </div>
  )

}

const Statistics = ({good,neutral,bad,all}) => {

  if (all > 0){
    return(
      <div>
        <StatisticsLine text = 'good' value = {good}/>
        <StatisticsLine text = 'neutral' value = {neutral}/>
        <StatisticsLine text = 'bad' value = {bad}/>
        <StatisticsLine text = 'all' value = {all}/>
        <StatisticsLine text = 'average' value = { all > 0 ? (good - bad)/all  : 0 }/>
        <StatisticsLine text = 'positive' value = {good > 1 ? (good / all) * 100 + '%' : 0 + '%'}/>
      </div>
    )
  }
  return(
    <div>
      <p>No feedback given!</p>
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