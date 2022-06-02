import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'

function App() {

  const [state, setState] = useState([])

  useEffect(() => {
    axios.get(`https://dummyjson.com/products`)
      .then(res => {
        setState([...state, ...res.data.products]);
      })
  }, [state]);

  return (
    <div className="App">
      {state.map((e, i) => ( <p> {i + 1} : {e.title} </p> ))}
    </div>
  )
}

export default App;