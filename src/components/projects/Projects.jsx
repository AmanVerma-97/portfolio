import { useState } from 'react';
import techStack from "./techStack.json";
import projects from "./projects.json";
function Projects() {

  const [hoverIndex, sethoverIndex] = useState(null);
  return (
    <>
    
      <div className=' w-10/12 md:w-11/12 lg:w-10/12 m-auto grid grid-cols-2 md:grid-cols-3 place-content-center place-items-center gap-4 mt-2 md:mt-8 p-2'>

          {
            projects.map((project, index)=>{
              return(
                <>
                <a href={project.link} target='blank'>
                  
                  <div className=' flex flex-col items-center'  key={index}>
                    <div className=' lg:w-52 lg:h-52 md:w-40 md:h-40 h-36 w-36  flex justify-center items-center rounded-xl shadow-md shadow-black hover:shadow-lg hover:shadow-orange-400 origin-center'
                         onMouseOver={()=>sethoverIndex(index)} onMouseOut={()=>sethoverIndex(null)}>
                      {hoverIndex===index ? 
                      <div className='w-full h-full bg-black/90 flex flex-col justify-center items-center rounded-xl'>
                        <h1 className=' font-bold text-lg text-white drop-shadow-lg'>Tech Stack</h1>
                        <p className=' font-semibold text-sm lg:text-base text-gray-100 drop-shadow-lg'> {techStack[index].skill1} </p>
                        <p className=' font-semibold text-sm lg:text-base text-gray-100 drop-shadow-lg'> {techStack[index].skill2} </p>
                        <p className=' font-semibold text-sm lg:text-base text-gray-100 drop-shadow-lg'> {techStack[index].skill3} </p>
                      </div> 
                      
                      :
                      <img src={project.img} alt={project.name} role='img'  className='w-full h-full bg-contain rounded-xl text-white'/>
                      }
                    </div>
                    <h2 className=' text-lg font-bold'>{project.name}</h2>
                  </div>
                </a>
                
                </>
              )
            })
          }

      </div>
    </>
    
  )
}

export default Projects;

// {"name":"Zomato", "link":"", "img":"https://images.pexels.com/photos/687824/pexels-photo-687824.jpeg?auto=compress&cs=tinysrgb&w=600"},
    