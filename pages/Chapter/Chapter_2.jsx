import { useContext, useEffect, useState } from "react"
import AuthContext from "../../stores/authContaxts"
import Code from "../../components/Code"
import ReadMinutes from "../../components/ReadMinutes"
import Link from "next/link"

const install = `function HomePage() {
  return <div>Welcome to Next.js!</div>
}

export default HomePage
`
const Prev = "hello"

export default function Chapter_2() {
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
    <div className='mb-10 text-sm md:text-base'>
      <ReadMinutes />
      <div className='tracking-widest pb-10 lg:mx-60 px-2'>
        {/* Hero Image  */}
        <h1 className='pb-3 text mt-6 text-2xl lg:text-3xl font-bold text-center tracking-widest text'>CHAPTER 2</h1>
        <div className='lg:w-1/2 md:w-1/2 w-full mx-auto'>
          <div className='h-full flex items-center'>
            <img className='mt-4 w-full  md:4/12 mb-10 mx-auto imageBackground object-cover object-center rounded-xl' alt='hero' src='../../PNG/Analytics.png' />
          </div>
        </div>

        <h1 className='text mt-0 text-xl lg:text-2xl font-bold tracking-widest text'>Hello world</h1>
        {/* Chapters */}
        <section className='text-gray-600 body-font'>
          <div className='mt-6 lg:mt-6 mx-auto'>
            {!authReady && <div>Loading...</div>}
            {error && (
              <div>
                <p>{error}</p>
              </div>
            )}
            <div className=''>
              {chapters && (
                <div>
                  <h1>
                    Pages are associated with a route based on their file name. For example <h>pages/about.js</h> is mapped to <h>/about</h>. You can even add dynamic route parameters with the filename.
                    <br />
                    <br /> Create a <h>pages</h> directory inside your project.
                    <br />
                    <br /> Populate <h>./pages/index.js</h> with the following contents:
                  </h1>
                  <br />
                  <div className='text-center'></div>
                  <h1 className='text mt-6 text-xl lg:text-2xl font-bold tracking-widest text'>Setup</h1>
                  <div className='text-center'>
                    <Code code={install} language='javascript' />
                  </div>
                  <br />

                  <h2 className=''>
                    To start developing your application run <h>npm run dev</h> or yarn dev. <br />
                    <br /> This starts the development server on <h>http://localhost:3000.</h> Visit <h>http://localhost:3000</h> to view your application.
                  </h2>

                  {/* Prev next */}
                  <div className='row'>
                    <div className='w-full mx-auto'>
                      <div className='grid gap-5 mx-0 mt-6'>
                        <div className='col-start-1 col-end-3 my-2'>
                          <Link href='/Chapter/Chapter_1'>
                            <a>
                              <div className='h-full dark:bg-gray-800 bg-white rounded'>
                                <h3 className='text-xl mb-3 font-semibold inline-flex'>
                                  <svg className='mr-2' width='24' height='30' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M1.02698 11.9929L5.26242 16.2426L6.67902 14.8308L4.85766 13.0033L22.9731 13.0012L22.9728 11.0012L4.85309 11.0033L6.6886 9.17398L5.27677 7.75739L1.02698 11.9929Z' fill='currentColor' />
                                  </svg>
                                  Prev
                                </h3>
                                <p className='text-sm md:text-base text-left tracking-wide'>Chapter 1</p>
                              </div>
                            </a>
                          </Link>
                        </div>
                        <div className='col-end-5 col-span-2 my-2'>
                          <Link href='/Chapter/Chapter_3'>
                            <a>
                              <div className='h-full dark:bg-gray-800 bg-white rounded text-right'>
                                <h3 className='text-xl mb-3 font-semibold inline-flex '>
                                  Next
                                  <svg className='ml-2' width='24' height='30' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z' fill='currentColor' />
                                  </svg>
                                </h3>
                                <p className='text-sm md:text-base text-right tracking-wide'>Chapter 3</p>
                              </div>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
