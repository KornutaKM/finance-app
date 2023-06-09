import React from 'react'
import './CostDate.css'
const CostDate = ({date}) => {
  let nowDate = new Date(date)
  return (
    <div className='cost-date'>
      <div className='cost-date__year'>{nowDate.getFullYear()}</div>
      <div className='cost-date__month'>
        {nowDate.toLocaleString('ru-RU', { month: 'long' })}
      </div>
      <div className='cost-date__day'>
        {nowDate.toLocaleString('ru-RU', {day:'2-digit'})}
      </div>
    </div>
  )
}

export default CostDate
