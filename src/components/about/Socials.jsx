import React, { useState } from 'react'

const socials=[
    {src:"https://cdn-icons-png.flaticon.com/128/25/25657.png", alt:"github", link:"http://github.com/AmanVerma-97", name:"Github"},
    {src:"https://cdn-icons-png.flaticon.com/128/3536/3536505.png", alt:"linkedin", link:"http://linkedin.com/in/amanv97", name:"LinkedIn"},
    {src:"https://cdn-icons-png.flaticon.com/128/5968/5968830.png", alt:"twitter", link:"#twitter", name:"Twitter"},
    {src:"https://cdn-icons-png.flaticon.com/128/5968/5968534.png", alt:"gmail", link:"#gmail", name:"Gmail"},
]

function Socials() {
    
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseOver = (index) => setHoveredIndex(index);
  const handleMouseOut = () => setHoveredIndex(null);

  return (
    <div className='flex flex-row gap-6 justify-evenly items-center w-full'>
        {
            socials.map((social,index)=>{
                return(
                    <div className='flex flex-col justify-center items-center' key={index}>
                        <a href={social.link} className=' inline' target='blank'>

                            <img src={social.src} alt={social.alt} 
                            className=' h-10 w-10 lg:h-12 lg:w-12  hover:shadow-lg hover:shadow-blue-800/75 hover:rounded-full'
                            onMouseOver={() => handleMouseOver(index)} onMouseOut={handleMouseOut}
                            />

                            <div className={`${hoveredIndex===index ? 'opacity-100': 'opacity-0'} lg:text-base text-xs`}>{social.name}</div>

                        </a>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Socials