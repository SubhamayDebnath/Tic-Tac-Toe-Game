import { useState,useEffect } from "react";
import Grid from "./Components/Grid/Grid";
import Loader from "./Components/Loader/Loader";

function App() {
  const [spinner,setSpinner]=useState(false)
  useEffect(()=>{
  setSpinner(true)
  setTimeout(()=>{
    setSpinner(false)
  },1000
  )
  },[]
  )
  return (
    <main className="main_container">
      {
        spinner? <Loader/> :  <Grid numOfCards={9} />
      }
    </main>
  );
}

export default App;
