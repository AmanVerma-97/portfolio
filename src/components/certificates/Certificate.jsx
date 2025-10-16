import React from 'react';

import Amity from "../../assets/certificates-images/Amity-Degree.jpg";
import BackEnd from '../../assets/certificates-images/BackEnd.png';
import FrontEnd from '../../assets/certificates-images/FrontEnd.png';
import JavaDSA from '../../assets/certificates-images/JavaDSA.png';
import JavaScript from '../../assets/certificates-images/JavaScriptScaler.png';
import ReactCertification from '../../assets/certificates-images/React.png';
import JavaIntro from '../../assets/certificates-images/JavaIntro.png';
import VertexAI from '../../assets/certificates-images/VertexAI-Intro.png';
import Gemini from '../../assets/certificates-images/Gemini-Real-World-App.png';
import Postman from '../../assets/certificates-images/PostmanAPI.png';
import Streamlit from '../../assets/certificates-images/Gemini-and-Streamlit-skill.png';
import GeminiAPI from '../../assets/certificates-images/VertexAI-and-GeminiAPI.png';
import ML from '../../assets/certificates-images/Machine-Learning.png';
import Python from '../../assets/certificates-images/Python.png';
import Python_Basic from '../../assets/certificates-images/Python-Basic.png';
import Python_DS from '../../assets/certificates-images/Python-DS.png';
import Intro_WebDev from '../../assets/certificates-images/Intro-WebDev.png';
import GeminiMultimodal from '../../assets/certificates-images/Gemini-Multimodal-RAG.png';
import Outskill from '../../assets/certificates-images/Outskill.png';
import upGrad from '../../assets/certificates-images/upGrad.png';
import Hack2skill from '../../assets/certificates-images/Hack2skill-Certificate.png';
import Scrum from '../../assets/certificates-images/Scrum.jpg';
import OCIFOundation from '../../assets/certificates-images/OCI Foundation.png';
import OracleGenAI from '../../assets/certificates-images/Oracle-GenAI.png';

const certificates = [ 
    {name:"Amity University", img:Amity},

    {name:"BackEnd", img:BackEnd},
    {name:"FrontEnd", img:FrontEnd},
    {name:"React", img:ReactCertification},
    {name:"JavaScript", img:JavaScript},

    {name:"Gen AI Academy", img:Hack2skill},
    {name:"Gen AI Foundation", img:upGrad},
    {name:"Gen AI Mastermind", img:Outskill},
    {name:"Oracle GenAI", img:OracleGenAI},

    {name:"Java DSA", img:JavaDSA},
    {name:"Machine Learning", img:ML},
    {name:"Python", img:Python},
    {name:"Python DS", img:Python_DS},
    {name:"OCI Foundation", img:OCIFOundation},
    {name:"Scrum", img:Scrum},

    {name:"VertexAI Intro", img:VertexAI},
    {name:"Imagen", img:Gemini},
    {name:"Streamlit", img:Streamlit},
    {name:"Multimodal RAG", img:GeminiMultimodal},
    {name:"VertexAI & GeminiAPI", img:GeminiAPI},
    
    {name:"Intro to Web Dev", img:Intro_WebDev},
    {name:"Python Basic", img:Python_Basic},
    {name:"Java Intro", img:JavaIntro},
    {name:"Postamn API", img:Postman},

];

function Certificate() {
  
    const handleClick = (img) => {
        const newWindow = window.open(img, '_blank', 'noopener,noreferrer');
        if (newWindow) {
            newWindow.opener = null
        };
    }
  
  return (
        <div className=' w-full h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 justify-center items-center gap-2 lg:gap-y-1 flex-wrap p-2'>
            {
                certificates.map((certificate, index)=>{
                    return(
                        <>
                             
                            <div key={index} className=' p-1 flex flex-col justify-center items-center' >
                                
                                <>
                                    <img src={certificate.img} alt={certificate.name} className=' h-20 w-20 lg:h-24 lg:w-24 shadow-lg shadow-blue-950 hover:scale-105 cursor-pointer hover:shadow-orange-300 hover:border hover:border-black rounded-lg' loading='lazy' onClick={()=>handleClick(certificate.img)}/>
                                    <h1 className=' font-bold text-blue-950 mt-2 text-center'>{certificate.name}</h1>
                                </>
                                
                            </div>  
                            
                        </>
                        
                    )
                }
            )}
        </div>
  )
}

export default Certificate