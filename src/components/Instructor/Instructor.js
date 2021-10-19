import React from 'react';

const Instructor = ({instructor}) => {
    const{name,picture,designation}=instructor;
    return (
            <div className="col-md-6 mt-5">
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <h5 className="custom-font">{designation}</h5>
            <button className='custom-btn'>Consult Me</button>
        </div>
    );
};

export default Instructor;