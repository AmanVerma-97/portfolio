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
            
            <p className="ml-8 text-lg md:text-xl text-gray-900">The following are the skills I have acquired over the years. Hover for experience and proficiency in each skill.</p>
            <br />
            
                <div className="grid grid-cols-3 md:grid-cols-4 gap-4 items-center justify-items-center lg:gap-8 lg:grid-cols-6 w-full h-auto m-auto pb-4 ">
                {sourceData.map((data, index) => {
                    return (
                        <>
                            <div key={index} className="w-auto h-auto" onMouseOver={()=>sethoverIndex(index)} onMouseOut={()=>sethoverIndex(null)}>
                            <h1 className="font-bold text-lg text-blue-900">{data.label}</h1>
                            { hoverIndex===index ?
                            <div className="bg-gray-200 w-20 h-20 rounded-lg border border-black shadow-xl shadow-orange-900 hover:cursor-none">
                                <div className="bg-orange-300/90 h-[79px] w-full rounded-lg border-r-2 border-black flex flex-col justify-center items-center">
                                    <h1 className="text-center text-black font-semibold text-sm">{data.years} Years</h1>
                                    <h1 className="text-center text-black font-semibold text-sm">{data.percentage}%</h1>
                                </div>
                            </div>
                            :
                            <div className="bg-gray-200 w-20 h-20 rounded-lg border border-black shadow-lg shadow-black">
                                <div className="bg-blue-950/75 h-[79px] rounded-lg border-r-2 border-black" style={{ width: `${data.percentage}%` }}></div>
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