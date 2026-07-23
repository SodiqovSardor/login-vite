import { Routes, Route } from 'react-router-dom'
import Home from './componentes/Home'
import About from './componentes/About'
import Contact from './componentes/Contact'
import Login from './componentes/Login'
import Dashboard from './componentes/Dashboard'
import ProtectedRoute from './componentes/ProtectedRoute'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
    </Routes>
  )
}

export default App
