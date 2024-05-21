import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/layouts/Header'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Home></Home>
    </>
  )
}

export default App
