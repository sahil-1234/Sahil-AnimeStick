import React from 'react'
import './listing.css'

import {BsArrowRightShort} from 'react-icons/bs';
import {AiFillHeart} from 'react-icons/ai';
import {AiOutlineHeart} from 'react-icons/ai';
import img from '../../../Assets/image(2).jpg';
import img1 from '../../../Assets/image(3).jpg';
import img2 from '../../../Assets/image(4).jpg';
import img3 from '../../../Assets/image(5).jpg';
import user1 from '../../../Assets/user(1).png';
import user2 from '../../../Assets/user(2).png';
import user3 from '../../../Assets/user(3).png';
import user4 from '../../../Assets/user(4).png';
const Listing = () => {
  return (
    <div className='listingSection'>
      <div className="heading flex">
        <h1>My Listings</h1>
        <button className='btn flex'>
          See All <BsArrowRightShort
          className="icon"/>
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className="icon"/>
          <img src={img} alt="Image Name" />
          <h3>Demon Slayer</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon"/>
          <img src={img1} alt="Image Name" />
          <h3>Naruto</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon"/>
          <img src={img2} alt="Image Name" />
          <h3>Dragon ball</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon"/>
          <img src={img3} alt="Image Name" />
          <h3>Attack On Titans</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className='btn flex'>
              Sell All <BsArrowRightShort className='icon'/>
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user1} alt="User Image" />
              <img src={user2} alt="User Image" />
              <img src={user3} alt="User Image" />
              <img src={user4} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
                786 plant sold <br />
                <small>
                  20 sellers <span className="data">5 days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className='btn flex'>
              Sell All <BsArrowRightShort className='icon'/>
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user3} alt="User Image" />
              <img src={user1} alt="User Image" />
              <img src={user4} alt="User Image" />
              <img src={user2} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
                556 plant sold <br />
                <small>
                  28 sellers <span className="data">20 days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing
