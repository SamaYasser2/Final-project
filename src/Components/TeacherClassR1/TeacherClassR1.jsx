import React from 'react'
import { Link } from 'react-router-dom'
import './TeacherClassR1.css'
import Icon from '../../Assets/Images/classroom-Icon.jpg'
import Calendar from '../Calendar/Calendar'
export default function TeacherClassR() {


  // const messageForm = document.getElementById("message-form");
  // const messageInput = document.getElementById("message-input");
  // const messageList = document.getElementById("message-list");

  // messageForm.addEventListener("submit", function(event) {
  //   event.preventDefault();
  //   const message = messageInput.value;
  //   if (message.trim() !== "") {
  //     sendMessage(message);
  //     messageInput.value = "";
  //   }
  // });

  // function sendMessage(message) {
  //   const listItem = document.createElement("li");
  //   listItem.textContent = message;
  //   messageList.appendChild(listItem);
  //   messageList.scrollTop = messageList.scrollHeight;
  // }

  return <>

    <div className="row pt-1">
      <div className="session-header pt-2 d-flex flex-nowrap justify-content-between">
        <h3 className="hello-name ms-2">Welcome, <span id="TeacherName"> Nadia! </span></h3>
        <Link to="#">   <img src={Icon} style={{ width: '50px', height: '50px' }} alt="to profile" /></Link>
      </div>

      <div className="col-md-9  ">
        <h3 className='text-center'>Level: 1</h3>
        <div className="container">

        <div className="row my-3">
            <div className="levels">
              <h5 className='mt-2'> <li>Select Level</li></h5>
              <div className="icon-circle d-flex flex-nowrap justify-content-evenly overflow-x-auto">
                <Link to='/TeacherClassR1' className='text-decoration-none'>
                  <div className="circle d-flex justify-content-center align-items-center my-2 mx-2">
                    <i className="fa-solid fa-1 fa-2xl"></i>
                  </div>
                </Link>

                <Link to='/TeacherClassR2' className='text-decoration-none'>
                  <div className="circle d-flex justify-content-center align-items-center my-2 mx-2">
                    <i className="fa-solid fa-2 fa-2xl"></i>
                  </div>
                </Link>

                <Link to='/TeacherClassR3' className='text-decoration-none'>
                  <div className="circle d-flex justify-content-center align-items-center my-2 mx-2">
                    <i className="fa-solid fa-3 fa-2xl"></i>
                  </div>
                </Link>

                <Link to='#' className='text-decoration-none'>
                  <div className="circle d-flex justify-content-center align-items-center my-2 mx-2">
                    <i className="fa-solid fa-4 fa-2xl"></i>
                  </div>
                </Link>

                <Link to='#' className='text-decoration-none'>
                  <div className="circle d-flex justify-content-center align-items-center my-2 mx-2">
                    <i className="fa-solid fa-5 fa-2xl"></i>
                  </div>
                </Link>
              </div>
            </div> </div>
         

         
 <div className="row">
            <h5> <li>My students</li></h5>
            <div className="col-md-3 py-3">
              <div className="student-card d-flex flex-nowrap px-2">
                <div className="student-img  ">
                  <img src={Icon} style={{ width: '30px', height: '30px' }} alt="student" />
                </div>
                <div className="student-detail  px-2">
                  <h6> Jane Eyre</h6>
                  <p className='text-muted'> student in level: 1</p>
                </div>
              </div>
            </div>

            <div className="col-md-3 py-3">
              <div className="student-card d-flex flex-nowrap px-2 ">
                <div className="student-img  ">
                  <img src={Icon} style={{ width: '30px', height: '30px' }} alt="student" />
                </div>
                <div className="student-detail  px-2">
                  <h6> Jane Eyre</h6>
                  <p className='text-muted'> student in level: 1</p>
                </div>
              </div>
            </div>

            <div className="col-md-3 py-3">
              <div className="student-card d-flex flex-nowrap px-2 ">
                <div className="student-img  ">
                  <img src={Icon} style={{ width: '30px', height: '30px' }} alt="student" />
                </div>
                <div className="student-detail  px-2">
                  <h6> Jane Eyre</h6>
                  <p className='text-muted'> student in level: 1</p>
                </div>
              </div>
            </div>

            <div className="col-md-3 py-3">
              <div className="student-card d-flex flex-nowrap px-2 ">
                <div className="student-img  ">
                  <img src={Icon} style={{ width: '30px', height: '30px' }} alt="student" />
                </div>
                <div className="student-detail  px-2">
                  <h6> Jane Eyre</h6>
                  <p className='text-muted'> student in level: 1</p>
                </div>
              </div>
            </div>
          </div>


          <div className="row my-3">
            <div className="col-md-6 st-assignment ">
              <h5 className='mt-2'> <li>Student's Assignments</li></h5>
              <div className="student-Assignm">

              </div>
            </div>

            <div className="col-md-6 my-3 ">
              <h5> <li>My posts</li></h5>
              <div className="my-posts p-1">
                <div className="  text-center ">

                  <div id="message-container">
                    <ul id="message-list"></ul>
                    <h6 className='text-muted py-5'>Your notes will appear here.. </h6>
                  </div>

                  <form id="message-form">
                    <input type="text" id='message-input' className='form-control rounded-pill' placeholder='Enter your notes..' />
                    <button className='btn btn3 rounded-pill my-1' type="submit">Send</button>
                  </form>



                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="col-md-3 ">
        <div className="container">
          <div className="row ">
            <h5> <li>Account</li></h5>
            <div className="col-md-12 my-3">
              <div className="Account-card p-2">
                <h2> $1235.00</h2>

              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row  my-3 ">
            <h5> <li>Classes</li></h5>
            <div className="col-md-12 classes my-3">
              <div className="live-card mt-4 p-2">
                <div className=" d-flex justify-content-between ">
                  <h6 className='fw-bold'>Session 1</h6>
                  <Link to="#" className="btn btn3 rounded-pill">Start live</Link>
                </div>
                <div className="session-time"> Starts at <span id='session-time' className='fw-bold'> 10:00 AM</span></div>
              </div>

              <div className="live-card mt-4 p-2">
                <div className=" d-flex justify-content-between ">
                  <h6 className='fw-bold'>Session 2</h6>
                  <Link to="#" className="btn btn3 rounded-pill">Start live</Link>
                </div>
                <div className="session-time"> Starts at <span id='session-time' className='fw-bold'> 10:00 AM</span></div>
              </div>

              <div className="live-card mt-4 p-2">
                <div className=" d-flex justify-content-between ">
                  <h6 className='fw-bold'>Session 3</h6>
                  <Link to="#" className="btn btn3 rounded-pill">Start live</Link>
                </div>
                <div className="session-time"> Starts at <span id='session-time' className='fw-bold'> 10:00 AM</span></div>
              </div>

              <div className="live-card mt-4 p-2">
                <div className=" d-flex justify-content-between ">
                  <h6 className='fw-bold'>Session 4</h6>
                  <Link to="#" className="btn btn3 rounded-pill">Start live</Link>
                </div>
                <div className="session-time"> Starts at <span id='session-time' className='fw-bold'> 10:00 AM</span></div>
              </div>

              <div className="live-card mt-4 p-2">
                <div className=" d-flex justify-content-between ">
                  <h6 className='fw-bold'>Session 5</h6>
                  <Link to="#" className="btn btn3 rounded-pill">Start live</Link>
                </div>
                <div className="session-time"> Starts at <span id='session-time' className='fw-bold'> 10:00 AM</span></div>
              </div>
            </div>
          </div>
        </div>


        <div className="container">
          <div className="row  my-3 ">
            <h5> <li>My Calendar</li></h5>
            <div className="col-md-12 my-3">
              <Calendar />
            </div>
          </div>
        </div>

      </div>
    </div>
  </>
}
