import React from 'react'
import './Diagram.css'
import DiagramBar from './DiagramBar'

const Diagram = ({ dataSets }) => {

  const dataSetsValues = dataSets.map(dataSet => dataSet.value)

  const nextMonthCost = Math.max(...dataSetsValues)

  return (
    <div className='diagram'>
      {dataSets.map((dataSet) => (
        <DiagramBar
          key={dataSet.label}
          value={dataSet.value}
          maxValue={nextMonthCost}
          label={dataSet.label}
        />
      ))}
    </div>
  )
}

export default Diagram
