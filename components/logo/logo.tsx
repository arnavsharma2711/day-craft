import Image from "next/image"
import logo from '../../assets/logo.svg';

export default function Logo() {
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
      </div>
    </main>
  )
}
