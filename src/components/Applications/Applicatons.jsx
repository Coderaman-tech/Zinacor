import React from 'react';
import './Applications.css';

function Applicatons() {
    return (
        <div>
            <div className='item-container flex flex-wrap bg-custom-grey'>
              
                <div className=' w-1/2 text-6xl  text-slate-100 h-80 flex  justify-center items-center'>
                    <h1>Protection withstanding<br/>the test of time</h1>
                </div>
                <div className='w-1/2 h-80  flex justify-center items-center text-1.5xl text-slate-50'>
                    <p>With their wealth of experience and know-how, Zinacor brings you the best anti-corrosion solution: the zinc and zinc-aluminium wire.<br/>Zinacor, specialised in the manufacturing of zinc and zinc-aluminium wire used in the field of thermal spraying, ideally combines quality, expertise and worldwide vision. All these aspects make Zinacor the ultimate world leader in the production of zinc and zinc-aluminium wire.</p>  
                </div>
            </div>
            <div className="item2-container">
            <center className=' m-10 text-4xl font-bold'>
                <h1>More Information</h1>
            </center>
            <div className="more-info  m-10 flex justify-center items-center gap-10">
                <div className="item1  text-purple-950"><p className='text-3xl'>Protection for all types of projects</p> <br/>
                <a href="https://www.zinacor.com/en/applications/"  className='text-1.5xl hover:text-purple-950 text-slate-950 '>Applications</a>
                </div>
                <div className="item2  text-purple-950"><p className='text-3xl'>The best advertising</p> <br/>
                <a href="https://www.zinacor.com/en/references/"  className=' text-1.5xl hover:text-purple-950 text-slate-950 '>References</a>
                </div>
                <div className="item3  text-purple-950"><p className='text-3xl'>Perfection is also found in the manufacturing process</p> <br/>
                <a href="https://www.zinacor.com/en/know-how/" className=' text-1.5xl hover:text-purple-950 text-slate-950 '>Metallisation process</a>
                </div>

            </div>
        </div>
        </div>
    )
}

export default Applicatons
