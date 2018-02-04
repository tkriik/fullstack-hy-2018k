import React from 'react'

const NameFilterInput = ({value, onChange}) => {
  return (
    <div>
      Rajaa näytettäviä:
        <input value={value}
               onChange={onChange} />
    </div>
  )
}

export default NameFilterInput
