import React from 'react';

const projects=[
  {name:"Zomato", link:"", img:"https://images.pexels.com/photos/687824/pexels-photo-687824.jpeg?auto=compress&cs=tinysrgb&w=600"},
  {name:"Weather App", link:"https://weather-app-lime-three-64.vercel.app/", img:"https://images.pexels.com/photos/18032039/pexels-photo-18032039/free-photo-of-thunderstorm-over-sea.jpeg?auto=compress&cs=tinysrgb&w=600"},
  {name:"Netflix- UI", link:"", img:"https://images.pexels.com/photos/6142159/pexels-photo-6142159.jpeg?auto=compress&cs=tinysrgb&w=600"},
  {name:"Todo", link:"", img:"https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&w=600"},
  {name:"Photo Album", link:"https://photo-album-umber.vercel.app/", img:"https://images.pexels.com/photos/185933/pexels-photo-185933.jpeg?auto=compress&cs=tinysrgb&w=600"},
  {name:"Currency Converter", link:"https://currency-converter-sage-eight.vercel.app/", img:"https://images.pexels.com/photos/6534317/pexels-photo-6534317.jpeg?auto=compress&cs=tinysrgb&w=600"},
]
function Projects() {
  return (
    <>
    <h2>Hover pe tech stack dikha</h2>
      <div className=' w-10/12 md:w-11/12 lg:w-10/12 m-auto grid grid-cols-2 md:grid-cols-3 place-content-center place-items-center gap-4 mt-2 md:mt-8 p-2'>

          {
            projects.map((project, index)=>{
              return(
                <>
                <a href={project.link} target='blank'>
                  <div className=' flex flex-col items-center'  key={index}>
                    <div className=' lg:w-52 lg:h-52 md:w-40 md:h-40 h-36 w-36  flex justify-center items-center rounded-xl shadow-md shadow-black'>
                      <img src={project.img} alt={project.name} role='img'  className='w-full h-full bg-contain rounded-xl text-white'/>
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