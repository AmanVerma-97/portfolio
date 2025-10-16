import React from 'react'
import Socials from '../about/Socials';
import MyMap from './MyMap';


const center = { lat: 28.20290, lng: 76.77551 }; // Example coordinates (Dharuhera)
const zoom = 13;
const my_key= "063a3906-08e6-4058-bc19-6da3b2858e1a";

const Contact = () => {
  
  

  const handleSubmit= async (event)=>{

    event.preventDefault();
    const formData = new FormData(event.target);
    
    const inputs = form.querySelectorAll('input, textarea');

    formData.append("access_key", my_key);

    const object = Object.fromEntries(formData);
    

    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      
      inputs.forEach((input) => {
        input.value = '';
      });

      alert("I really appreciate you contacting me. I will connect with you soon.");
    }

    
  }
  return (
    <>

        <div className=' lg:w-8/12 lg:min-h-96 flex flex-col gap-4 w-10/12 min-h-96 p-2 m-auto lg:mt-10 md:w-7/12 sm:w-8/12 '>
          {/* Contact */}
          <div className='w-full flex flex-col lg:flex-row gap-0 shadow-lg shadow-slate-500 lg:min-h-96 rounded-lg'>
            
            <div className='lg:w-2/6 w-full bg-gray-800 lg:h-96 h-auto flex flex-col justify-evenly items-start p-6 gap-4 rounded-lg'>
              <h1 className=' font-bold text-xl lg:text-2xl drop-shadow-lg text-white'>Let's get in touch</h1>
              <h3 className=' font-semibold text-sm lg:text-sm drop-shadow-lg text-white'>
              Open to meaningful connections and discussions that align with my vision, goals, and professional growth.
              </h3>
              
              <h1 className=' font-semibold text-base drop-shadow-lg text-white'> <img src="https://cdn-icons-png.flaticon.com/128/5968/5968841.png" alt="phone" className=' h-4 w-4 md:h-6 md:w-6 inline'/> Phone <span className=' font-medium drop-shadow-lg text-md'> : 7300378782</span></h1>
              <h1 className=' font-semibold text-base drop-shadow-lg text-white'> <img src="https://cdn-icons-png.flaticon.com/128/5968/5968534.png" alt="email" className=' h-4 w-4 md:h-6 md:w-6 inline'/> Email <span className=' font-medium drop-shadow-lg text-md'> : amanv191097@gmail.com</span></h1>
              <h1 className=' font-semibold text-base drop-shadow-lg text-white'> <img src="https://cdn-icons-png.flaticon.com/128/1865/1865269.png" alt="city" className=' h-4 w-4 md:h-6 md:w-6 inline'/> City  <span className=' font-medium drop-shadow-lg text-md'> : Dharuhera(Haryana)</span></h1>
              
            </div>
            
            <div className='lg:w-4/6 w-full lg:h-96 h-auto bg-white flex flex-col justify-evenly items-center p-[6px] lg:p-6 gap-2 lg:gap-4 rounded-lg '>
              <h1 className=' font-bold text-xl lg:text-2xl drop-shadow-lg text-blue-950'>Send a message</h1>
              
              <form onSubmit={handleSubmit} className='flex flex-col justify-evenly items-center gap-8 w-10/12' id='form'>
                
                <input type="text" name="name" placeholder='Your Name' className='inline rounded-md border-b-2 md:w-8/12 lg:w-7/12 w-full focus:outline-none focus:border-2 focus:border-blue-900' required/>
                
                <input type="email" name="email" id="" placeholder='Your Email' className=' rounded-md border-b-2 md:w-8/12 lg:w-7/12 w-full focus:outline-none focus:border-2 focus:border-blue-900' required/>

                <textarea name="message" id="textarea" rows={3} className=' md:w-8/12 lg:w-7/12 w-full rounded-md border-b-2 resize-none focus:outline-none focus:border-2 focus:border-blue-900' placeholder='Your Message' required></textarea>

                <button className=' text-white bg-gradient-to-br from-blue-900 to-blue-800 px-3 py-2 rounded-lg' type="submit"> Send </button>
              </form>
            
            </div>
          </div>

          
        </div>
      

              {/* <div className=' w-8/12 h-64 z-30'>
                <MyMap center={center} zoom={zoom}/>
              </div> */}


              {/* Social */}
                {/* <div className=' w-full font-semibold'>
                  <Socials/>
                </div> */}
    </>
    
  )
}

export default Contact