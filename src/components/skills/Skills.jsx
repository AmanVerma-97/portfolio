import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import sourceData from "../skills/sourceData.json";

 //helps to keep charts of similar size and responsive
 defaults.maintainAspectRatio=false;
 defaults.responsive=true;
 defaults.animation=true;

//to set global properties for 'title' of chart. "Title" itself is local for each chart.
defaults.plugins.title.display=true;
defaults.plugins.title.color="rgb(161, 81, 6)";
defaults.plugins.title.align="start";
defaults.plugins.title.font.size=20;

const Skills = () => {

  return (
    <>
        <div className=" w-11/12 min-h-96 h-auto m-auto md:w-9/12 lg:w-8/12 mt-12">
            <Bar 
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
            />

        </div>
    </>
    
  )
}

export default Skills;