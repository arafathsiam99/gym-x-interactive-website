import React, { useEffect, useState } from 'react';
import { Card, Carousel } from 'react-bootstrap';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
  const[services,setServices]=useState([]);

  useEffect(()=>{
    fetch('/fakedata2.json')
    .then(res=>res.json())
    .then(data=>setServices(data))
  },[])
    return (
        <div>
         <section className=''>
                <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/g6NqJVF/Shot-of-a-young-man-working-out-with-battle-ropes-at-a-gym.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h1 className="custom-h1 fw-bold">Real Athletes</h1>
      <h3 className="fs-1">Just Don't Give Up</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/LpVC6Rp/slider-image-2.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h1 className="custom-h1 fw-bold">Double Power</h1>
      <h3 className="fs-1">Be Stronger Together</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/Qcr2GRn/slider-image-3-1.jpg?fbclid=IwAR3C5Zh-vqGZHDnqHTBgR6SfLGYn_RW5eshhqD0tzXQR0fc4lpJ_rqLoNqU"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h1 className="custom-h1 fw-bold">Confidence Means To</h1>
      <h3 className="fs-1">Believe In Yourself</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
          <section className='container mt-5'>
            <h2 className='custom-font'>Our Services</h2>
            <div className="row">
                {
                  services.map(service=><Service
                  key={service.id}
                  service={service}
                  ></Service>)
                }
            </div>
          </section>
         </section>
         <section className='mt-5 container' >
           <div className='justify-content-center align-items-center mb-5'>
             <h4 className='custom-font'>Become a part of us</h4>
               <h1>Our Memberships</h1>
            </div>
           <div className="row mx-5 mt-2">
             <div className="col-md-4">
               <Card>
                <Card.Body>
                <Card.Title>BEGINNER PLAN</Card.Title>
                <Card.Subtitle className="mb-2 custom-font">FOR ROOKIES</Card.Subtitle>
                <button className="custom-btn">Select Plan</button>
                <Card.Text>
                <p>Unlimited access to the gym</p>
                <p>3 classes per week</p>
                <p>One Year memberships</p>
                <p>FREE drinking package</p>
                <p>1 Free personal training</p>
                </Card.Text>
                 </Card.Body>
                </Card>
             </div>
             <div className="col-md-4">
               <Card>
                <Card.Body>
                <Card.Title>PREMIUM PLAN</Card.Title>
                <Card.Subtitle className="mb-2 custom-font">FOR FITNESS LOVERS</Card.Subtitle>
                <button className="custom-btn">Select Plan</button>
                <Card.Text>
                <p>Unlimited access to the gym</p>
                <p>5 classes per week</p>
                <p>One Year memberships</p>
                <p>FREE drinking package</p>
                <p>2 Free personal training</p>
                </Card.Text>
                 </Card.Body>
                </Card>
             </div>
             <div className="col-md-4">
               <Card>
                <Card.Body>
                <Card.Title>ULTIMATE PLAN</Card.Title>
                <Card.Subtitle className="mb-2 custom-font">FOR THE ADDICTED</Card.Subtitle>
                <button className="custom-btn">Select Plan</button>
                <Card.Text>
                <p>Unlimited access to the gym</p>
                <p>7 classes per week</p>
                <p>One Year memberships</p>
                <p>FREE drinking package</p>
                <p>7 Free personal training</p>
                </Card.Text>
                 </Card.Body>
                </Card>
             </div>
           </div>
         </section>
         <section className="container mt-5 p-5" >
           <div className="row g-5 ">
             <div className="col-md-6">
               <img className='img-fluid' src="https://i.ibb.co/9WPDBHt/New.jpg" alt="" />
             </div>
             <div className="col-md-6">
               <img className='img-fluid' src="https://i.ibb.co/7Cz6y5y/Sale.jpg" alt="" />
             </div>
           </div>
         </section>
        </div>
    );
};

export default Home;