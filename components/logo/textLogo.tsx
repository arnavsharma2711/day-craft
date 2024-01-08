import Image from "next/image"
import logo from '../../assets/logo.svg';
import localFont from 'next/font/local'
import { cn } from "@/lib/utils";
const myLogoFont = localFont({ src: '../../assets/ShadowsIntoLight-Regular.ttf' })

export default function TextLogo() {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <div className="flex items-center">
      <Image
        priority
        src={logo}
        height={64}
        width={64}
        alt="logo"
        />
      <h1 className={cn(
        'text-6xl font-semibolddrop-shadow-md ml-4',
        myLogoFont.className,
        )} style={{ color: '#4caf50', fontWeight: '600' }}>
        DayCraft
      </h1>
      </div>
    </main>
  )
}
