export const metadata = {
    title: 'Error - Stellar',
    description: 'An error occurred',
  }
  
  import Link from 'next/link'
  import AuthLogo from '../auth-logo'
  
  export default function ErrorPage() {
    return (
      <>
        {/* Page header */}
        <div className="max-w-3xl mx-auto text-center pb-12">
          {/* Logo */}
          <AuthLogo />
          {/* Page title */}
          <h1 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-red-500/60 via-red-500 to-red-500/60">An error occurred</h1>
        </div>
  
        {/* Error message */}
        <div className="max-w-sm mx-auto text-center">
          <p className="text-sm text-zinc-400 mb-4">
            We're sorry, but something went wrong. Please try again later.
          </p>
          <Link className="btn text-sm text-white bg-emerald-500 hover:bg-emerald-600 w-full shadow-sm" href="/">
            Go to Homepage
          </Link>
        </div>
      </>
    )
  }
  