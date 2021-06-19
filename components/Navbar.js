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
              <div id="tabs" className="flex justify-between mx-10 md:mx-20 lg:mx-80">

                <div>
                  <Link href="/home" className="">
                    <a className="w-full focus:text-green-700 focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center mt-6 ">
                      <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-14 md:w-16" fill="none" viewBox="0 0 42 42" stroke="currentColor">
                        <path strokeLinecap="" strokeLinejoin="" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      {/* <span className="tab tab-home block text-xs">Home</span> */}
                    </a>
                  </Link>
                </div>


                <div>
                  <Link href="https://google-clone-mu-three.vercel.app">
                    <a className="w-full focus:text-green-700 focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center mt-6 ">
                      <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-14 md:w-16" fill="none" viewBox="0 0 42 42" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {/* <span className="tab tab-kategori block text-xs">Category</span> */}
                    </a>
                  </Link>
                </div>

              </div>
            </section>
          </div>
        )}
      </nav>
      <div></div>
    </div>
  )
}