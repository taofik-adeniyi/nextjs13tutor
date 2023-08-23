import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from './dojo-logo.png'

const Navbar = () => {
  return (
    <nav>
        <Image 
        src={Logo}
        alt="Taofik help desk"
        width={70}
        quality={100}
        placeholder='blur'
        />
    <h1>Taofik Help Desk</h1>
    <Link href="/">Dashboard</Link>
    <Link href="/tickets">Tickets</Link>
  </nav>
  )
}

export default Navbar