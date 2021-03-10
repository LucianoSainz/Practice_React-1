import React, {useState} from 'react'
import ReactDOM from 'react-dom'



const Hello = ({name, age}) => { 
const bornYear = () => new  Date().getFullYear() - age;
  

  return(
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () =>{
 
  const [counter, setCounter] = useState(0)

  const increase = () => setCounter(counter + 1)

  const setZero = () => setCounter(0)

return(
   <div>
     <div>{counter}</div>
     <button onClick={increase}>plus</button>
     <button onClick={setZero}>zero</button>
     
   </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root')
)