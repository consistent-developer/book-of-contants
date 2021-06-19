import { useContext, useEffect, useState } from "react"
import AuthContext from "../stores/authContaxts"
import Link from "next/link"
import Image from "next/image"
import ReadMinutesBottom from "../components/ReadMinutesBottom"

export default function Guides () {
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
          <img className='mt-4 w-full md:4/12 mb-10 mx-auto imageBackground object-cover object-center' alt='hero' src='https://res.cloudinary.com/webalys/image/private/w_400,h_400,ar_1/f_auto/v1/icons/djakarta/education/education/online-exams-1-8e670exhfxkcvbs59gg097.png'></img>
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
            <h1 className='sm:text-3xl text-2xl font-medium text-gray-900'>Books</h1>
          </div>

          {!authReady && <div>Loading...</div>}

          {error && (
            <div>
              <p>{error}</p>
            </div>
          )}

          <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-6 -m-2 md:px-20'>
            {chapters &&
              <div>
                <Link href="">
                  <a>

                  </a>
                </Link>
              </div>

            }
          </div>


          <section class="text-gray-600 body-font m-2 lg:mx-20 lg:mt-5">
            <div class="mx-auto">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 -m-4">

                <div>
                  <Link href="/Chapter">
                    <a>
                      <div class="w-full p-4">
                        <div class="">
                          <img class="p-6 mx-auto h-40 object-cover object-center mb-6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/110px-Python-logo-notext.svg.png" alt="content" />
                          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Python</h2>
                          <p class="leading-relaxed text-base">Python is an easy to learn, powerful programming language. It has efficient high-level data structures and a simple but effective approach to object-oriented programming.</p>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>

                <div>
                  <Link href="/Chapter">
                    <a>
                      <div class="w-full p-4">
                        <div class=" rounded-lg">
                          <img class="p-6 mx-auto h-40 object-cover object-center mb-6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/220px-Nextjs-logo.svg.png" alt="content" />
                          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Next Js</h2>
                          <p class="leading-relaxed text-base">Working on a modern JavaScript application powered by React is awesome until you realize that there are a couple problems related to rendering all the content on the client-side.<h> Solution: </h>Next Js.</p>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>






              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
