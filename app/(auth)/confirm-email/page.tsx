export const metadata = {
    title: 'Confirm Email - Stellar',
    description: 'Page description',
  }
  
  import Link from 'next/link'
  import AuthLogo from '../auth-logo'
  import { signup } from '../login/actions'
  
  export default function ConfirmEmail() {
    return (
      <>
        {/* Page header */}
        <div className="max-w-3xl mx-auto text-center pb-12">
          {/* Logo */}
          <AuthLogo />
          {/* Page title */}
          <h1 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60">Check your inbox</h1>
        </div>
  
        {/* Confirmation message */}
        <div className="max-w-sm mx-auto text-center">
          <p className="text-zinc-400 mb-6">
            We've sent you a confirmation email. Please check your inbox and click the verification link to complete your registration.
          </p>
          
          <a 
            href="https://mail.google.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn text-sm text-white bg-emerald-500 hover:bg-emerald-600 w-full shadow-sm group mb-6"
          >
            Open Gmail
            <span className="tracking-normal text-emerald-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
              -&gt;
            </span>
          </a>

          <div className="text-sm text-zinc-400">
            Didn't receive the email? Check your spam folder or{' '}
            <Link className="font-medium text-emerald-500 hover:text-emerald-400 transition duration-150 ease-in-out" href="/signup">
              try signing up again
            </Link>
          </div>
        </div>
      </>
    )
  }
  