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
    const showDetails=services?.find(detail=> detail && detail.id.toString()===serviceDetailsId);
    return (
        <div>
            <h1>This is :{showDetails?.name}</h1>
            <img src={showDetails?.picture} alt="" />
            <p>{showDetails?.description}</p>
        </div>
    );
};

export default ServiceDetails;