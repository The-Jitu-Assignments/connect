import React, { useState } from 'react';
import Button from '../../components/button';
import { BsFilter } from 'react-icons/bs'
import './home.css'

const HomePage = () => {
  const [show, setShow] = useState(false);
  return (
    <div className='home-container'>
      <div className='home-header'>
        <div className='home-header_top'>
          <div className='home-header_search'>
            <input type="search" placeholder='Search a post' />
            <Button text={"Search"} className={"home-search_btn"} />
          </div>
          <div className='home-header_btns'>
            <div className='home-filter_btn' onClick={() => setShow(!show)}>
              Filter
              <span>
                <BsFilter />
              </span>
            </div>
            <Button text={"Add Post"} className={"home-search_btn"} />
          </div>
        </div>
        {show && (
          <div className='home-filter_box'>
            <div className="home-filter_item">
              All
            </div>
            <div className="home-filter_item">
              Hackathons
            </div>
            <div className="home-filter_item">
              Events
            </div>
            <div className="home-filter_item">
              Achievements
            </div>
          </div>
        )}
      </div>
      <div className='home-content'>
        <div className="test">item1</div>
        <div className="test">
          Here, instead of e.target.value, we are simply passing the e object as whole. Make sure you don’t pass anything else other than a string in the data prop inside the Select component.

In our last step, we will simply display the form data for the user to cross-check and verify, and — if required — give the user the option to go back and change the input previously entered.
        </div>
        <div className="test">item3</div>
        <div className="test">item4</div>
        <div className="test">
          Here, instead of e.target.value, we are simply passing the e object as whole. Make sure you don’t pass anything else other than a string in the data prop inside the Select component.

In our last step, we will simply display the form data for the user to cross-check and verify, and — if required — give the user the option to go back and change the input previously entered.
        </div>
        <div className="test">item6</div>
        <div className="test">item7</div>
        <div className="test">item8</div>
        <div className="test">item9</div>
        <div className="test">
          Here, instead of e.target.value, we are simply passing the e object as whole. Make sure you don’t pass anything else other than a string in the data prop inside the Select component.

In our last step, we will simply display the form data for the user to cross-check and verify, and — if required — give the user the option to go back and change the input previously entered.
        </div>
      </div>
    </div>
  )
}

export default HomePage;