import React, { useState } from 'react'
import './Costs.css'
import Card from '../UI/Card'
import CostsFilter from './CostsFilter'
import CostList from './CostList'

import CostsDiagram from './CostsDiagram'

const Costs = ({ costs, deleteCost }) => {
  const [selectedYear, setSelectedYear] = useState('2023')

  const yearChangeHandler = (year) => {
    setSelectedYear(year)
  }
  const filteredCosts = costs.filter(
    (cost) => cost.date.getFullYear().toString() === selectedYear
  )
  return (
    <Card className='costs'>
    <CostsDiagram costs={filteredCosts}/>
      <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
      <CostList deleteCost={deleteCost} costs={filteredCosts} />
    </Card>
  )
}

export default Costs
