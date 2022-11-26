import React,{useState} from 'react';
import './App.css';
// import "./time"
function App() {
  let time2=new Date().toLocaleTimeString();
  const[ctime,setCtime]=useState(time2);
  const updateTime=()=>{
    time2=new Date().toLocaleTimeString();
    setCtime(time2)
  }
  setInterval(updateTime,1000);

      const[time,setTime]=React.useState(0)
      const[timerOn,setTimeOn]=React.useState(false)
      React.useEffect(()=>{
        let interval=null;
        if(timerOn){
            interval=setInterval(()=>{
                setTime(prevTime=>prevTime+10)
            },10)
        }
        else{
          clearInterval(interval)
        }

        return()=>clearInterval(interval)
      },[timerOn])
      
      
  return (
    <div className="App">
      
      <div className='time'>
        <span>{("0"+Math.floor((time/60000)%60)).slice(-2)}:</span>
        <span>{("0"+Math.floor((time/1000)%60)).slice(-2)}:</span>
        <span>{("0"+((time/10)%100)).slice(-2)}</span>
        
      </div>
      <div >
        {!timerOn && time ===0 && (

        <button onClick={()=>setTimeOn(true)}>Start</button>
        )}
        {timerOn &&(

        <button onClick={()=>setTimeOn(false)}>Stop</button>
        )}
        {!timerOn && time !== 0 &&(

        <button onClick={()=>setTimeOn(true)}>Resume</button>
        )}
        {!timerOn && time>0 &&(

        <button onClick={()=>setTime(0)}>Reset</button>
        )}
      </div>
      {/* <div className='clock'>CLOCK</div> */}
      <div className="wrapper">
        <div className="display">
          <div id="time1">{time2}</div>
        </div>
        
        
        <span></span>
        <span></span>
        
      </div>
      
      <div>
        
      <section className="wave wave1"></section>
      <section className="wave wave2"></section>
      <section className="wave wave3"></section>
      <section className="wave wave4 "></section>
      </div>
      
    </div>
    
    
  );
}

export default App;
