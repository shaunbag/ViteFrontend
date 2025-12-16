import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import ProtectedRoute from './components/ProtectedRoute'
import HomePage from './components/HomePage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<ProtectedRoute element={<HomePage />} />} />
        <Route path="login" element={<LoginPage/>} />
      </Routes>
    </>
  )
}

export default App
