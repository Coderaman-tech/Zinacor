import React from 'react';
import video1 from "../../assets/homepage.mp4";
import  './Home.css';
function Home() {
  return (
    <div>
     <section className='home'>
     <video id="myvideo" className='w-25'autoPlay loop muted>
      <source src={video1} type="video/mp4"/>
        </video>
        <div className="content">
          <h1>Zinacore</h1>
          <h2>Leader in manufacturing zinc and zinc-aluminium wire</h2>
          
        </div>
     </section>
    </div>
  )
}

export default Home
