import CostItem from './CostItem'
import './CostList.css'

const CostList = ({ costs, deleteCost }) => {
  if (costs.length === 0) {
    return <h2 className='cost-list__fallback'>В этом году нет расходов</h2>
  } else {
    return (
      <ul className='cost-list'>
        {costs.map((item) => (
          <CostItem
            key={item.id + Math.random()}
            {...item}
            deleteCost={deleteCost}
          />
        ))}
      </ul>
    )
  }
}
export default CostList
