import React from 'react'
import'./Selectedreligion.css'
import MuslimTe from'../../Assets/Images/MuslimTe.png'
import { Link } from 'react-router-dom'
export default function Selectedreligion() {
  return <>
  
  <section id="About-teacher" >
        <div className="container">
            <div className="row my-5 ">
        <div className="about-img col-md-5 ">
            <div className="left">
        <img src={MuslimTe}  alt="Teacher"/>
        </div>
        </div>
        <div className="about-content col-md-7">
            <div className="right mt-5 mt-md-0">
        <h3 className=" abt-teacher fw-bolder display-6 "> Religion Teacher</h3>
        <span >UI / UX DESIGNER & WEB DEVELOPER</span>
        <p className="text-muted my-3">I am <span className="fw-bold"> Jerry Daniels</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima error magnam magni illum, veritatis optio, ut laudantium exercitationem ipsam tempora voluptatem facere cum odit voluptas nisi corrupti corporis harum repellendus suscipit ipsum! <br/> <br/>Sapiente, quibusdam blanditiis maiores reiciendis similique ipsa iusto ducimus iure eius, vel asperiores modi eligendi doloribus nihil aliquam exercitationem? Eveniet, animi eligendi doloribus </p>
        <div className="dots"><hr/></div>
       <div className="row">
        <div className="col-md-5">
             <ul>
            <li><b>Name:</b> Rdam smith</li>
            <li><b>Job Title:</b> UI/UX Designer</li>
            <li><b>Age: 26 Years</b></li>
        </ul>
        </div>
        <div className="col-md-5">
             <ul>
            <li><b> Location:</b>United States, US</li>
            <li><b>Freelance:</b>Available</li>
            <li><b>E-mail:</b>example@gmail.com </li>
        </ul>
        </div>
       </div>
      
        <div className="buttons d-flex mt-5 justify-content-center ">
        <Link to="#"  className="btn1 btn rounded-pill"> Enroll in course</Link>
        <Link to="#"  className="btn2 btn rounded-pill mx-3"> Chat <i class="fa-regular fa-comments" ></i></Link>
</div>
            </div>
        </div>
        </div>
        </div>
        </section>
  
  </>
}
