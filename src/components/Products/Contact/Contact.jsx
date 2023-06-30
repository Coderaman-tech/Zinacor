import React from 'react'

function Contact() {
  return (
    <div>
    <div className='container1 flex  text-slate-100  h-screen mb-20'>
      <div className='item1 bg-custom-grey w-1/2 p-5 '>
        <p className='text-3xl font-bold  '>QUESTIONS?</p>
        <p className='text-3xl font-bold'>COMMENTS?</p>
        <p className='text-3xl font-bold '>WE'D LOVE TO HEAR FROM YOU.</p>
        <p>The school is open 10:00am to 5:00pm Tuesday to Friday and 10:00am to 3:00pm on Saturday.<br/>During July and August Summer Camps, we're open from Monday to Friday 8:30am to 4:30pm.</p>
        <p>Our mailing address is:<br/>
152A Charlotte Street,<br/>
Peterborough ON<br/>
Phone: 705-742-3221<br/>
</p>
      </div>
      <div className="item2 bg-blackish w-1/2 p-5 flex justify-center ">
        <form action="">
            <ul className=''>
           <li> <input type="text" placeholder='Enter your Name' width={30} className='bg-black border block w-full p-4 rounded-lg '/></li><br />
           <li><input type="text" placeholder='Enter a valid Email address'className='bg-black border block w-full p-4 rounded-lg '/></li> <br />
           <li><input type="text" placeholder='Enter your message' className='bg-black border block w-full p-40 rounded-lg ' /></li> <br />
           <li><button className='bg-custom-grey hover:bg-black font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center' >Submit</button></li> 
            </ul>
        </form>
      </div>
    </div>
       
    <footer className="bg-gray-800 py-4 text-white text-center">
        <p>Website created by coderaman_tech</p>
        <p>&copy; 2023 Your Website. All rights reserved.</p>
      </footer>
      
    </div>
  )
}

export default Contact
