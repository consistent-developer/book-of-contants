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
          <img className='mt-4 w-full md:4/12 mb-10 mx-auto imageBackground object-cover object-center' alt='hero' src='PNG/Presentation.png'></img>
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
          </div>

          {!authReady && <div>Loading...</div>}

          {error && (
            <div>
              <p>{error}</p>
            </div>
          )}

          <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-x-6 -m-2 md:px-20'>
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
              <div class="flex flex-wrap -m-4">
               
                <div class="xl:w-1/4 md:w-1/2 p-4">
                  <div class="bg-blue-50 p-6 rounded-lg">
                    <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
                    <h3 class="tracking-widest text-green-500 text-xs font-medium title-font">SUBTITLE</h3>
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">HTML</h2>
                    <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                  </div>
                </div>

                <div class="xl:w-1/4 md:w-1/2 p-4">
                  <div class="bg-blue-50 p-6 rounded-lg">
                    <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content" />
                    <h3 class="tracking-widest text-green-500 text-xs font-medium title-font">SUBTITLE</h3>
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">CSS</h2>
                    <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                  </div>
                </div>

                <div class="xl:w-1/4 md:w-1/2 p-4">
                  <div class="bg-blue-50 p-6 rounded-lg">
                    <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content" />
                    <h3 class="tracking-widest text-green-500 text-xs font-medium title-font">SUBTITLE</h3>
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">C Language</h2>
                    <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                  </div>
                </div>
                
                <div class="xl:w-1/4 md:w-1/2 p-4">
                  <div class="bg-blue-50 p-6 rounded-lg">
                    <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content" />
                    <h3 class="tracking-widest text-green-500 text-xs font-medium title-font">SUBTITLE</h3>
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Python</h2>
                    <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
