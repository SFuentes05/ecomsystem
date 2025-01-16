import Link from 'next/link'
import Image from 'next/image'
import LogoImg from '@/public/images/logo.svg'

export default function Logo() {
  return (
    <Link className="inline-flex" href="/" aria-label="Ecomsystem">
      <Image 
        className="max-w-none" 
        src={LogoImg} 
        width={180}    // Increased width for horizontal layout
        height={48}    // Adjusted height to maintain proportion
        priority 
        alt="Ecomsystem" 
      />
    </Link>
  )
}