import Link from 'next/link'
import Image from 'next/image'
import LogoImg from '@/public/images/logo.svg'
import LogoTypeImg from '@/public/images/logotype.svg'
import { useSidebar } from './sidebar'

export default function SidebarLogo() {
  const { state } = useSidebar()
  const isCollapsed = state === "collapsed"

  return (
    <Link 
      className="inline-flex items-center justify-center" 
      href="/" 
      aria-label="Ecomsystem"
    >
      {isCollapsed ? (
        <Image 
          className="max-w-none" 
          src={LogoTypeImg} 
          width={32}
          height={32}
          priority 
          alt="Ecomsystem" 
        />
      ) : (
        <Image 
          className="max-w-none" 
          src={LogoImg} 
          width={180}
          height={48}
          priority 
          alt="Ecomsystem" 
        />
      )}
    </Link>
  )
} 