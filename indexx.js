import React from "react";
import './indexx.css'


import { FaAlignLeft } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { FaStackOverflow  } from "react-icons/fa";
import {HiOutlineHeart} from "react-icons/hi2"

import {FaTelegramPlane} from "react-icons/fa"



export default function Indexx () {
    return(
        <div>
            
            <nav className="flex-div">
                <div className="nav-left flex-div">
                    <h3 className="menu"><FaAlignLeft /></h3>
                    <h3 className="abc">bandhan</h3>
                </div>
                <div className="nav-middle flex-div">
                    <div className="search flex-div">
                        <input type="text" placeholder="Search" />
                        <img src="./images/search.png" />
                    </div>

                </div>
                <div className="nav-right  flex-div">
                    <h3><FaComment /></h3>
                    <h3><FaRegPaperPlane /></h3>
                    <h3><FaRegMoon /></h3>
                    <h3><FaUserCircle /></h3>
                </div>
            </nav>
           
           { /* Sidebar*/}

           <div className="sidebar">
            <div className="shortcut">
                <a href="#"><h3><FaStackOverflow /></h3><p>Home</p></a>
                <a href="#"><h3><FaStackOverflow /></h3><p>Filter</p></a>
                <a href="#"><h3><FaStackOverflow /></h3><p>Support</p></a>
                <a href="#"><h3><FaStackOverflow /></h3><p>Settings</p></a>
                
            </div>
           </div>

           {/*  Images */}

           <div className="images">
        <div className="container">
        <div className="row">
            <div className="box">
                <div className="col-1"><img src="./images/David.jfif" /></div>
                </div>
                <div className="box">
                <div className="col-1"><img src="./images/Dq.jpg" /></div>  </div>
                <div className="box">
                <div className="col-1"><img src="./images/Dq.jpg" /></div>  </div>
                <div className="box">
                <div className="col-1"><img src="./images/Dq.jpg" /></div>
            </div>
       
        </div>

    <div className="row">
        <div className="box">
            <div className="col-1"><img src="./images/David.jfif" />
                {/*<div className="contents">
                    <h3><HiOutlineHeart /></h3>
                    <h3><FaTelegramPlane /></h3>
                    
                    </div>*/}</div>
            </div>
            <div className="box">
                <div className="col-1"><img src="./images/Dq.jpg" />
                <p>Anand</p> <p>26yrs</p>
                <div className="contents">
                    <h3><HiOutlineHeart /></h3>
                    <h3><FaTelegramPlane /></h3>
                    
                    </div></div>  </div>
                <div className="box">
                <div className="col-1"><img src="./images/Dq.jpg" /></div>  </div>
                <div className="box">
                <div className="col-1"><img src="./images/Dq.jpg" /></div>
            </div>
            

    </div>
    </div>
    </div> 

       




        <script src="script.js"></script>
</div>
    )
}