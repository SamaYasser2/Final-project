import { React, useState } from 'react'
import './ClassroomArabic.css'
import selectTe from '../../Assets/Images/teacher_1.jpg'
import Icon from '../../Assets/Images/classroom-Icon.jpg'
import Upload from '../../Assets/Images/Upload.png'
import book1 from '../../Assets/Images/Book1.png'
import book2 from '../../Assets/Images/Book2.png'
import book3 from '../../Assets/Images/Book3.png'
import Calendar from '../Calendar/Calendar'
import { Link } from 'react-router-dom'
import FileInput from '../FileInput/FileInput'
export default function ClassroomArabic() {

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // Perform upload logic using selectedFile
    if (selectedFile) {
      console.log("Uploading file:", selectedFile);
      // You may want to use FileReader API or FormData to handle file upload
    } else {
      console.log("No file selected");
    }
  };
  return <>

    <div className="row pt-1">
      <div className="session-header pt-2 d-flex flex-nowrap justify-content-between">
        <h3 className="hello-name ms-2">Hello, <span id="HelloName"> Samasemo </span><i class="fa-solid fa-face-smile-beam" style={{ color: '#FFD43B' }}></i> </h3>
        <Link to="/YourProfile">   <img src={Icon} style={{ width: '50px', height: '50px' }} alt="to profile" /></Link>
      </div>


      <div className="col-md-3 ">
        <div className="teaher-sideCard m-auto text-center">
          <img className='class-img1 rounded-circle  m-auto ' src={selectTe} alt="teacher" />
          <div className="teacherDesc d-flex justify-content-between flex-nowrap">
            <h3>Mrs.Name</h3>
            <span id="Active" className='ActiveS fw-bold text-success'>Online</span>
          </div>
        </div>
        <hr />
        <h5> <li>E-Book</li></h5>
        <div className="books d-flex justify-content-center flex-wrap">
          <div className="book1">
            <a href="#" target='_blank'>  <img src={book1} alt="book" /></a>
            <p className='mb-2'>Book 1</p>
          </div>

          <div className="book1">
            <a href="#" target='_blank'>  <img src={book2} alt="book" /></a>
            <p className='mb-2'>Book 2</p>
          </div>
          <div className="book1">
            <a href="#" target='_blank'>  <img src={book3} alt="book" /></a>
            <p className='mb-2'>Book 3</p>
          </div>



        </div>

      </div>

      <div className="col-md-6 mt-1 ">
        <div class="video-container">
          <h5> <li>Live Session</li></h5>
          <iframe className='w-100 ' height="315" src="https://www.youtube.com/embed/OcncrLyddAs?si=u1USKFNN8DOrdaxY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <h4 className='session-no'>Session 1</h4>
        </div>
        <hr />
        <div className="row mt-4">
          <div className="col-md-6 mb-2">
            <div className="assignments p-2">
              <h5> <li>Upload your Assignment</li></h5>
              <div className="file text-center">
                <img src={Upload} alt="upload your file" />
                <h6 className='text-muted pb-5 '>Upload your file here</h6>
              </div>
              <div>
                <FileInput onFileSelect={handleFileSelect} />
                <button onClick={handleUpload}>Upload</button>
              </div>


            </div>
          </div>
          <div className="col-md-6">
            <div className="posts  p-2">
              <h5> <li>Post</li></h5>
              <div className="empty-post text-center py-5">
                <i className="fa-solid fa-ellipsis"></i>
                <h6 className='text-muted '>Your teacher's important notes will appear here.. </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-3 mt-1">
        <h5> <li>Your Sessions</li></h5>

        <div className="session-card mt-4 p-2">
          <div className="session-buy d-flex justify-content-between ">
            <h6 className='fw-bold'>Session 1</h6>
            <Link to="#" className="btn btn3 rounded-pill">Buy Now</Link>
          </div>
          <div className="session-time"> Starts at <span id='session-time' className='fw-bold'> 10:00 AM</span></div>
        </div>

        <div className="session-card mt-4 p-2">
          <div className="session-buy d-flex justify-content-between ">
            <h6 className='fw-bold'>Session 2</h6>
            <Link to="#" className="btn btn3 rounded-pill">Buy Now</Link>
          </div>
          <div className="session-time"> Starts at <span id='session-time' className='fw-bold'> 10:00 AM</span></div>
        </div>

        <div className="session-card mt-4 p-2">
          <div className="session-buy d-flex justify-content-between ">
            <h6 className='fw-bold'>Session 3</h6>
            <Link to="#" className="btn btn3 rounded-pill">Buy Now</Link>
          </div>
          <div className="session-time"> Starts at <span id='session-time' className='fw-bold'> 10:00 AM</span></div>
        </div>

        <div className="session-card mt-4 p-2">
          <div className="session-buy d-flex justify-content-between ">
            <h6 className='fw-bold'>Session 4</h6>
            <Link to="#" className="btn btn3 rounded-pill">Buy Now</Link>
          </div>
          <div className="session-time"> Starts at <span id='session-time' className='fw-bold'> 10:00 AM</span></div>
        </div>

        <div className="session-card mt-4 p-2">
          <div className="session-buy d-flex justify-content-between ">
            <h6 className='fw-bold'>Session 5</h6>
            <Link to="#" className="btn btn3 rounded-pill">Buy Now</Link>
          </div>
          <div className="session-time"> Starts at <span id='session-time' className='fw-bold'> 10:00 AM</span></div>
        </div>

      </div>

    </div>

  </>
}

