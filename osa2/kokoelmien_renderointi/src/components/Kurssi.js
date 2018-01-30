import React from 'react'

const Osa = ({osa}) => {
  const {nimi, tehtavia} = osa

  return <div>{nimi} {tehtavia}</div>
}

const Yhteensa = ({tehtavia}) => {
  return <div>Yhteensä {tehtavia} tehtävää</div>
}

const Sisalto = ({osat}) => {
  const tehtavia = osat.reduce((tehtavia, osa) => {
    return tehtavia + osa.tehtavia
  }, 0)

  return (
    <div>
      {osat.map(osa => <Osa key={osa.id} osa={osa} />)}
      <Yhteensa tehtavia={tehtavia} />
    </div>
  )
}

const Otsikko = ({text}) => <h1>{text}</h1>

const Kurssi = ({kurssi}) => {
  const {nimi, osat} = kurssi

  return (
    <div>
      <Otsikko text={nimi} />
      <Sisalto osat={osat} />
    </div>
  )
}

export default Kurssi
