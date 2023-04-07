import React, { useState } from "react";
import './register.css'

export default function Register () {
    function registerhandle(e)
    {
        e.preventDefault()
    }
    return(
        <div>
            <div className="register">
                <div className="container">
                    <div className="box">
                        <h4>Registration</h4>
                        <form onSubmit={registerhandle}>
                        <div className="user-details">
                            <div className="input-details">
                                <span className="details">First Name</span>
                                <input type="text" placeholder="The First Name" required />
                            </div>
                            <div className="input-details">
                                <span className="details">Last Name</span>
                                <input type="text" placeholder="The Last Name" required />
                            </div>
                            <div className="input-details">
                                <span className="details">Date of Birth</span>
                                <input type="date" placeholder="Specify your DOB" required />
                            </div>
                            <div className="input-details">
                                <span className="details">Phone Number</span>
                                <input type="text" placeholder="Specify your PhoneNo" required />
                            </div>
                            <div className="input-details">
                                <span className="details">E-Mail</span>
                                <input type="text" placeholder="Enter your Email" required />
                            </div>
                            <div className="input-details">
                                <span className="details">Gender</span>
                                <select name="Gender" id="Gender">
                                <option value="male">Male</option>
                                <option value="female">Fe-Male</option>
                                <option value="other">Prefer not to say</option>
                                </select>
                            </div>
                            <div className="input-details">
                                <span className="details">Password</span>
                                <input type="password" placeholder="Enter the Password" required />
                            </div>
                            <div className="input-details">
                                <span className="details">Confirm Pasword</span>
                                <input type="password" placeholder="Retype the Password" required />
                            </div>
                            <div className="input-details">
                                <span className="details">State</span>
                                <select name="State" id="State">
                                <option value="Andhra">Andhra Pradesh</option>
                                <option value="Arunachal">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chhattis">Chhattisgarh</option>
                                <option value="Goa">Goa</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Himachal">Himachal Pradesh</option>
                                <option value="Jhar">Jharkhand</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Madhya">Madhya Pradesh</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Manipur">Manipur</option>
                                <option value="Meghalaya">Meghalaya</option>
                                <option value="Mizoram">Mizoram</option>
                                <option value="Nagaland">Nagaland</option>
                                <option value="Odisha">Odisha</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Sikkim">Sikkim</option>
                                <option value="TN">Tamil Nadu</option>
                                <option value="Telengana">Telengana</option>
                                <option value="Tripura">Tripura</option>
                                <option value="Uttar">Uttarkhand</option>
                                <option value="UP">Uttar Pradesh</option>
                                <option value="WB">West Bengal</option>
                                <option value="Delhi">Delhi</option>
                                </select>
                                
                            </div>
                            <div className="input-details">
                                <span className="details">Address</span>
                                <input type="text" placeholder="Your Home" required />
                            </div> <br />
                            <button type="submit">Register</button>
                        </div>
                        </form>
                        
                    </div>
                </div>
            </div>

        </div>

    )
}