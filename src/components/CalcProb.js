import React,{useState} from 'react';
import {Pie} from 'react-chartjs-2'
function CalcProb({data,total}) {

 let totalPercentageNum = []
 const[chartData,setChartData] = useState([])
let searchedTotal = chartData.length>0?chartData.reduce((a, b) => a + b, 0)/7:null;
  const state = {
    numOne:'',
    numTwo:'',
    numTree:'',
    numFour:'',
    numFive:'',
    numSix:'',
    numSeven:'',
  }
  let charInfo = {
    labels: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',   
  ],
    datasets: [{
        data: chartData,
        backgroundColor:[
          ("1","#2D00F7"),
          ("2","#6A00F4"),
          ("3","#A100F2"),
          ("4","#BC00DD"),
          ("5","#D100D1"),
          ("6","#DB00B6"),
          ("7","#F20089"),
        ]
    }] 
};
const calculate = ()=>{
  totalPercentageNum=[]
  for(let item in state){
    calc(data[state[item]],total)
    setChartData(totalPercentageNum)
  }
}
const calc=(num,totalEntries)=>{
    // let percentage = ((num*100)/totalEntries)
    let percentage = ((num/totalEntries)*100)
    totalPercentageNum.push(percentage)
  }
  return (
    <div className='calsProbWrapper'>

     <div className='prob'>
       <div className="probTitle">
         <h2>Izracunaj verovatnocu</h2>
     
       </div>
       <div className="probInput">
       <div className="numberInput">
            <div className="inputElementOne inputElem">
            <p>Broj 1</p>
            <input className='input' type="text" onChange={(e)=>{
          state.numOne = e.target.value
            }} />
             </div>
        </div>
       <div className="numberInput">
            <div className="inputElementOne inputElem">
            <p>Broj 2</p>
            <input className='input' type="text" onChange={(e)=>{
          state.numTwo = e.target.value
            }} />
             </div>
        </div>
       <div className="numberInput">
            <div className="inputElementOne inputElem">
            <p>Broj 3</p>
            <input className='input' type="text" onChange={(e)=>{
          state.numTree = e.target.value
            }} />
             </div>
        </div>
       <div className="numberInput">
            <div className="inputElementOne inputElem">
            <p>Broj 4</p>
            <input className='input' type="text" onChange={(e)=>{
          state.numFour = e.target.value
            }} />
             </div>
        </div>
       <div className="numberInput">
            <div className="inputElementOne inputElem">
            <p>Broj 5</p>
            <input className='input' type="text" onChange={(e)=>{
          state.numFive = e.target.value
            }} />
             </div>
        </div>
       <div className="numberInput">
            <div className="inputElementOne inputElem">
            <p>Broj 6</p>
            <input className='input' type="text" onChange={(e)=>{
          state.numSix = e.target.value
            }} />
             </div>
        </div>
       <div className="numberInput">
            <div className="inputElementOne inputElem">
            <p>Broj 7</p>
            <input className='input' type="text" onChange={(e)=>{
          state.numSeven = e.target.value
            }} />
             </div>
             </div>
        </div>
        
        
        <div className='pieChart'>
          {chartData.length>0? <Pie data={charInfo}/>:null}
          {/* <Pie data={charInfo}/> */}
       </div>
      
       {chartData.length<=0?  <div className="btn" onClick={()=>{
         calculate()
        }} >Analiziraj</div>:null}
       <div className="btn" onClick={()=>{
       window.location.reload(true);
        }}>Restart</div>
       <div className="prediction">
         <p>Verovatnoca Dobitka</p>
         {
          isNaN(searchedTotal)? <h1>{`$0%`}</h1>: <h1>{`${Math.floor(searchedTotal)}%`}</h1>
         }
      {/* <h1>{`${Math.floor(searchedTotal)}%`}</h1> */}
       </div>
     </div>
    </div>
  );
}

export default CalcProb;
