import React from 'react'
import { Link } from 'react-router-dom'
import Arabic1 from'../../Assets/Images/Arabic1.jpg'
import Arabic2 from'../../Assets/Images/Arabic2.jpg'
import Arabic3 from'../../Assets/Images/Arabic3.jpeg'
import Teacher2 from '../../Assets/Images/Teacher1.jpg'
import Teacher3 from '../../Assets/Images/Teacher2.jpg'
import './SubjectArabic.css'
export default function Subject() {
  return <>
  
  <div className="slide ">
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img src={Arabic3} className="d-block  " alt="slider arabic bg"/>
            <div className="carousel-caption ">
                <h2 className="fs-1 fw-bold">Arabic</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas placeat id repellendus, rem quasi aspernatur. Nam rem quasi ratione deserunt dolorum sit natus doloribus deleniti eaque. Fugiat nemo, ipsum modi odit vel ab repudiandae perferendis vero, quos, maiores accusamus inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat delectus modi rem accusamus esse et eligendi voluptate alias suscipit at mollitia, reiciendis nostrum repellendus, neque ipsa aliquam iusto quas perferendis sit optio! Praesentium natus dignissimos minus, inventore nostrum, nemo, numquam excepturi iusto accusantium voluptatum saepe vel architecto mollitia eaque fuga.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Arabic1} className="d-block " alt="slider arabic bg"/>

            <div className="carousel-caption ">
                <h2 className="fs-1 fw-bold">Arabic</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas placeat id repellendus, rem quasi aspernatur. Nam rem quasi ratione deserunt dolorum sit natus doloribus deleniti eaque. Fugiat nemo, ipsum modi odit vel ab repudiandae perferendis vero, quos, maiores accusamus inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat delectus modi rem accusamus esse et eligendi voluptate alias suscipit at mollitia, reiciendis nostrum repellendus, neque ipsa aliquam iusto quas perferendis sit optio! Praesentium natus dignissimos minus, inventore nostrum, nemo, numquam excepturi iusto accusantium voluptatum saepe vel architecto mollitia eaque fuga.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Arabic2} className="d-block " alt="slider arabic bg"/>

            <div className="carousel-caption ">
                <h2 className="fs-1 fw-bold">Arabic</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas placeat id repellendus, rem quasi aspernatur. Nam rem quasi ratione deserunt dolorum sit natus doloribus deleniti eaque. Fugiat nemo, ipsum modi odit vel ab repudiandae perferendis vero, quos, maiores accusamus inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat delectus modi rem accusamus esse et eligendi voluptate alias suscipit at mollitia, reiciendis nostrum repellendus, neque ipsa aliquam iusto quas perferendis sit optio! Praesentium natus dignissimos minus, inventore nostrum, nemo, numquam excepturi iusto accusantium voluptatum saepe vel architecto mollitia eaque fuga.</p>
            </div>
          </div>
        </div>
        {/* <!-- <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button> --> */}

        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active indicate-btn" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="indicate-btn" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="indicate-btn" aria-label="Slide 3"></button>
          </div>
      </div>
</div>

<div className="container py-5">
    <h2 className="text-center Te-title fw-bold fs-1">Select a <span>Teacher</span></h2>
    <div className="row">
        <div className="col-md-6 my-5 d-flex justify-content-around">
        <div className="card  te-card" style={{width: '20rem'}}>
            <img src={Teacher2} className="card-img-top" alt="..."/>
            <div className="card-body text-center">
              <h5 className="card-title">Teacher 1</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to={'/Selectedarabic'}  className="btn btn1 rounded-pill">Select</Link>
            </div>
          </div>
        </div>

        <div className="col-md-6 my-5 d-flex justify-content-around">
            <div className="card te-card" style={{width: '20rem'}}>
                <img src={Teacher3} className="card-img-top" alt="..."/>
                <div className="card-body  text-center">
                  <h5 className="card-title">Teacher 2</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to="#"  className="btn btn1 rounded-pill">Select</Link>
                </div>
              </div>
            </div>

    </div>
</div>
  </>
}
