import React from "react";
import './profile.css'

export default function Profile () {
    return (
        <div>
            <div className="main">
            <div className="box">
                <div className="images">
                    <img src="./images/DQ.jpg"  /><br />
                    <button>Edit Profile</button>

                </div>
            </div>
        </div>

       <div className="user-details">
       <div className="box2">
        <div className="details">
            <label>Name   </label>
            <input type="text" /><br />
            <label>Age     </label>
            <input type="text" /><br />
            <label>E-Mail</label>
            <input type="text" /><br />
            <label>State</label>
            <input type="text" /><br />
            <label>District</label>
            <input type="text" /><br />
            <label>Pincode</label>
            <input type="text" /><br />
            <label>Phone No</label>
            <input type="text" /><br />
            <label>Job</label>
            <input type="text" /><br />
            <label>Height</label>
            <input type="text" /><br />
            <label>Address</label>
            <input type="text" /><br />
            
        </div>
        <button className="cancel">Cancel</button>
        <button className="update">Update</button>
  
      
            
        </div>
       </div>



        </div>
        
        


        
    )
}