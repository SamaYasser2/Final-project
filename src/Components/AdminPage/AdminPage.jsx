import React, {useState} from 'react'
import './AdminPage.css'
export default function AdminPage() {


  const SwitchContent = () => {
    const [showAttendance, setShowAttendance] = useState(true);
  
    const toggleContent = (content) => {
      if (content === 'Attendance') {
        setShowAttendance(true);
      } else if (content === 'Test') {
        setShowAttendance(false);
      }
    }};



  return <>

<section className=' d-flex justify-content-center flex-column m-2  overflow-x:auto'>


<ul className="nav nav-tabs m-auto" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active spy fw-bold" id="All-tab" data-bs-toggle="tab" data-bs-target="#All-tab-pane" type="button" role="tab" aria-controls="All-tab-pane" aria-selected="true">Student's info.</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link spy fw-bold" id="Brand-tab" data-bs-toggle="tab" data-bs-target="#Brand-tab-pane" type="button" role="tab" aria-controls="Brand-tab-pane" aria-selected="false">Classroom</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link spy fw-bold" id="Design-tab" data-bs-toggle="tab" data-bs-target="#Design-tab-pane" type="button" role="tab" aria-controls="Design-tab-pane" aria-selected="false">Courses</button>
  </li>
</ul>


<div className="tab-content" id="myTabContent">
<div className="col-md-4 ms-auto ">
                <input type="search" className="form-control rounded-pill my-3 " id="searchStudent" placeholder="Search..."/>
              </div>

{/* First page  */}
  <div className=" mx-2 tab-pane fade  show  active" id="All-tab-pane" role="tabpanel" aria-labelledby="All-tab" tabindex="0">

          <div className="side-icons ms-3">
            <a href="#"><i className="fa-regular fa-calendar rounded-circle p-2 "></i> </a> 
            <a href="#"> <i className="fa-regular fa-paper-plane rounded-circle p-2 mx-3"></i></a>  
      </div>

    <div className="Student-info mt-3">
        <table className="table  text-center">
        <thead>
            <th>User Name</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone NO.</th>
            <th>Email</th>
            <th>Wallet</th>
            <th>Phone</th>
            <th>Profile</th>
            <th>Email</th>
            <th>Fees</th>
            <th>Registerd On</th>
        </thead>
        <tbody id="overviewAdmin">
            <tr>
                <td>512190901</td>
                <td>Alaa</td>
                <td>Hussein</td>
                <td>01155566188</td>
                <td>alaah@gmail.com</td>
                <td>0</td>
                <td><i className="fa-solid fa-xmark"></i></td>
                <td><i className="fa-solid fa-check"></i></td>
                <td><i className="fa-solid fa-xmark"></i></td>
                <td><i className="fa-solid fa-xmark"></i></td>
                <td>11/7/2023</td>
            </tr>
            <tr>
                <td>512190911</td>
                <td>Eman</td>
                <td>Elshazly</td>
                <td>01145566188</td>
                <td>Emysh@gmail.com</td>
                <td>0</td>
                <td><i className="fa-solid fa-xmark"></i></td>
                <td><i className="fa-solid fa-check"></i></td>
                <td><i className="fa-solid fa-xmark"></i></td>
                <td><i className="fa-solid fa-xmark"></i></td>
                <td>12/7/2023</td>
            </tr>
            <tr>
                <td>512190901</td>
                <td>Hamza</td>
                <td>Atif</td>
                <td>01099885</td>
                <td>Hamza@gmail.com</td>
                <td>0</td>
                <td><i className="fa-solid fa-xmark"></i></td>
                <td><i className="fa-solid fa-check"></i></td>
                <td><i className="fa-solid fa-xmark"></i></td>
                <td><i className="fa-solid fa-xmark"></i></td>
                <td>11/8/2023</td>
            </tr>
            <tr>
                <td>512190903</td>
                <td>Sama</td>
                <td>Yasser</td>
                <td>011445563</td>
                <td>sama@gmail.com</td>
                <td>0</td>
                <td><i className="fa-solid fa-xmark"></i></td>
                <td><i className="fa-solid fa-check"></i></td>
                <td><i className="fa-solid fa-xmark"></i></td>
                <td><i className="fa-solid fa-xmark"></i></td>
                <td>11/7/2023</td>
            </tr>
            <tr>
                <td>512190909</td>
                <td>Inas</td>
                <td>Walid</td>
                <td>0110555661</td>
                <td>inas@gmail.com</td>
                <td>0</td>
                <td><i className="fa-solid fa-xmark"></i></td>
                <td><i className="fa-solid fa-check"></i></td>
                <td><i className="fa-solid fa-xmark"></i></td>
                <td><i className="fa-solid fa-xmark"></i></td>
                <td>11/7/2023</td>
            </tr>
            <tr>
                <td>512190001</td>
                <td>Heba</td>
                <td>Moataz</td>
                <td>0123685408</td>
                <td>Heba@gmail.com</td>
                <td>0</td>
                <td><i className="fa-solid fa-xmark"></i></td>
                <td><i className="fa-solid fa-check"></i></td>
                <td><i className="fa-solid fa-xmark"></i></td>
                <td><i className="fa-solid fa-xmark"></i></td>
                <td>20/9/2023</td>
            </tr>
            <tr>
                <td>512190001</td>
                <td>Ahmed</td>
                <td>Mohamed</td>
                <td>012985408</td>
                <td>Ahmed@gmail.com</td>
                <td>0</td>
                <td><i className="fa-solid fa-xmark"></i></td>
                <td><i className="fa-solid fa-check"></i></td>
                <td><i className="fa-solid fa-xmark"></i></td>
                <td><i className="fa-solid fa-xmark"></i></td>
                <td>12/7/2023</td>
            </tr>
            <tr>
                <td>51219081</td>
                <td>Adham</td>
                <td>Khaled</td>
                <td>011234540</td>
                <td>Adham@gmail.com</td>
                <td>0</td>
                <td><i className="fa-solid fa-xmark"></i></td>
                <td><i className="fa-solid fa-check"></i></td>
                <td><i className="fa-solid fa-xmark"></i></td>
                <td><i className="fa-solid fa-xmark"></i></td>
                <td>13/9/2023</td>
            </tr>
            <tr>
                <td>512190201</td>
                <td>Nehal</td>
                <td>Mahmoud</td>
                <td>0123685908</td>
                <td>Nehal@gmail.com</td>
                <td>0</td>
                <td><i className="fa-solid fa-xmark"></i></td>
                <td><i className="fa-solid fa-check"></i></td>
                <td><i className="fa-solid fa-xmark"></i></td>
                <td><i className="fa-solid fa-xmark"></i></td>
                <td>29/9/2023</td>
            </tr>
            <tr>
                <td>512190301</td>
                <td>Mohamed</td>
                <td>Amir</td>
                <td>0129685408</td>
                <td>Mohamed@gmail.com</td>
                <td>0</td>
                <td><i className="fa-solid fa-xmark"></i></td>
                <td><i className="fa-solid fa-check"></i></td>
                <td><i className="fa-solid fa-xmark"></i></td>
                <td><i className="fa-solid fa-xmark"></i></td>
                <td>10/10/2023</td>
            </tr>
            <tr>
                <td>512199001</td>
                <td>Ashraf</td>
                <td>Moataz</td>
                <td>0123695408</td>
                <td>Ashraf@gmail.com</td>
                <td>0</td>
                <td><i className="fa-solid fa-xmark"></i></td>
                <td><i className="fa-solid fa-check"></i></td>
                <td><i className="fa-solid fa-xmark"></i></td>
                <td><i className="fa-solid fa-xmark"></i></td>
                <td>10/9/2023</td>
            </tr>
        </tbody>
</table>
    </div>

</div>


{/* Second page  */}
  <div className="tab-pane fade mx-2" id="Brand-tab-pane" role="tabpanel" aria-labelledby="Brand-tab" tabindex="0">
    
  <table className="table text-center overflow-x:auto">
        <thead>
            <tr>
                <th>Title</th>
                <th>Label</th>
                <th>Instructor</th>
                <th>Status</th>
                <th>Enrolled Status</th>
                <th>Enrolled At</th>
                <th>Banned on</th>
                <th></th>
                <th></th>
               
            </tr>
        </thead>
        <tbody id="dataOverview">
            <tr>
                <td>Arabic</td>
                <td>ABMAC44</td>
                <td>Mr.Ahmed</td>
                <td>Open</td>
                <td className='text-success'>Active</td>
                <td>04/20/23,04:04:58 PM</td>
                <td>-</td>
                <td><div className="user"><i className="fa-regular fa-user"></i></div></td>
            
            <td></td>
            </tr>

            <tr>
                <td>History</td>
                <td>ABMAC49</td>
                <td>Mr.Emad</td>
                <td>Open</td>
                <td className='text-success'>Active</td>
                <td>04/20/23,04:05:20 PM</td>
                <td>-</td>
                <td><div className="user"><i className="fa-regular fa-user"></i></div></td>
            <td></td>
            </tr>

        </tbody>
      </table>

  </div>


{/* third page  */}
  <div className="tab-pane fade mx-2 " id="Design-tab-pane" role="tabpanel" aria-labelledby="Design-tab" tabindex="0">
    
  <div className="m-3">
 
 <div className="row">
<div className="col-md-3 my-2">
<div class="attendance attendance-bg"><p class="mt-2">Attendance</p> <span class="mt-2 ">15</span></div> 
</div>

<div className="col-md-3 my-2">
<div class="not-attendance-bg attendance"><p class="mt-2">Not Attendance</p> <span class="mt-2 ">150</span></div>
</div>

<div className="col-md-3 my-2">
<div class="attendance complete-bg"><p class="mt-2">Completed</p> <span class="mt-2 ">9</span></div> 
</div>

<div className="col-md-3 my-2">
<div class=" attendance learning-time-bg"><p class="mt-2">Learning Time</p> <span class="mt-2 ">2h</span></div> 
</div>



</div>

<div className="row mt-5 mx-3">
{ /*Attendance table content */}
 <div className="col-md-8">


 {showAttendance ? (
          <div>
           <table class="table  text-center">
           <thead>
               <th>Course Name</th>
               <th>State</th>
               <th>Date</th>
               <th>St.Status</th>
               <th>Progress</th>
               <th>Time</th>
           </thead>
           <tbody id="attendance-Data">
               <tr>
                   <td>Lecture 1</td>
                   <td>-</td>
                   <td>-</td>
                   <td>-</td>
                   <td>-</td>
                   <td>-</td>
                   
               </tr>
               <tr>
                   <td>Lecture 2</td>
                   <td>-</td>
                   <td>-</td>
                   <td>-</td>
                   <td>-</td>
                   <td>-</td>
                  
               </tr>
               <tr>
                   <td>Lecture 3</td>
                   <td>-</td>
                   <td>-</td>
                   <td>-</td>
                   <td>-</td>
                   <td>-</td>
                   
               </tr>
               <tr>
                   <td>Lecture 4</td>
                   <td>active</td>
                   <td>-</td>
                   <td>Not Started</td>
                   <td>0%</td>
                   <td>-</td>
                  
               </tr>
               <tr>
                   <td>Lecture 5</td>
                   <td>-</td>
                   <td>-</td>
                   <td>-</td>
                   <td>-</td>
                   <td>-</td>
                   
               </tr>
               <tr>
                   <td>Lecture 6</td>
                   <td>-</td>
                   <td>-</td>
                   <td>-</td>
                   <td>-</td>
                   <td>-</td>
                  
               </tr>
               <tr>
                   <td>Lecture 7</td>
                   <td>-</td>
                   <td>-</td>
                   <td>-</td>
                   <td>-</td>
                   <td>-</td>
                  
               </tr>
   
           </tbody>
         </table>

          </div>
        ) : (
          <div>
            <h2>Content 2</h2>
            <p>This is content for Content 2.</p>
          </div>
        )}



 

 </div>
 
 <div className="col-md-4 ">
  <div class="right-side ps-5 ">
           <div class="Attendance-choice">
               <div class="attendanceIcon"><i class="fa-solid fa-clipboard-user"></i></div>
               <span class="ms-3">
                <button onClick={() => toggleContent('Attendance')} className='border-0 btn fs-6'> ATTENDANCE</button>
                </span>
           </div>
           <div class="Testes-choice">
               <div class="TestIcon"><i class="fa-solid fa-file-circle-question"></i></div>
               <span class="ms-3 mt-2"><button onClick={() => toggleContent('Test')} className='border-0 btn fs-6' ><h6>TESTES</h6></button>
               </span>
           </div>
         </div></div>
</div>



 </div>
 

  </div>
  
  <div className="tab-pane fade" id="Graphic-tab-pane" role="tabpanel" aria-labelledby="Graphic-tab" tabindex="0">
    
    <div className="container my-5">
      <div className="row">
      
      <p>444444444</p>
      
       </div>   
</div>

  </div>
</div>








</section>



  </>

}
