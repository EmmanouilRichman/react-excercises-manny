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
        <table>
          <tr><StatisticsLine text = 'good' value = {good}/></tr>
          <tr><StatisticsLine text = 'neutral' value = {neutral}/></tr>
          <tr><StatisticsLine text = 'bad' value = {bad}/></tr>
          <tr><StatisticsLine text = 'all' value = {all}/></tr>
          <tr> <StatisticsLine text = 'average' value = { all > 0 ? (good - bad)/all  : 0 }/></tr>
          <tr><StatisticsLine text = 'positive' value = {good > 1 ? (good / all) * 100 + '%' : 0 + '%'}/></tr>
        </table>
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
   const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [selected, setSelected] = useState(0)

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

  const getAnecdote = () => {
    let position = Math.floor(Math.random() * anecdotes.length - 0)
    console.log(position)
    setSelected(position)
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

      <h2>Random Anecdote!</h2>
      <button onClick={getAnecdote}>Get Anecdote</button>
      <p>{anecdotes[selected]}</p>
    </div>
  )
}

export default App