import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('johnd')
  const [password, setPassword] = useState('m38rmF$')
  const [trigger, setTrigger] = useState(false)

  useEffect(() => {
    if (trigger === false) return

    fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token)
          console.log(data.token)
          toast.success('Logged in successfully!')
          navigate('/dashboard')
        } else {
          toast.error('Login failed. Try again.')
        }
        setTrigger(false)
      })
      .catch(() => {
        toast.error('Something went wrong')
      })
  }, [trigger])

  const handleLogin = (e) => {
    e.preventDefault()
    setTrigger(true)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <ToastContainer />
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm"
      >
        <h1 className="text-2xl font-semibold text-gray-900 text-center mb-8">
          Sign in to your account
        </h1>

        <div className="mb-5">
          <label className="block mb-1.5 text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1.5 text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2.5 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition cursor-pointer"
        >
          Sign In
        </button>
      </form>
    </div>
  )
}

export default Login
