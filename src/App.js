import { useState } from 'react'
import Costs from './components/Costs/Costs'
import NewCost from './components/NewCost/NewCost'

function App() {
  const INITIAL_COSTS = [
    {
      date: new Date(2023, 6, 9),
      title: 'Холодильник',
      price: 999,
      id: Math.random(),
    },
    {
      date: new Date(2023, 2, 9),
      title: 'Ножи',
      price: 150,
      id: Math.random(),
    },
    {
      date: new Date(2023, 1, 9),
      title: 'Ноутбук',
      price: 1999,
      id: Math.random(),
    },
  ]
  const [costs, setCosts] = useState(INITIAL_COSTS)
  const deleteCost = (id) => {
    setCosts(costs.filter((cost) => cost.id !== id))
  }
  const addNewCost = (newCost) => {
    setCosts(prevCosts => {
      return [newCost, ...prevCosts]
    })
  }
  return (
    <div className='App'>
      <NewCost addNewCost={addNewCost} />
      <Costs costs={costs} deleteCost={deleteCost} />
    </div>
  )
}

export default App
