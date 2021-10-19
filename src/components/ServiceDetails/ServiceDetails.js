import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
       const{serviceDetailsId}=useParams();
    const[services,setServices]=useState([]);
    useEffect(()=>{
        fetch('/fakedata.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[]);
    const showDetails=services.find(detail=>services?.id ==serviceDetailsId  && detail);
    return (
        <div>
            <h1>This is :{serviceDetailsId}</h1>
        </div>
    );
};

export default ServiceDetails;