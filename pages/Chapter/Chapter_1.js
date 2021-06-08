import { useContext, useEffect, useState } from 'react'
import AuthContext from '../../stores/authContaxts'
import Link from 'next/link';
import ReadMinutes from '../../components/ReadMinutes';


export default function Chapter_1 (block, cls) {
  const { user, authReady, login } = useContext(AuthContext)
  const [chapters, setChapters] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (authReady) {
      fetch('/.netlify/functions/chapters', user && {
        headers: {
          Authorization: 'Bearer ' + user.token.access_token
        }
      })
        .then(res => {
          if (!res.ok) {
            login()
            throw Error('You must be logged in to view this content')
          }
          return res.json()
        })
        .then(data => {
          setError(null)
          setChapters(data)
        })
        .catch(err => {
          setError(err.message)
          setChapters(null)
        })
    }

  }, [user, authReady])

  return (
    <div className="">
      <ReadMinutes />
      {/* Hero Image  */}
      <div className="lg:w-1/3 md:w-1/2 w-full mx-auto">
        <div className="h-full flex items-center">
          <img className="mt-4 w-full  md:4/12 mb-10 mx-auto imageBackground object-cover object-center rounded-xl" alt="hero" src="../../PNG/Product Launch.png"></img>
        </div>
      </div>

      <h1 className="pb-3 text-center text mt-0 text-2xl lg:text-2xl font-bold tracking-widest text">Chapter 1</h1>
      <h2 className="text-sm text-center lg:text-base text2">Installation</h2>


      {/* Chapters */}
      <section className="text-gray-600 body-font tracking-widest pb-4">
        <div className=" my-10 lg:mt-20 mx-auto">

          {!authReady && <div>Loading...</div>}

          {error && (
            <div>
              <p>{error}</p>
            </div>
          )}



          <div className="">
            {chapters &&
              <div>
                <h1 className="text-2xl font-bold">Getting Started</h1><br />
                <h2>Welcome to the Next.js documentation! <br /><br />

                    If you're new to Next.js we recommend that you start with the learn course. <br /><br />

                    The interactive course with quizzes will guide you through everything you need to know to use Next.js.
              </h2>
              </div>
            }
          </div>

        </div>
      </section>
    </div>
  )
}