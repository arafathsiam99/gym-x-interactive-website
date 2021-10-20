import React from 'react';
import { NavLink } from 'react-router-dom';

const Blog = () => {
    return (
        <div className='container'>
            <h1>Blog <span className="custom-font">Section</span></h1>
                <div className="row">
                    <div className="col-md-12">
                        <div>
                <img  className="img-fluid" src="https://i.ibb.co/z8pmPFx/gym-services-image1-1000x563.jpg?fbclid=IwAR008IzFtK4fraHNYUdDUngtFaUOeczUOmq3SMyGDhWr6-JTGOFGY3bW_HU" alt="" />
                <h2 className="custom-font">New cross fit course</h2>
                <p>CrossFit certificate courses are open to individuals and trainers at all stages of development. CrossFit’s world-class education and training includes entry-level courses such as the Level 1 Certificate Course, intermediate-level courses such as the Level 2 Certificate Course, and age-specific courses such as the CrossFit Kids Certificate Course...</p>
                <NavLink to="#" className="nav-link">Read More</NavLink>
            </div>
            <div>
                <img  className="img-fluid" src="https://i.ibb.co/X3K9QpT/gym-services-image2-1000x563.jpg?fbclid=IwAR2QOJVgSk1JBaL7CLSROFw8GeIyYL29eyO8QfWR4o9C8zg5DoCNOKisGd8" alt="" />
                <h2 className="custom-font">Best cardio exercise</h2>
                <p>If you’re like most guys, you do cardio to help you stay lean and show off the muscle gains you get from hitting the weights, aka “the usual workout routine.” And there’s absolutely nothing wrong with that.
                But when it comes to which type of cardio is best for burning fat, you have to decide which lean body type you’re going for.... </p>
                <NavLink to="#" className="nav-link">Read More</NavLink>
            </div>
            <div>
                <img  className="img-fluid " src="https://i.ibb.co/WPJn6T8/gym-services-image6-1000x563.jpg?fbclid=IwAR37_BW0iqk_ycROzCTM_CKAM2M_Ta3k9_du9P5mwJpy4_SDwqo1y5-PU88" alt="" />
                <h2 className="custom-font">New Body Core Courses</h2>
                <p>A course in the principles of strength training using machine and free-weight exercises in a comfortable, supportive space. Improve muscle strength, tone, endurance and body composition with sensible, safe weight training. Offering basic techniques and advanced modifications for all levels...</p>
                <NavLink to="#" className="nav-link">Read More</NavLink>
            </div>
                    </div>
                </div>
            </div>
    );
};

export default Blog;