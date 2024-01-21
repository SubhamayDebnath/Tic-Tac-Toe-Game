import React from 'react'
import "./Loader.css"
import HashLoader from "react-spinners/HashLoader";
function Loader() {
  return (
    <div className='Loader'>
        <HashLoader color="#008080" />
    </div>
  )
}

export default Loader