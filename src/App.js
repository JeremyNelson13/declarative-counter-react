//imports react modules. can also be written as one line
import React from "react";
import { useState } from 'react'
//or import React, { useState } from 'react' will also work

//defines main App function
function App () {
  let [counter, changeCounter] = useState(1)
  window.changeCounter = changeCounter
  //puts counter onto page
  return(
    <div>
      <h1>{counter}</h1>
      <h3>{counter}</h3>
    </div>
  )
}

//exports app.js for use elsewhere
export default App;