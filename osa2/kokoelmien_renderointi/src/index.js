import React from 'react'
import ReactDOM from 'react-dom'

import Kurssi from './components/Kurssi'

const Opetusohjelma = ({kurssit}) => {
  return (
    <div>
      {kurssit.map(kurssi => <Kurssi key={kurssi.id} kurssi={kurssi} />)}
    </div>
  )
}

const App = () => {
  const kurssit = [
    {
      nimi: 'Half Stack -sovelluskehitys',
      id: 1,
      osat: [
        {
          nimi: 'Reactin perusteet',
          tehtavia: 10,
          id: 1
        },
        {
          nimi: 'CSS essentials',
          tehtavia: 5,
          id: 2
        },
        {
          nimi: 'Tiedonvälitys propseilla',
          tehtavia: 7,
          id: 3
        },
        {
          nimi: 'Komponenttien tila',
          tehtavia: 14,
          id: 4
        },
        {
          nimi: 'Clojurescript starterpack',
          tehtavia: 9,
          id: 5
        }
      ]
    },
    {
      nimi: 'Node.js',
      id: 2,
      osat: [
        {
          nimi: 'Routing',
          tehtavia: 3,
          id: 1
        },
        {
          nimi: 'Middlewaret',
          tehtavia: 7,
          id: 2
        },
        {
          nimi: 'Event Loops',
          tehtavia: 5,
          id: 3
        }
      ]
    }
  ]

  return (
    <div>
      <Opetusohjelma kurssit={kurssit} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
