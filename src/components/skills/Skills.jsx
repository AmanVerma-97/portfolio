import { Chart as ChartJS, defaults } from "chart.js/auto";
// import { Bar } from "react-chartjs-2";
import sourceData from "../skills/sourceData.json";
import { useState } from "react";

 //helps to keep charts of similar size and responsive
//  defaults.maintainAspectRatio=false;
//  defaults.responsive=true;
//  defaults.animation=true;

//to set global properties for 'title' of chart. "Title" itself is local for each chart.
// defaults.plugins.title.display=true;
// defaults.plugins.title.color="rgb(161, 81, 6)";
// defaults.plugins.title.align="start";
// defaults.plugins.title.font.size=24;

const Skills = () => {

  const [hoverIndex, sethoverIndex] = useState(null);

  return (
    <>
        <div className=" w-11/12 h-auto m-auto mt-12">
            {/* <Bar 
                data={{
                    labels: sourceData.map((data) => data.label),
                    datasets:[
                        {
                            label:"Proficiency",
                            data: sourceData.map((data) => data.percentage),
                            //We can give bg- color to each individual bar as well
                            backgroundColor: "rgb(124, 164, 230)",
                            borderColor:"black",
                            borderWidth:1,
                            hoverBackgroundColor:"rgb(43, 71, 135)"
                        },

                        //For multiple bar graph charts
                        {
                            label:"Experience - Years",
                            data: sourceData.map((data)=> data.years),
                            backgroundColor: "rgb(51, 107, 52)",
                            borderColor:"black",
                            borderWidth:1,
                            hoverBackgroundColor:"rgb(95, 207, 97)"
                        }
                    ]
                }} 
                options={{
                    plugins:{
                        title:{
                            text:"SKILLS"
                        }
                    },
                    scales:{
                        y: {
                            min: 0,
                            max: 100,
                          }
                    }
                }}
            /> */}
            
            {/* <p className="ml-8 text-lg md:text-xl text-gray-900">The following are the skills I have acquired over the years. Hover for experience and proficiency in each skill.</p>
            <br /> */}
            
                <div className="grid grid-cols-3 md:grid-cols-4 gap-2 items-baseline justify-items-center lg:gap-3 lg:grid-cols-6 w-full h-auto m-auto ">
                {sourceData.map((data, index) => {
                    return (
                        <>
                            <div key={index} className="w-auto h-auto flex flex-col items-center" onMouseOver={()=>sethoverIndex(index)} onMouseOut={()=>sethoverIndex(null)}>
                            <h1 className="text-center bg-slate-200 font-extrabold px-2 text-lg text-blue-950 mb-1  border border-black rounded-md">{data.label}</h1>
                            { hoverIndex===index ?
                            //Details about the skill on hover
                            <div className="bg-gray-200 w-20 h-20 rounded-lg border border-black shadow-xl shadow-orange-900 hover:cursor-none">
                                <div className="bg-orange-300 h-[79px] w-full rounded-lg flex flex-col justify-center items-center">
                                    <h1 className="text-center text-black font-bold text-sm">{data.years} Year</h1>
                                    <h1 className="text-center text-black font-bold text-sm">{data.percentage}%</h1>
                                </div>
                            </div>
                            :
                            //Skill logo when not hovered
                            <div className=" w-20 h-20 rounded-lg items-center justify-center">
                                <div className=" h-[50px] rounded-lg items-center justify-center" style={{ backgroundImage: `url(${data.image})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat:"no-repeat" }}></div>
                            </div>
                            }
                            
                            </div>
                        </>
                    )
                })}
                </div>
        </div>
    </>
    
  )
}

export default Skills;