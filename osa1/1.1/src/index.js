import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
  return (
    <h1>{props.kurssi}</h1>
  )
}

const Sisalto = (props) => {
  return (
    <p>{props.osa} {props.tehtavia}</p>
  )
}

const Yhteensa = (props) => {
  return (
    <div>Yhteensä {props.tehtavia} tehtävää</div>
  )
}

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14

  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto osa={osa1} tehtavia={tehtavia1} />
      <Sisalto osa={osa2} tehtavia={tehtavia2} />
      <Sisalto osa={osa3} tehtavia={tehtavia3} />
      <Yhteensa tehtavia={tehtavia1 + tehtavia2 + tehtavia3} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
