import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/home/home'

function App() {
  return (
    <Router basename="/ADSProcSuite">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ Router>
  )
}

export default App