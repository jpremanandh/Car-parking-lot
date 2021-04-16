import React, { useState } from "react";
import {Redirect} from 'react-router';

function App() {
  const [Slots, setSlots] = useState([{ Slot1: ""}, { Slot2: ""}, { Slot3: ""}, { Slot4: ""}
,{ Slot5: ""}]);
const[booking,setBooking] = useState(false);

 const style = {
        height: "20px",
        width: "20px",
        marginbottom: "15px",
        border: "1px solid black",
        clear: "SSboth"
      
 };

const handleBooking = () => {
  setBooking(true);
}

const Book = () => {
  if(booking) {
    return <Redirect to = "booking"/>
  }
  else {
     return <div> </div>
  }
}

const Slot = () => {
  return (
    <div> 
        <h1> Select the parking space to book</h1>
      {Slots.map((x, i) => {
        return (
          <div>
            <button style= {style}
              name="firstName"
              value={x.firstName} onClick = {handleBooking}> </button> 
          </div>
        );
      })}
        <div>
          <Book/>
        </div>
    </div>
  )
}
  return (
      <Slot/>
  );
}

export default App;