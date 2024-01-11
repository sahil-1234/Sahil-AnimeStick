import React from 'react'
import './activity.css'
import {BsArrowRightShort} from 'react-icons/bs';

import user1 from '../../../Assets/user(1).png';
import user2 from '../../../Assets/user(2).png';
import user3 from '../../../Assets/user(3).png';
import user5 from '../../../Assets/user(5).png';
import user4 from '../../../Assets/user(4).png';
const Activity = () => {
  return (
    <div className='activitySection'>
      <div className="heading flex">
        <h1>Recent Activity</h1>
        <button className='btn flex'>
          Sell All
          <BsArrowRightShort className="icon"/>
        </button>
      </div>
      
      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={user1} alt="Customer Image" />
          <div className="customerDetails">
            <span className='name'>Naruto</span>
            <small>Order a new Sticker</small>
          </div>
          <div className="duration">
            1 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user2} alt="Customer Image" />
          <div className="customerDetails">
            <span className='name'>Itachi</span>
            <small>Order a new Sticker</small>
          </div>
          <div className="duration">
            5 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user3} alt="Customer Image" />
          <div className="customerDetails">
            <span className='name'>Kakashi</span>
            <small>Order a new Sticker</small>
          </div>
          <div className="duration">
            7 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user4} alt="Customer Image" />
          <div className="customerDetails">
            <span className='name'>Minato</span>
            <small>Order a new Sticker</small>
          </div>
          <div className="duration">
            45 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user5} alt="Customer Image" />
          <div className="customerDetails">
            <span className='name'>Hinata</span>
            <small>Order a new Sticker</small>
          </div>
          <div className="duration">
            1 hour ago
          </div>
        </div>

      </div>
    </div>
  )
}

export default Activity
