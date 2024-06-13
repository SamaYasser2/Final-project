import React from 'react'
import'./YourProfile.css'
import Icon from '../../Assets/Images/classroom-Icon.jpg'
import { Link } from 'react-router-dom'
export default function YourProfile() {
  return <>
  
  <div className="container py-3 ">
        <div className="row gutters">
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
        <div className="card h-100 border-0">
            <div className="card-body">
                <div className="account-settings">
                    <div className="user-profile">
                        <div className="user-avatar">
                            <img src={Icon} alt="Maxwell Admin"/>
                        </div>
                        <h5 className="user-name">Alaa Hussein</h5>
                        <h6 className="user-email">alaah4649@gmail.com</h6>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
        <div className="card h-100 border-0">
            <div className="card-body ">
                <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h6 className="mb-2 text">Child Details</h6>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label for="fullName">User Name</label>
                            <input type="text" className="form-control rounded-pill" id="fullName"/>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label for="childNationality">Nationality</label>
                            <input type="text" className="form-control rounded-pill" id="childNationality"/>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label for="eMail">Email</label>
                            <input type="email" className="form-control rounded-pill" id="eMail"/>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label for="phone">Phone</label>
                            <input type="text" className="form-control rounded-pill" id="phone"/>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label for="Upassword">Password</label>
                            <input type="password" className="form-control  rounded-pill" id="Upassword"/>
                            <Link className="change-password" href="#">Change Password?</Link>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group pt-4">
                            <label className="pe-4">Gender</label>
                            <input type="radio" id="male" name="Child-Gender" value="male" />
                            <label className="pe-4 " for="male">Male</label>
                            <input type="radio" id="Female" name="Child-Gender" value="Female" />
                            <label for="Female">Female</label>
                        </div>
                        
                          

                            
                        </div>
                    </div>
                
                </div>
                <div className="container">

               

                <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                        <h6 className="mt-3 mb-2 text">Parent Details</h6>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label for="ParentFirstName">First Name</label>
                            <input type="text" className="form-control  rounded-pill" id="ParentFirstName"/>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label for="ParentlastName">Last Name</label>
                            <input type="text" className="form-control  rounded-pill" id="ParentlastName"/>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label for="City">City</label>
                            <input type="text" className="form-control  rounded-pill" id="City"/>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label for="ParentCountry">Country</label>
                            <input type="text" className="form-control rounded-pill" id="ParentCountry"/>
                        </div>
                    </div>
                </div>
                <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="text-right pt-4">
                            <button type="button" id="btn1"  name="submit" className="btn rounded-pill me-1">Cancel</button>
                            <button type="button" id="btn2" name="submit" className="btn rounded-pill">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
  </>
}
