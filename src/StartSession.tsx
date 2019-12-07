import React, { useState } from 'react'

const StartSession: React.FC = () => {
    const [name, setName] = React.useState('')

    function createSession() :void
    {  
        alert(name);

    }
  return (
     <form onSubmit={createSession}>
         <div>Enter your name</div>
         <input type="text" value={name} onChange={event=>setName(event.target.value)} ></input>
         <input type="submit" value= "Start session"></input>
    </form>
  );
}

export default StartSession;