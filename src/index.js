import React, {useState} from 'react'
import ReactDOM from 'react-dom'


const Display = (props) => {
  return(
    <div>{props.counter}</div>
  )
}

const App = () =>{
 
  const [counter, setCounter] = useState(0)

  const increase = () => setCounter(counter + 1)

  const setZero = () => setCounter(0)

return(
   <div>
     <Display counter={counter} />
     <button onClick={increase}>plus</button>
     <button onClick={setZero}>zero</button>
     
   </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root')
)