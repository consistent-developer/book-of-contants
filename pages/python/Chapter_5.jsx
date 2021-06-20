import { useContext, useEffect, useState } from "react"
import AuthContext from "../../stores/authContaxts"
import Code from "../../components/Code"
import ReadMinutes from "../../components/ReadMinutes_python"
import Link from "next/link"

const install = `a = 33
b = 200
if b > a:
  print("b is greater than a")
`

const install2 = `a = 33
b = 33
if b > a:
  print("b is greater than a")
elif a == b:
  print("a and b are equal")
`
const Prev = `a = 200
b = 33
if b > a:
  print("b is greater than a")
elif a == b:
  print("a and b are equal")
else:
  print("a is greater than b")`

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
        <h1 className='pb-3 text mt-6 text-2xl lg:text-3xl font-bold text-center tracking-widest text'>CHAPTER 5</h1>
        <div className='lg:w-1/2 md:w-1/2 w-full mx-auto'>
          <div className='h-full flex items-center'>
            <img className='mt-4 w-full  md:4/12 mb-10 mx-auto imageBackground object-cover object-center rounded-xl' alt='hero' src='../../PNG/Analytics.png' />
          </div>
        </div>

        <h1 className='text mt-0 text-xl lg:text-2xl font-bold tracking-widest text'>Python If ... Else</h1>
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
                  <h1>Python supports the usual logical conditions from mathematics: .</h1>
                  <ul className='list-disc list-inside leading-relaxed m-4'>
                    <li>
                      Equals :<h className='bg-red-50'> a == b</h>{" "}
                    </li>
                    <li>
                      Not Equals :<h className='bg-red-50'> a != b</h>{" "}
                    </li>
                    <li>
                      Greater than : <h className='bg-red-50'> a > b</h>{" "}
                    </li>
                  </ul>
                  An "if statement" is written by using the if keyword.
                  <div className='text-center'></div>
                  <div className='text-center'>
                    <Code code={install} language='javascript' className='language-python' />
                  </div>
                  <h2 className=''>
                    Operators are used to perform operations on variables and values. In the example below, we use the <h>" + "</h> operator to add together two values:
                    <br />
                    <br /> A variable is created the moment you first assign a value to it.
                  </h2>
                  <br />
                  <h1 className='text mt-0 text-base lg:text-xl font-bold tracking-widest text'>Indentation</h1>
                  <br />
                  <p>Python relies on indentation (whitespace at the beginning of a line) to define scope in the code. Other programming languages often use curly-brackets for this purpose.</p>
                  <div className='text-center'>
                    <Code code={install2} language='javascript' className='language-python' />
                  </div>
                  <h1 className='text mt-0 text-base lg:text-xl font-bold tracking-widest text'>Elif</h1>
                  <br />
                  <p>
                    The <h>elif</h> keyword is pythons way of saying "if the previous conditions were not true, then try this condition".
                  </p><br />
                  <h1 className='text mt-0 text-base lg:text-xl font-bold tracking-widest text'>Else</h1>
                  <br />
                  <p>
                    The <h>else</h> keyword catches anything which isn't caught by the preceding conditions.
                  </p>
                  <div className='text-center'>
                    <Code code={Prev} language='javascript' className='language-python' />
                  </div>
                  {/* Prev next */}
                  <div className='row'>
                    <div className='w-full mx-auto'>
                      <div className='grid gap-5 mx-0 mt-6'>
                        <div className='col-start-1 col-end-3 my-2'>
                          <Link href='/python/Chapter_4'>
                            <a>
                              <div className='h-full dark:bg-gray-800 bg-white rounded'>
                                <h3 className='text-xl mb-3 font-semibold inline-flex'>
                                  <svg className='mr-2' width='24' height='30' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M1.02698 11.9929L5.26242 16.2426L6.67902 14.8308L4.85766 13.0033L22.9731 13.0012L22.9728 11.0012L4.85309 11.0033L6.6886 9.17398L5.27677 7.75739L1.02698 11.9929Z' fill='currentColor' />
                                  </svg>
                                  Prev
                                </h3>
                                <p className='text-sm md:text-base text-left tracking-wide'>Chapter 4</p>
                              </div>
                            </a>
                          </Link>
                        </div>
                        <div className='col-end-5 col-span-2 my-2'>
                          <Link href='/python/Chapter_6'>
                            <a>
                              <div className='h-full dark:bg-gray-800 bg-white rounded text-right'>
                                <h3 className='text-xl mb-3 font-semibold inline-flex '>
                                  Next
                                  <svg className='ml-2' width='24' height='30' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z' fill='currentColor' />
                                  </svg>
                                </h3>
                                <p className='text-sm md:text-base text-right tracking-wide'>Chapter 6</p>
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
