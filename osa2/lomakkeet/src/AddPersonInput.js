import React from 'react'

const AddPersonInput = ({
  onSubmit,
  name,
  nameChangeHandler,
  number,
  numberChangeHandler
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        Nimi:
          <input value={name}
                 onChange={nameChangeHandler} />
      </div>
      <div>
        Numero:
          <input value={number}
                 onChange={numberChangeHandler} />
      </div>
      <div>
        <button type="submit">Lisää</button>
      </div>
    </form>
  )
}

export default AddPersonInput
