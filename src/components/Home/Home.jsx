import React from 'react';
import video1 from "../../assets/homepage.mp4";
function Home() {
  return (
    <div>
     <div>
     <video className='h-25'autoPlay loop muted>
      <source src={video1} type="video/mp4"/>
        </video>
        
     </div>
    </div>
  )
}

export default Home
