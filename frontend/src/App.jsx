import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
