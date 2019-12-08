import React, { useState  } from 'react'
import useWebSocket from 'react-use-websocket';

const StartSession: React.FC = () => {
    const [name, setName] = useState('')
    const [sendMessage] = useWebSocket("ws://localhost:8999");
    const startSession  = () =>{
      console.log("name is"+name);
      sendMessage(name)
    };
 

  return (
     <form >
         <div>Enter your name</div>
         <input type="text" value={name} onChange={event=>setName(event.target.value)} ></input>
         <input type="button" value= "Start session" onClick={()=>startSession()}></input>
    </form>
  );
}

export default StartSession;