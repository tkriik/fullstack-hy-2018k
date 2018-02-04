import React from 'react'

const PersonRow = ({name, number}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{number}</td>
    </tr>
  )
}

const PersonTable = ({persons}) => {
  return(
    <table>
      <tbody>
        {persons.map(p =>
          <PersonRow key={p.name}
                     name={p.name}
                     number={p.number} />)}
      </tbody>
    </table>
  )
}

export default PersonTable
