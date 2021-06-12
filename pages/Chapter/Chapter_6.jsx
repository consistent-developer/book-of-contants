import { useContext, useEffect, useState } from "react"
import AuthContext from "../../stores/authContaxts"
import Code from "../../components/Code"
import ReadMinutes from "../../components/ReadMinutes"
import Link from "next/link"

const install = `body {
  font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',
    'Arial', sans-serif;
  padding: 20px 20px 60px;
  max-width: 680px;
  margin: 0 auto;
}
`
const ex = `import '../styles.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}`

const ex2 = `import 'bootstrap/dist/css/bootstrap.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}`

const ex3 = `import { useState } from 'react'
import { Dialog } from '@reach/dialog'
import VisuallyHidden from '@reach/visually-hidden'
import '@reach/dialog/styles.css'

function ExampleDialog(props) {
  const [showDialog, setShowDialog] = useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)

  return (
    <div>
      <button onClick={open}>Open Dialog</button>
      <Dialog isOpen={showDialog} onDismiss={close}>
        <button className="close-button" onClick={close}>
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>×</span>
        </button>
        <p>Hello there. I am a dialog</p>
      </Dialog>
    </div>
  )
}`

export default function Chapter_5() {
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
        <h1 className='pb-3 text mt-6 text-2xl lg:text-3xl font-bold text-center tracking-widest text'>CHAPTER 6</h1>
        <div className='lg:w-1/2 md:w-1/2 w-full mx-auto'>
          <div className='h-full flex items-center'>
            <img className='mt-4 w-full md:4/12 mb-10 mx-auto imageBackground object-cover object-center rounded-xl' alt='hero' src='../../PNG/Messages.png' />
          </div>
        </div>

        <h1 className='text mt-0 text-xl lg:text-2xl font-bold tracking-widest text'>Deployment</h1>
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
                  <h4 className='text mt-0 text-base lg:text-xl font-medium mb-4 tracking-widest text'>Getting started</h4>
                  <h1>
                    If you haven’t already done so, push your Next.js app to a Git provider of your choice: GitHub, GitLab, or BitBucket.
                    <br />
                    <br />
                    <div>
                      <ul className='list-disc list-inside'>
                        <li>
                          Your repository can be private or public. Then, follow these steps: Sign up to <h>Vercel</h>
                        </li>
                        <br />
                        <li>
                          After signing up, you’ll arrive on the <h>“Import Project” </h> page. Under <h>“From Git Repository”</h>, choose the Git provider you use and set up an integration.
                        </li>
                        <br />
                        <li>
                          Once that’s set up, click <h>“Import Project From …” </h>and import your Next.js app. It auto-detects that your app is using Next.js and sets up the build configuration for you. No need to change anything — everything should work just fine!
                        </li>
                        <br />
                        <li>
                          After importing, it’ll deploy your Next.js app and provide you with a deployment URL. Click <h>“Visit”</h> to see your app in production.
                        </li>
                      </ul>
                      <br />
                    </div>
                  </h1>

                  <h4 className='text mt-0 text-base lg:text-xl font-medium mb-4 tracking-widest text'>Optimized for Next.js</h4>
                  <h1>
                    Vercel is made by the creators of Next.js and has first-class support for Next.js. <br /><br />
                    <ul className='list-inside list-disc'>
                      <li>Every page can either use Static Generation or Server-Side Rendering.</li>
                      <br />
                      <li>Pages that use Static Generation and assets (JS, CSS, images, fonts, etc) will automatically be served from Vercel's Edge Network, which is blazingly fast. </li>
                      <br />
                      <li>Pages that use Server-Side Rendering and API routes will automatically become isolated Serverless Functions. This allows page rendering and API requests to scale infinitely.</li>
                    </ul>
                  </h1>
                  {/* Prev next */}
                  <div className='row'>
                    <div className='w-full mx-auto'>
                      <div className='grid gap-5 mx-0 mt-6'>
                        <div className='col-start-1 col-end-3 my-2'>
                          <Link href='/Chapter/Chapter_5'>
                            <a>
                              <div className='h-full dark:bg-gray-800 bg-white rounded'>
                                <h3 className='text-xl mb-3 font-semibold inline-flex'>
                                  <svg className='mr-2' width='24' height='30' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M1.02698 11.9929L5.26242 16.2426L6.67902 14.8308L4.85766 13.0033L22.9731 13.0012L22.9728 11.0012L4.85309 11.0033L6.6886 9.17398L5.27677 7.75739L1.02698 11.9929Z' fill='currentColor' />
                                  </svg>
                                  Prev
                                </h3>
                                <p className='text-sm md:text-base text-left tracking-wide'>Chapter 5</p>
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
