import React from 'react';

import AddPersonInput   from './AddPersonInput'
import NameFilterInput  from './NameFilterInput'
import PersonTable      from './PersonTable'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        {
          name: 'Arto Hellas',
          number: '040-123456'
        }
      ],
      newName: '',
      newNumber: '',
      nameFilter: ''
    }
  }

  addPerson = (event) => {
    event.preventDefault()

    const name = this.state.newName
    const number = this.state.newNumber

    const person = {
      name,
      number
    }

    let persons = this.state.persons
    persons = persons.find(p => p.name === name) === undefined ?
      persons.concat(person) :
      persons

    this.setState({
      persons,
      newName: '',
      newNumber: ''
    })
  }

  handleNameChange = (event) => {
    this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    this.setState({ newNumber: event.target.value })
  }

  updateNameFilter = (event) => {
    this.setState({ nameFilter: event.target.value })
  }

  render() {
    const persons = this.state.persons
    const nameFilter = this.state.nameFilter
    const personsToShow = persons.filter(person => {
      return person.name.toLowerCase().includes(nameFilter)
    })

    return (
      <div>
        <h2>Puhelinluettelo</h2>
          <NameFilterInput value={this.state.nameFilter}
                           onChange={this.updateNameFilter} />
          <h3>Lisää uusi</h3>
          <AddPersonInput onSubmit={this.addPerson}
                          name={this.state.newName}
                          nameChangeHandler={this.handleNameChange}
                          number={this.state.newNumber}
                          numberChangeHandler={this.handleNumberChange} />
          <h3>Numerot</h3>
          <PersonTable persons={personsToShow} />
        </div>
    )
  }
}

export default App
