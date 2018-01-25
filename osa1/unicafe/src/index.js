import React from 'react'
import ReactDOM from 'react-dom'

const calculateAverage = (good, neutral, bad) => {
  const total = good + neutral + bad
  const sum = good * 1 + bad * -1
  if (total !== 0) {
    return sum / total
  } else {
    return 0
  }
}

const calculateGoodPercentage = (good, neutral, bad) => {
  const total = good + neutral + bad
  if (total !== 0) {
    return 100 * (good / total)
  } else {
    return 0
  }
}

const Title = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({text, clickHandler}) => {
  return <button onClick={clickHandler}>{text}</button>
}

const StatisticsField = ({text, value, item}) => {
  if (item !== undefined) {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
        <td>{item}</td>
      </tr>
    )
  } else {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    )
  }
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad

  if (total !== 0) {
    const average         = calculateAverage(good, neutral, bad)
    const goodPercentage  = calculateGoodPercentage(good, neutral, bad)
    return (
      <table>
        <tbody>
          <StatisticsField text='Hyvä'          value={good} />
          <StatisticsField text='Neutraali'     value={neutral} />
          <StatisticsField text='Huono'         value={bad} />
          <StatisticsField text='Keskiarvo'     value={average} />
          <StatisticsField text='Positiivisia'  value={goodPercentage} item='%'/>
        </tbody>
      </table>
    )
  } else {
    return <div>Ei yhtään palautetta annettu.</div>
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      good:     0,
      neutral:  0,
      bad:      0
    }
  }

  render() {
    const incrementHandler = field => {
      return () => {
        const newState = {}
        newState[field] = this.state[field] + 1
        this.setState(newState)
      }
    }

    const incrementGood     = incrementHandler('good')
    const incrementNeutral  = incrementHandler('neutral')
    const incrementBad      = incrementHandler('bad')

    const good    = this.state.good
    const neutral = this.state.neutral
    const bad     = this.state.bad

    return (
      <div>
        <Title text='Anna palautetta' />
        <div>
          <Button text='Hyvä'       clickHandler={incrementGood} />
          <Button text='Neutraali'  clickHandler={incrementNeutral} />
          <Button text='Huono'      clickHandler={incrementBad} />
        </div>
        <Title text='Statistiikka' />
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
