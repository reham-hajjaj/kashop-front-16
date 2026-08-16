import React from 'react'

function Services({title, description,icon}) {
  return (
    <Card sx={{height:'100%'}}>
      <div>{icon}</div>
       <div>{title}</div>
        <div>{description}</div>
    </Card>
  );
}
 

export default Services;
