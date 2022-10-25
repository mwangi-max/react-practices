import React from 'react';

const Show = ({id,image,name,constituency}) => {
  return (
    <div className='format'>
        <img src={image} alt={name} className='img'/>
        <h2>{name}</h2>
        <h4>{constituency}</h4>
      
    </div>
  )
}

export default Show
