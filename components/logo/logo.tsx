import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
  return (
    <div className="py-3">
      <Link href={"/"} className='flex items-center gap-1'>
        <Image src="/cloud-cup.jpg" alt="Cloud Cup Logo" width={40} height={40} />
        <h1 className="text-2xl font-bold italic">Cloud Cup</h1>
      </Link>
    </div>
  )
}
