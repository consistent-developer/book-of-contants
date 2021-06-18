import { useContext, useEffect, useState } from "react"
import AuthContext from "../../stores/authContaxts"
import Code from "../../components/Code"
import ReadMinutes from "../../components/ReadMinutes"
import Link from "next/link"

const install = `python helloworld.py`
const installmenual = `print("Hello, World!")`

const installMenualScript = `"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start"
}`

export default function Chapter_1() {
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
    <div className='mb-10 text-sm md:text-base '>
      <ReadMinutes />
      <div className='tracking-widest pb-10 lg:mx-60 px-2'>
        {/* Hero Image  */}
        <h1 className='pb-3 text mt-6 text-2xl lg:text-3xl font-bold text-center tracking-widest text'>CHAPTER 1</h1>
        <div className='lg:w-1/2 md:w-1/2 w-full mx-auto'>
          <div className='h-full flex items-center'>
            <img className='mt-4 w-full  md:4/12 mb-10 mx-auto imageBackground object-cover object-center rounded-xl' alt='hero' src='../../PNG/Product Launch.png' />
          </div>
        </div>

        <h1 className='text mt-0 text-xl lg:text-2xl font-bold tracking-widest text'>What is Python</h1>
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
                  <h1>Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.</h1>
                  <br />
                  <h1>It use for...</h1>
                  <br />
                  <ul className='list-disc list-inside text2 '>
                    <li>web development</li>
                    <li>software development</li>
                    <li>mathematics</li>
                    <li>system scripting.</li>
                  </ul>
                  <br />
                  <div className='text-center'></div>
                  <h1 className='text mt-4 text-xl lg:text-2xl font-bold tracking-widest text'>Python Quickstart</h1>
                  <h2 className='mt-2 lg:mt-4'>
                    Python is an interpreted programming language, this means that as a developer you write Python (.py) files in a text editor and then put those files into the python interpreter to be executed. <br />
                    <br /> The way to run a python file is like this on the command line:
                  </h2>
                  <div className='text-center'>
                    <Code code={install} language='Bash' />
                  </div>
                  <h2>
                    <h>helloworld.py</h>
                  </h2>
                  <Code code={installmenual} language='javascript' className='text-sm' />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Prev next */}
        <div className='row'>
          <div className='w-full mx-auto'>
            <div className='grid gap-5 mx-0 mt-6'>
              <div className='col-start-1 col-end-3 my-2'></div>
              <div className='col-end-5 col-span-2 my-2'>
                <Link href='/python/Chapter_2'>
                  <a>
                    <div className='h-full dark:bg-gray-800 bg-white rounded text-right'>
                      <h3 className='text-xl mb-3 font-semibold inline-flex '>
                        Next
                        <svg className='ml-2' width='24' height='30' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path d='M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z' fill='currentColor' />
                        </svg>
                      </h3>
                      <p className='text-sm md:text-base text-right tracking-wide'>Chapter 2</p>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
