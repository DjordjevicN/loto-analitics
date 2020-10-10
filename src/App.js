import React from 'react';
import data from './data.json'
import './App.css';
import Header from './components/Header'
import DisplayInformation from './components/DisplayInformation'
import CalcProb from './components/CalcProb';
import Footer from './components/Footer';
let state ={
  1:0,
  2:0,
  3:0,
  4:0,
  5:0,
  6:0,
  7:0,
  8:0,
  9:0,
  10:0,
  11:0,
  12:0,
  13:0,
  14:0,
  15:0,
  16:0,
  17:0,
  18:0,
  19:0,
  20:0,
  21:0,
  22:0,
  23:0,
  24:0,
  25:0,
  26:0,
  27:0,
  28:0,
  29:0,
  30:0,
  31:0,
  32:0,
  33:0,
  34:0,
  35:0,
  36:0,
  37:0,
  38:0,
  39:0,
}
function App() {
  
const populateState=(num)=>state[num]++
data.map((item)=>{
return item.lotoNum.map((num)=>populateState(num))
})
  return (
    <div className="App">
      <Header/>
      <CalcProb data={state} total={data.length}/>
      <DisplayInformation state={state}/> 
      <Footer/>
    </div>
  );
}

export default App;
