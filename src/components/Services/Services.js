import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const[services,setServices]=useState([]);
    useEffect(()=>{
        fetch('/fakedata.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[]);
    return (
        <div className="container mt-5">
            <h2>GYMX  <span className='custom-font'>Services</span></h2>
            <div className="row">
                {
                    services.map(service=>
                        <Service
                        key={service.id}
                        service={service}
                        ></Service>
                    )
                }
            </div>
        </div>
    );
};

export default Services;