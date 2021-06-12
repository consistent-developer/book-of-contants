import Link from 'next/link'
import { useContext } from 'react'
import AuthContext from '../stores/authContaxts'

export default function Navbar () {

  const { user, login, logout, authReady } = useContext(AuthContext)
  console.log(user)
  return (

    <div className="mt-0.5 bg-white tracking-wider" >
      <nav className="text-base text-gray-600 lg:text-xl">

        {authReady && (
          <ul className="flex justify-between mx-1 lg:mx-20 mt-4 flex cursor-pointer">
            <div>
              <h1 className="text-gray-600 font-bold">Concept of book</h1>
            </div>
            <div>
              {!user && <li onClick={login} className="btn flex justify-end self-center ">Log in/Sign up</li>}
              {/* {user && <li >{user.email}</li>} */}
              {user && <li onClick={logout} className="btn self-center">Log Out</li>}
            </div>
          </ul>
        )}

        {authReady && (
          <div className="">
            <section id="bottom-navigation" className="mt-10 block fixed inset-x-0 bottom-0 z-10 bg-white shadow">
              <div id="tabs" className="flex justify-between">
                <Link href="/home" className="">
                  <a className="w-full focus:text-green-700 focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center mt-6 ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-14 md:w-16" fill="none" viewBox="0 0 42 42" stroke="currentColor">
                      <path strokeLinecap="" strokeLinejoin="" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    {/* <span className="tab tab-home block text-xs">Home</span> */}
                  </a>
                </Link>

                <Link href="/Chapter">
                  <a className="w-full focus:text-green-700 focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center mt-6 ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-14 md:w-16" fill="none" viewBox="0 0 42 42" stroke="currentColor">
                      <path strokeLinecap="" strokeLinejoin="" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    {/* <span className="tab tab-kategori block text-xs">Category</span> */}
                  </a>
                </Link>

                <Link href="https://google-clone-mu-three.vercel.app">
                  <a className="w-full focus:text-green-700 focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center mt-6 ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-14 md:w-16" fill="none" viewBox="0 0 42 42" stroke="currentColor">
                      <path strokeLinecap="" strokeLinejoin="" strokeWidth={1} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    {/* <span className="tab tab-explore block text-xs">Explore</span> */}
                  </a>
                </Link>
              </div>
            </section>
          </div>
        )}
      </nav>
      <div></div>
    </div>
  )
}
