import React, { useEffect, useState } from 'react';
import Instructor from '../Instructor/Instructor';

const Instructors = () => {
    const[instructors,setInstructors]=useState([]);
    useEffect(()=>{
        fetch('/fakedata1.json')
        .then(res=>res.json())
        .then(data=>setInstructors(data));
    },[])
    return (
        <div className='container mt-2'>
            <h2 >GYMX <span className='custom-font'>Instructors</span></h2>
            <div className="row ">
                 {
                  instructors.map(instructor=><Instructor
                  key={instructor.id}
                  instructor={instructor}
                  >

                  </Instructor>)
                }
            </div>
        </div>
    );
};

export default Instructors;