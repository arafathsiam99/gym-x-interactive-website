import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="bg-dark">
           <div className="container mt-5">
               <div className="row">
                   <div className="col-md-2"><img className="img-fluid" src="https://i.ibb.co/TP3Rj7C/gymx-logo.png" alt="" /></div>
                   <div className="col-md-3">
                       <h2 className="custom-font">OPENING HOURS</h2>
                       <div className="d-flex">
                           <div>
                               <ul className="custom-ul">
                           <li className="custom-li">Monday </li>
                           <li className="custom-li">Tuesday</li>
                           <li className="custom-li">Wednesday</li>
                           <li className="custom-li">Thursday</li>
                           <li className="custom-li">Friday</li>
                           <li className="custom-li">Saturday</li>
                           <li className="custom-li">Sunday</li>
                       </ul>
                           </div>
                           <div>
                               <ul className="custom-ul">
                           <li className="custom-li">07:00-17:00</li>
                           <li className="custom-li">07:00-17:00</li>
                           <li className="custom-li">07:00-17:00</li>
                           <li className="custom-li">07:00-17:00</li>
                           <li className="custom-li">07:00-17:00</li>
                           <li className="custom-li">07:00-17:00</li>
                           <li className="custom-li">07:00-17:00</li>
                       </ul>
                           </div>
                       </div>
                    </div>
                   <div className="col-md-3">
                        <h2 className="custom-font">TWITTER TWEETS</h2>
                        <h4 className="custom-li">Calluna Theme Installation Guide: http://youtu.be/OQdUhM6k-2o?a  über @YouTube</h4>
                        <br />
                        <h4 className="custom-li">Our new Gym, Fitness & Sports theme has been choosed site of the day theme. Thank you very much @designnominees <a href=" http://themetwins.com/recommends/gymx"></a> </h4>
                   </div>
                   <div className="col-md-3">
                        <h2 className="custom-font">Contact</h2>
                        <h1 className="custom-li">08000 99911122
                        </h1>
                        <p className="custom-li">Hotline available 24 hours</p>
                        <br />
                        <h1 className="custom-font">Email Us</h1>
                        <p className="custom-li">info@themetwins.com</p>
                   </div>
                   <p className="custom-font"><small>Copyright 2018 by themetwins. GymX Theme crafted with love.</small></p>
               </div>
           </div>
        </div>
    );
};

export default Footer;