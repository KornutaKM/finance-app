import React from 'react'
import './CostItem.css'
import CostDate from './CostDate'
import Card from '../UI/Card'

const CostItem = ({ price, title, date, deleteCost, id }) => {
  return (
    <li>
      <Card className='cost-item'>
        <CostDate date={date} />
        <div className='cost-item__description'>
          <h2>{title}</h2>
          <div className='cost-item__price'>${price}</div>
        </div>
        <button onClick={() => deleteCost(id)}>удалить</button>
      </Card>
    </li>
  )
}

export default CostItem
