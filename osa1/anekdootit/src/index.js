import React from 'react'
import ReactDOM from 'react-dom'

const Anecdote = ({anecdotes, selected}) => {
  return <div>{anecdotes[selected]}</div>
}

const Button = ({text, clickHandler}) => {
  return <button onClick={clickHandler}>{text}</button>
}

const SubTitle = ({text}) => {
  return <h2>{text}</h2>
}

const Votes = ({selected, votes}) => {
  const voteCount = votes[selected] ? votes[selected] : 0
  const text = 'Has ' + voteCount + ' votes'
  return <div>{text}</div>
}

const MostPopularAnecdote = ({anecdotes, votes}) => {
  const maxVoteIndex = Object.keys(votes).reduce((a, b) => {
    if (votes[a] > votes[b]) {
      return a
    } else {
      return b
    }
  }, 0)

  return (
    <div>
      <Anecdote anecdotes={anecdotes} selected={maxVoteIndex} />
      <Votes selected={maxVoteIndex} votes={votes} />
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      votes: {}
    }
  }

  render() {
    const setRandomAnecdote = () => {
      return () => {
        const anecdoteCount = this.props.anecdotes.length
        const newSelected = Math.floor(Math.random() * anecdoteCount)
        const newState = {
          selected: newSelected
        }

        this.setState(newState)
      }
    }

    const addVote = () => {
      return () => {
        const selected = this.state.selected
        const votes = {...this.state.votes}
        const voteCount = votes[selected] ? votes[selected] + 1 : 1
        votes[selected] = voteCount
        const newState = {
          votes: votes
        }

        this.setState(newState)
      }
    }

    return (
      <div>
        <Anecdote anecdotes={this.props.anecdotes}
                  selected={this.state.selected} />
        <Votes selected={this.state.selected}
               votes={this.state.votes} />
        <Button text='Vote' clickHandler={addVote()} />
        <Button text='Next anecdote' clickHandler={setRandomAnecdote()} />
        <SubTitle text='Anecdote with most votes:' />
        <MostPopularAnecdote anecdotes={this.props.anecdotes}
                             votes={this.state.votes} />
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
