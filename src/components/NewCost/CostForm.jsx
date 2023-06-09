import React, { useState } from 'react'
import './CostForm.css'

const CostForm = ({addNewCost}) => {
  const [data, setData] = useState({
    title: '',
    price: '',
    date: '',
  })
  const nameChangeHandler = (e) => {
    setData(prevData => {
      return { ...prevData, title: e.target.value }
    })
  }
  const priceChangeHandler = (e) => {
    setData((prevData) => {
      return { ...prevData, price: e.target.value }
    })
  }
  const dateChangeHandler = (e) => {
    setData((prevData) => {
      return { ...prevData, date: e.target.value }
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    data.title && data.price && data.date && addNewCost({...data, date: new Date(data.date),  id: Math.random().toString()})
    setData({
      title: '',
      price: '',
      date: '',
    })
  }

  const resetInputs = () => {
    setData({
      title: '',
      price: '',
      date: '',
    })
  }
  return (
    <form onSubmit={submitHandler}>
      <div className='new-cost__control'>
        <label htmlFor=''>Название</label>
        <input type='text' onChange={nameChangeHandler} value={data.title} />
      </div>
      <div className='new-cost__control'>
        <label htmlFor=''>Цена</label>
        <input
          type='number'
          min={0.01}
          step={0.01}
          onChange={priceChangeHandler}
          value={data.price}
        />
      </div>
      <div className='new-cost__control'>
        <label htmlFor=''>Дата</label>
        <input
          type='date'
          min='2021-01-01'
          max='2024-12-31'
          onChange={dateChangeHandler}
          value={data.date}
        />
      </div>
      <div className='new-cost__actions'>
        <button type='submit'>Добавить</button>
        <button type='reset' onClick={resetInputs}>Сбросить</button>
      </div>
    </form>
  )
}

export default CostForm
