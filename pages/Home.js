import { useContext, useEffect, useState } from "react"
import AuthContext from "../stores/authContaxts"

import Link from "next/link"
import Image from "next/image"
import ReadMinutesBottom from "../components/ReadMinutesBottom"

export default function Home () {
  const { user, authReady, login } = useContext(AuthContext)
  const [chapters, setChapters] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (authReady) {
      fetch(
        "/.netlify/functions/chapters",
        user && {
          headers: {
            Authorization: "Bearer " + user.token.access_token,
          },
        }
      )
        .then((res) => {
          if (!res.ok) {
            login()
            throw Error("You must be logged in to view this content")
          }
          return res.json()
        })
        .then((data) => {
          setError(null)
          setChapters(data)
        })
        .catch((err) => {
          setError(err.message)
          setChapters(null)
        })
    }
  }, [user, authReady])

  return (
    <div className='tracking-widest px-2'>
      {/* Hero Image  */}
      <div className='lg:w-1/3 md:w-1/2 w-full mx-auto'>
        <div className='h-full flex items-center'>
          <img className='mt-4 w-full  md:4/12 mb-10 mx-auto imageBackground object-cover object-center' alt='hero' src='PNG/Presentation.png'></img>
        </div>
      </div>

      <h1 className='pb-3 text mt-0 text-xl lg:text-2xl font-bold tracking-widest text'>Learning Paths</h1>
      <h2 className='text-sm lg:text-base text2'>Learning paths created by dev.</h2>
      <ReadMinutesBottom />

      {/* Chapters */}
      <section className='text-gray-600 body-font'>
        <div className='mt-10 lg:mt-20 mx-auto'>
          {/* Card Tile  */}
          <div className='flex flex-col w-full mb-4'>
            <h1 className='sm:text-3xl text-2xl font-medium text-gray-900'>Chapters</h1>
            {/* <p className="lg:w-2/3 leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p> */}
          </div>

          {!authReady && <div>Loading...</div>}

          {error && (
            <div>
              <p>{error}</p>
            </div>
          )}

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 -m-2'>
            {chapters &&
              chapters.map((chapter) => (
                <div key={chapter.title}>
                  <Link href={chapter.path}>
                    <a>
                      <div className='py-2'>
                        <div className='w-full border-gray-400'>
                          <div className='h-full flex items-center border'>
                            <img alt='team' className='w-28 h-28 md:w-40 md:h-40 bg-blue-50 object-cover object-center flex-shrink-0 mr-4' src={chapter.images} />
                            <div className='flex-grow md:ml-4'>
                              <h6 className='w-20 mb-4  md:mb-6 text-sm p-0.5 text-center text-white bg-green-400'>{chapter.type}</h6>
                              <h2 className='text-gray-900 md:mb-2 title-font lg:text-2xl font-medium'>{chapter.title}</h2>
                              <p className='text-gray-500 text-sm md:mb-4 lg:text-base'>{chapter.body}</p>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
