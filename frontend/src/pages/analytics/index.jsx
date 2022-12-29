import React from 'react';
import Button from '../../components/button';
import './analytics.css'

const DataAndAnalyticsPage = () => {
  const options = [
    {
      name: 'Select County...',
      value: null
    },
    {
      name: 'Nairobi',
      value: 'nairobi',
    },
    {
      name: 'Mombasa',
      value: 'mombasa',
    },
    {
      name: 'Kisumu',
      value: 'kisumu'
    }
  ]
  return (
    <div className='analytics-container'>
      <div className='analytics-header'>
        <div className='home-header_search'>
          <input type="search" placeholder='Search a post' />
          <Button text={"Search"} className={"home-search_btn"} />
        </div>
        <div className='analytics-select'>
          <select>
            {options.map((item) => (
              <option>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <div className="test">Item1</div>
        <div className="test">Item2</div>
        <div className="test">Item3</div>
        <div className="test">Item4</div>
        <div className="test">Item5</div>
        <div className="test">Item6</div>
        <div className="test">Item7</div>
        <div className="test">Item8</div>
        <div className="test">Item9</div>
        <div className="test">Item10</div>
      </div>
    </div>
  )
}

export default DataAndAnalyticsPage