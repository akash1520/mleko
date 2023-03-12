import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Menu from './components/menu/Menu'
import Speciality from './components/speciality/Speciality'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/speciality' element={<Speciality/>} />
        <Route path='/menu' element={<Menu/>}/>
      </Routes>
    </div>
  )
}

export default App
