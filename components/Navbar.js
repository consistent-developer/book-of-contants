import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
import AuthContext from '../stores/authContaxts'

export default function Navbar () {

  const { user, login, logout, authReady } = useContext(AuthContext)
  console.log(user)
  return (

    < div className="container pt-2 bg-white tracking-wider" >
      <nav className="flex justify-between text-sm lg:text-xl">

        {authReady && (
          <ul className="flex justify-end mx-1 mt-4 mb-6 flex cursor-pointer">
            <li className="mx-1 md:mx-3 self-center "><Link href="/"><a>Home</a></Link></li>
            <li className="mx-1 md:mx-3 self-center"><Link href="/home"><a>Chapters</a></Link></li>
            <li className="mx-1 md:mx-3 self-center"><Link href="/guides"><a>Projects</a></Link></li>
          </ul>
        )}

        {authReady && (
          <ul className="flex justify-end mx-1 mt-4 mb-6 flex cursor-pointer">
            {!user && <li onClick={login} className="btn flex justify-end self-center ">Log in/Sign up</li>}
            {/* {user && <li >{user.email}</li>} */}
            {user && <li onClick={logout} className="btn self-center">Log Out</li>}
          </ul>
        )}
      </nav>
      <div></div>
    </div>
  )
}
