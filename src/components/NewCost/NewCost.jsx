import React from 'react'
import './NewCost.css'
import CostForm from './CostForm'

const NewCost = ({addNewCost }) => {
  return (
    <div className='new-cost'>
    <CostForm addNewCost={addNewCost} />
    </div>
  )
}

export default NewCost