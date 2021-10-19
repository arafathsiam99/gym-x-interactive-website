import React from 'react';
import {Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const{id,name,picture,description}=service;
    return (
       <div className="col-md-4">
           <Card style={{ width: '18rem' }}>
  <Card.Body>
      <img src={picture} alt="" />
    <Card.Title className="custom-font">{name}</Card.Title>
    <Card.Text>
      {description}
    </Card.Text>
    <Link to={`/serviceDetails/${id}`}><button className='custom-btn'>More About Service</button></Link>
  </Card.Body>
</Card>
       </div>
    );
};

export default Service;