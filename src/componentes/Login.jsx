import { useState, useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {
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
    <div className="bg-gray-100 p-10" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <ToastContainer />
      <form onSubmit={handleLogin} style={{ width: '400px' }} className="bg-white p-6 rounded border">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

        <div className="mb-4">
          <label className="block mb-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="border p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="border p-2 w-full"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
