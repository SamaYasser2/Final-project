import React from 'react'
import './AdminPage.css'
export default function AttendanceAdmin() {
  return<>
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
  <div className="col-md-4 "><div class="right-side">
            <div class="Attendance-choice">
                <div class="attendanceIcon"><i class="fa-solid fa-clipboard-user"></i></div><span class="ms-3"><a href="Attendance.html"><h6 class="mt-2">ATTENDANCE</h6></a></span>
            </div>
            <div class="Testes-choice">
                <div class="TestIcon"><i class="fa-solid fa-file-circle-question"></i></div><span class="ms-3 mt-2"> <a href="Testes.html"><h6>TESTES</h6></a></span>
            </div>
          </div></div>
</div>



  </div>
  
  </>
}
