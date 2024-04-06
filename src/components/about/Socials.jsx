import React, { useState } from 'react'

const socials=[
    {src:"https://cdn-icons-png.flaticon.com/128/25/25657.png", alt:"github", link:"http://github.com/AmanVerma-97", name:"Github"},
    {src:"https://cdn-icons-png.flaticon.com/128/3536/3536505.png", alt:"linkedin", link:"http://linkedin.com/in/amanv97", name:"LinkedIn"},
    {src:"https://cdn-icons-png.flaticon.com/128/5968/5968830.png", alt:"twitter", link:"https://twitter.com/AmanVerma_97", name:"Twitter"},
    {src:"https://img.icons8.com/?size=80&id=9L16NypUzu38&format=png", alt:"leetcode", link:"https://leetcode.com/aman_verma_19/", name:"LeetCode"},
]

function Socials() {
    
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseOver = (index) => setHoveredIndex(index);
  const handleMouseOut = () => setHoveredIndex(null);

  const handleClick=(name)=>{
    if(name==="Gmail"){
        window.location.href = "mailto:amanv191097@gmail.com";
        // window.open("mailto:amanv191097@gmail.com")
    }
  }

  return (
    <div className='flex flex-row gap-6 justify-evenly items-center w-full'>
        {
            socials.map((social,index)=>{
                return(
                    <div className='flex flex-col justify-center items-center' key={index}>
                        <a href={social.link} className=' inline' target='blank'>

                            <img src={social.src} alt={social.alt} 
                            className=' h-10 w-10 lg:h-12 lg:w-12  hover:shadow-lg hover:shadow-blue-800/75 hover:rounded-full'
                            onMouseOver={() => handleMouseOver(index)} onMouseOut={handleMouseOut} onClick={()=>handleClick(social.name)}
                            />

                            <div className={`${hoveredIndex===index ? 'opacity-100': 'opacity-0'} lg:text-base text-xs text-[#0B5A8F] font-semibold`}>{social.name}</div>

                        </a>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Socials