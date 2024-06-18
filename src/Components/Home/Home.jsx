import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import student from '../../Assets/Images/Student.png'
import arabic from'../../Assets/Images/ArabicCard.png'
import religion from'../../Assets/Images/ReligionCard.png'
import history from'../../Assets/Images/HistoryCard.png'
import about from '../../Assets/Images/AboutUs.png'
export default function Home() {

  // document.getElementById("scroll").addEventListener("click", function() {
  //   window.scrollBy(0, -window.innerHeight);
  // });
  

  return<>

    <div id='Home' className="Header">
        <div className="container py-5">
<div className="row">
  <div className="col-md-5 offset-1 m-auto "> 
  <div className="header-content">
           <span className='text-muted '>Knowledge Connection</span>
            <h1>
            Open the Door to the Future</h1>
            <p>Giving every student the opportunity to access the best education and open the door to 
                the world of knowledge.
                
                Start your learning journey today with Edudu to become an outstanding student in our 
                learning community.</p>
           <div className="home-buttons mt-5 d-flex justify-content-center">
            <Link  className='btn1 btn rounded-pill'>Learn More</Link>
            <Link  className="btn2 btn rounded-pill  mx-3" to="https://www.youtube.com/">
              <i className="fa-solid fa-play"></i> Watch a Video</Link>
           </div>
            
           </div>
           </div>
  <div className="col-md-6">
    <div className="Hero-img"><img src={student} alt=""/> </div>
    </div>
</div>  
    </div>
        </div>

       <div id='our-tracks' className="subjects-cards">
        <h2 className="section-header fs-1 fw-bold text-center">Our<span> tracks</span></h2>
        <div className="container py-4">
          <div className="row">
            <div className="col-md-4  my-3">
            <div class="card subject-transf overflow-hidden" style={{width:' 20rem'}}>
                <img src={arabic} class="card-img-top" alt="Arabic"/>
                     <div class="card-body text-center">
                      <h2>Arabic</h2>
                <p class="card-text">Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.</p>
                <Link  to="/SubjectArabic" className='btn1  btn rounded-pill'>Join Now</Link>
                  </div>
                    </div>
                    </div>

                    <div className="col-md-4  my-3">
            <div class="card subject-transf overflow-hidden" style={{width:' 20rem'}}>
                <img src={religion} class="card-img-top" alt="Religion"/>
                     <div class="card-body text-center">
                      <h2>Religion</h2>
                <p class="card-text">Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.</p>
                <Link  to="/SubjectReligion" className='btn1  btn rounded-pill'>Join Now</Link>
                  </div>
                    </div>
          </div>

          <div className="col-md-4 my-3">
            <div class="card subject-transf overflow-hidden" style={{width:' 20rem'}}>
                <img src={history} class="card-img-top" alt="History"/>
                     <div class="card-body text-center">
                      <h2>History</h2>
                <p class="card-text">Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.</p>
                <Link  className='btn1  btn rounded-pill'>Join Now</Link>
                  </div>
                    </div>
          </div>
        </div>
       </div>
       </div>


       <div className="choose-us">
       <h2 className="section-header fs-1 fw-bold text-center mt-5 ">Why<span> Choose</span> Us</h2>
       <div className="container py-4">
        <div className="row">
        <div class="col-md-4 my-3">
<div class="why text-center py-4 ">
<i class="fa-solid fa-headset fs-3"></i>
<h4 class="my-3">Provide Live Sessions</h4>
<p>Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever</p>
</div>
</div>

<div class="col-md-4 my-3">
<div class="why text-center py-4 ">
<i class="fa-solid fa-calendar-days fs-3"></i>
<h4 class="my-3">Easy Scheduling</h4>
<p>Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever</p>
</div>
</div>

<div class="col-md-4 my-3">
<div class="why text-center py-4 ">
<i class="fa-solid fa-users-line fs-3"></i>
<h4 class="my-3">Customer Tracking</h4>
<p>Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever</p>
</div>
</div>



        </div>
       </div>
       </div>

       <div id='about-us' className="About-us">
       <h2 className="section-header fs-1 fw-bold text-center mt-5 "><span> About</span> Us</h2>
      <div className="container ">
          <div className="row">
            <div className="col-md-6">
              <img src={about} alt="child"  className='w-100 rounded-circle'/>
            </div>
            <div className=" about-p col-md-6 m-auto  ">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset</p>
            </div>
          </div>
        </div> 
      </div>
       
       <div id='contact-us' className="contact-us">
       <h2 className="section-header fs-1 fw-bold text-center mt-5 ">Need Help??<span> Contact Us..</span> </h2>
       <div className="container py-4">

       <div className="form p-5 ">
<form >
<div className="input-email d-flex justify-content-between ">
  <div className="input w-50">
  <input type="text" name="Username" placeholder="Name" className="p-2 form-control rounded-pill"/>
</div>

<div className="email w-50">
  <input type="email" name="UserEmail" placeholder="Email" className=" p-2 form-control rounded-pill"/>
</div>
</div>

<div className="text w-100  my-3 text-center" >

  <textarea name="" id="" cols="30" rows="5" placeholder="Message" className="form-control "></textarea>
</div>
<Link  className=" btn1 btn rounded-pill">Submit</Link>
</form>
</div>
       </div>
       </div>
</>
}
