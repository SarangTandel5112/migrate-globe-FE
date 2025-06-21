'use client'
import { useState } from 'react'
import ErrorIcon from '@/components/icons/ErrorIcon'
import Google from '@assets/images/Google.png'
import Apple from '@assets/images/Apple.png'
import Facebook from '@assets/images/Facebook.png'
import MyImage from '@/ui/myImage'

function SocialButton({ icon, text }: { icon: any; text: string }) {
  return (
    <button className="w-full border border-gray-300 rounded py-2 flex items-center justify-center gap-3 text-sm text-grayish-700 hover:bg-gray-50">
      {/* <span className="text-lg">{icon}</span> */}
      <MyImage src={icon} alt={text} width={20} height={20} className='' />
      {text}
    </button>
  )
}

type LoginPageProps = {
  isModal?: boolean
  onClose?: () => void
}

export default function LoginModal({ isModal, onClose }: LoginPageProps) {
  const [step, setStep] = useState<'email' | 'password'>('email')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState('')

  const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

  const handleNext = () => {
    if (step === 'email') {
      if (!validateEmail(email)) {
        setError('Please enter correct email')
        return
      }
      setError('')
      setStep('password')
    } else {
      if (password.length < 6) {
        setError('Please enter correct password')
        return
      }
      setError('')
      // Submit login here
      console.log({ email, password, rememberMe })
    }
  }

  return (
    // <div className="min-h-screen flex items-center justify-center bg-gray-100">
    //   <div className="bg-white w-full max-w-sm p-6 rounded-xl shadow-md">
      <div className={`bg-white ${isModal ? 'p-6 rounded-xl w-[400px]' : 'min-h-screen p-6'}`}>
        <div className="flex justify-center mb-6">
          <img src="/logo.svg" alt="Logo" className="h-6" />
        </div>

        <h2 className="text-xl font-semibold text-center mb-6 text-grayish-900">Login your account</h2>

        {/* Email or Password Input */}
        <div className="mb-4">
          <label className="text-sm mb-1 block text-grayish-700">{step === 'email' ? 'Email' : 'Password'}</label>
          <div className={`relative`}>
            <input
              type={step === 'email' ? 'email' : 'password'}
              placeholder={step === 'email' ? 'Enter your email' : 'Enter your password'}
              value={step === 'email' ? email : password}
              onChange={(e) => {
                setError('')
                step === 'email' ? setEmail(e.target.value) : setPassword(e.target.value)
              }}
              className={`w-full px-4 py-2 text-sm border text-grayish rounded-lg ${
                error ? 'border-red' : 'border-gray-300'
              } focus:outline-none`}
            />
            {error && (
              <ErrorIcon className="absolute right-3 top-2.5 text-red-500 text-xl" />
            )}
          </div>
          {error && <p className="text-xs text-red mt-1">{error}</p>}
        </div>

        <div className="flex justify-between items-center mb-4 text-sm">
          <label className="flex items-center gap-2 text-grayish-700">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            Remember me
          </label>
          <button className="text-navy-blue font-medium">Forgot password</button>
        </div>

        <button
          onClick={handleNext}
          className="w-full bg-navy-blue text-white py-2 rounded font-semibold text-sm mb-4"
        >
          {step === 'email' ? 'Next' : 'Confirm'}
        </button>

        {/* OR Divider */}
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-grayish">OR</span>
          </div>
        </div>

        {/* Social Logins */}
        <div className="space-y-2">
          <SocialButton icon={Google} text="Sign up with Google" />
          <SocialButton icon={Facebook} text="Sign up with Facebook" />
          <SocialButton icon={Apple} text="Sign up with Apple" />
        </div>

        <p className="text-sm text-center text-grayish-600 mt-4">
          Don’t have an account?{' '}
          <span className="text-navy-blue font-medium cursor-pointer">Sign Up</span>
        </p>
      </div>
    // </div>
  )
}
