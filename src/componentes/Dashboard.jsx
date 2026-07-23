import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const Dashboard = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <h1 className="text-3xl font-bold text-center pt-20 text-gray-900">Dashboard</h1>
      <div className="flex justify-center mt-6">
        <button
          onClick={handleLogout}
          className="px-6 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Dashboard
