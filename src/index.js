import React, {useState} from 'react'
import ReactDOM from 'react-dom'


const Display = (props) => {
  return(
    <div>{props.counter}</div>
  )
}

const Button = (props) => {
  return(
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const App = () =>{
 
  const [counter, setCounter] = useState(0)

  const increase = () => setCounter(counter + 1)
  const decrease = () => setCounter(counter - 1)

  const setZero = () => setCounter(0)

return(
   <div>
     <Display counter={counter} />
     <Button handleClick={increase} text='plus' />
    
     <Button handleClick={setZero} text='zero' />

     <Button handleClick={decrease} text='minus' />
     
   </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root')
)