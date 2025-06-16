import { Eye, EyeClosed, Loader } from 'lucide-react'
import { useState } from 'react'

export default function LoginCard() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = () => {
    setIsLoading(true)
    setTimeout(() => {
      setErrorMessage('Impossible to load data')
    }, 2000)
  }
  const handleSwitchToSignup = () => {}

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="login-email">Email</label>
        <input id="login-email" type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>

      <div className="flex items-center gap-3">
        <input id="signup-password" type={showPassword ? 'text' : 'password'} placeholder="Create a password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        {showPassword ? <Eye className="text-gray-600" /> : <EyeClosed className="text-gray-600" onClick={() => setShowPassword(!showPassword)} />}
      </div>

      <button type="submit" className="w-full">
        {isLoading ? <Loader className="animate-spin" /> : <span>Login</span>}
      </button>

      {errorMessage && <p className="text-center text-sm text-red-500">An error occur. Check your data and try again</p>}

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Want to register your startup?{' '}
          <button type="button" onClick={handleSwitchToSignup} className="text-startup-primary hover:underline">
            Sign up
          </button>
        </p>
      </div>
    </form>
  )
}
