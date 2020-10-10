import React,{useState,useEffect} from 'react';
import {Bar} from 'react-chartjs-2'

function DisplayInformation({state}) {
    const [chartData,setChartData]=useState({})
    let nums = []
    const chartInfo = ()=>{
        for( const item in state){
        nums.push(state[item])    
    }   
    }
    const chart= ()=>{
       setChartData({
           labels:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,],
           datasets:[
               {
                   label:'2020',
                   data:nums,
                  
                   backgroundColor: [
           ("1","#2D00F7"),
           ("2","#2D00F7"),
           ("3","#2D00F7"),
           ("4","#2D00F7"),
           ("5","#6A00F4"),
           ("6","#6A00F4"),
           ("7","#6A00F4"),
           ("8","#6A00F4"),
           ("9","#8900F2"),
           ("10","#8900F2"),
           ("11","#8900F2"),
           ("12","#8900F2"),
           ("13","#A100F2"),
           ("14","#A100F2"),
           ("15","#A100F2"),
           ("16","#A100F2"),
           ("17","#B100E8"),
           ("18","#B100E8"),
           ("19","#B100E8"),
           ("20","#B100E8"),
           ("21","#BC00DD"),
           ("22","#BC00DD"),
           ("23","#BC00DD"),
           ("24","#BC00DD"),
           ("25","#D100D1"),
           ("26","#D100D1"),
           ("27","#D100D1"),
           ("28","#D100D1"),
           ("29","#DB00B6"),
           ("30","#DB00B6"),
           ("31","#DB00B6"),
           ("32","#DB00B6"),
           ("33","#E500A4"),
           ("34","#E500A4"),
           ("35","#E500A4"),
           ("36","#E500A4"),
           ("37","#F20089"),
           ("38","#F20089"),
           ("39","#F20089"),
        ],
        options:{
          legend:{
              labels:{
                fontColor:'#fff',
              }
          }
        }
                   
               }
               
           ]
       },
       )
   }
useEffect(() => {
    chartInfo();
    chart();
});
  return (
    <div className='totalAnalWrapper'>
      <div className="totalAnalTitle">
        <h3>Sortirani Brojevi po kolima</h3>
      </div>
      <div className="chartBlock"> 
      <Bar data={chartData}/>
      </div>
    </div>
  );
}

export default DisplayInformation;
