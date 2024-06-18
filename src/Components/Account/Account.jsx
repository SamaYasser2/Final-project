import React from 'react'
import './Account.css'
import selectAccount from'../../Assets/Images/selectAcc.png'
import addAccount from '../../Assets/Images/Addacc.png'
import Footer from '../Footer/Footer'
export default function Account() {
  return<>
  <div className="container my-5 ">
<p className='text-center fs-1'>Select Account..</p>
{/* <div className="row d-flex justify-content-center align-items-center">

  <div className="col-sm-2  text-center accimg ">
  
  </div>

  
</div> */}

<div className="select d-flex justify-content-center align-items-center">
  <div className="accimg mx-3">
<a href="#"> <img src={selectAccount} className=' ' alt="" /></a></div>

<div className=" text-center accimg  mx-3">
  <a href="#"> <img src={addAccount} className='' alt="" /></a>
    <p className='fw-bold'>Add Student</p>
  </div>
</div>





  </div>









































  

  <p className='hidden-text text-hei'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, eos, dignissimos facilis esse voluptate quae eveniet tenetur at obcaecati maiores corrupti odio rem saepe consectetur quidem! Consequatur quam nostrum, saepe consequuntur esse odio corporis natus voluptate fugit sunt excepturi unde provident accusamus facere officiis libero, quo eligendi molestias optio? Iusto. 
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam repudiandae, error dolor alias voluptatem sed quas architecto deserunt. Quis deleniti eius dignissimos recusandae deserunt velit officiis sit voluptates fugit laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse minima explicabo temporibus ab consequatur culpa recusandae, a tempore id maiores molestias minus similique quam perspiciatis deserunt eius iste nihil amet. sit voluptates fugit laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse minima explicabo temporibus ab  
    Esse minima explicabo temporibus ab  Esse minima explicabo temporibus ab  
  </p>
  </>
}
