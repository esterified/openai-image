import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import OpenAIForm from './openAIForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <OpenAIForm/>
    </div>
  )
}

export default App
