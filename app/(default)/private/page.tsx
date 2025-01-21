'use client'

import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'

export default function PrivatePage() {
  const supabase = createClient()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    redirect('/')
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="flex justify-between items-center">
          <p className="text-zinc-300">Welcome to your private page!</p>
          <button
            onClick={handleSignOut}
            className="btn-sm text-zinc-300 hover:text-white transition duration-150 ease-in-out group [background:linear-gradient(theme(colors.zinc.900),_theme(colors.zinc.900))_padding-box,_conic-gradient(theme(colors.zinc.400),_theme(colors.zinc.700)_25%,_theme(colors.zinc.700)_75%,_theme(colors.zinc.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-zinc-800/30 before:rounded-full before:pointer-events-none"
          >
            <span className="relative inline-flex items-center">
              Sign out <span className="tracking-normal text-emerald-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
