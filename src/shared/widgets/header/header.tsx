import Link from 'next/link'
import React from 'react'
import Logo from './logo'
import NavItems from './nav.items'

const Header = () => {
  return (
    <header className="w-full sticky top-0 left-0 z-[999] border-b border-b[#000] px-10 flex items-center justify-center bg-white text-black"> 

        <div>

        <Link href={"/"}>

            <Logo/>
        </Link>
        <div>

            <NavItems/>
            {/* 26:31 */}
        </div>

        </div>

    </header>
  )
}

export default Header