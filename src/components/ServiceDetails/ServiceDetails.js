import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const[services,setServices]=useState([]);
    useEffect(()=>{
        fetch('/fakedata.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[]);
    const{serviceDetailsId}=useParams();
    const showDetails=services?.filter(detail=>serviceDetailsId == services?.id && detail);
    console.log(showDetails);
    console.log(services);
    return (
        <div>
            <h1>This is :{serviceDetailsId}</h1>
        </div>
    );
};

export default ServiceDetails;