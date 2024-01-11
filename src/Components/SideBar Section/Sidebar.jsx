import React from 'react'
import './sidebar.css'

import logo from '../../Assets/user(1).png'
import { IoMdSpeedometer } from "react-icons/io";
import { MdDeliveryDining } from "react-icons/md";
import { MdOutlineExploreOff } from "react-icons/md";
import { BsTrophy } from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { BsCreditCard2Front } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";
const Sidebar = () => {
  return (
    <div className='sideBar grid'>
        <div className="logoDiv flex">
          <img src={logo} alt="Image Name" />
          <h2>AnimeStick</h2>
        </div>

        <div className="menuDiv">
          <h3 className="divTitle">
            QUICK MENU
          </h3>
          <u1 className="menuLists grid">

            <li className="listItem">
              <a href="#" className='menuLink flex'>
              <IoMdSpeedometer className="icon"/>
              <span className="smallText">
                Dash board
              </span>
              </a>
            </li>

            <li className="listItem">
              <a href="#" className='menuLink flex'>
              <MdDeliveryDining className="icon"/>
              <span className="smallText">
                My Orders
              </span>
              </a>
            </li>

            <li className="listItem">
              <a href="#" className='menuLink flex'>
              <MdOutlineExploreOff className="icon"/>
              <span className="smallText">
                Explore
              </span>
              </a>
            </li>
            
            <li className="listItem">
              <a href="#" className='menuLink flex'>
              <BsTrophy className="icon"/>
              <span className="smallText">
                Products 
              </span>
              </a>
            </li>
          </u1>
        </div>


        <div className="settingsDiv">
          <h3 className="divTitle">
            SETTINGS
          </h3>
          <u1 className="menuLists grid">

            <li className="listItem">
              <a href="#" className='menuLink flex'>
              <AiOutlinePieChart className="icon"/>
              <span className="smallText">
                Charts
              </span>
              </a>
            </li>

            <li className="listItem">
              <a href="#" className='menuLink flex'>
              <BiTrendingUp className="icon"/>
              <span className="smallText">
                Trends
              </span>
              </a>
            </li>

            <li className="listItem">
              <a href="#" className='menuLink flex'>
              <MdOutlinePermContactCalendar className="icon"/>
              <span className="smallText">
                Contact
              </span>
              </a>
            </li>
            
            <li className="listItem">
              <a href="#" className='menuLink flex'>
              <BsCreditCard2Front className="icon"/>
              <span className="smallText">
                Billing
              </span>
              </a>
            </li>
          </u1>
        </div>

        <div className="sideBarCard">
        <BsQuestionCircle className="icon"/>
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>

          <h3>Help Center</h3>
          <p>Having trouble</p>
          <button className='btn'>Go to help center</button>
        </div>
     </div>
    </div>
  )
}

export default Sidebar
