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
        <h1 className='pb-3 text mt-6 text-2xl lg:text-3xl font-bold text-center tracking-widest text'>CHAPTER 5</h1>
        <div className='lg:w-1/2 md:w-1/2 w-full mx-auto'>
          <div className='h-full flex items-center'>
            <img className='mt-4 w-full md:4/12 mb-10 mx-auto imageBackground object-cover object-center rounded-xl' alt='hero' src='../../PNG/Messages.png' />
          </div>
        </div>

        <h1 className='text mt-0 text-xl lg:text-2xl font-bold tracking-widest text'>Built-In CSS Support</h1>
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
                  <h4 className='text mt-0 text-base lg:text-xl font-medium mb-4 tracking-widest text'>Adding a Global Stylesheet :</h4>
                  <h1>
                    To add a stylesheet to your application, import the CSS file within <h>pages/_app.js.</h>
                    <br />
                    <br />
                    For example, consider the following stylesheet named <h>styles.css</h>
                    <div className='text-center'>
                      <Code code={install} language='css' />
                    </div>
                    Create a <h>pages/_app.js</h> file if not already present. Then, import the <h>styles.css</h> file.
                    <div className='text-center'>
                      <Code code={ex} language='javascript' />
                    </div>
                    These styles <h>styles.css</h> will apply to all pages and components in your application. Due to the global nature of stylesheets, and to avoid conflicts, you may only import them inside <h>pages/_app.js. </h>
                    <br />
                    <br />
                    In development, expressing stylesheets this way allows your styles to be hot reloaded as you edit them—meaning you can keep application state.
                    <br />
                    <br />
                    In production, all CSS files will be automatically concatenated into a <h>single minified .css</h> file. <br />
                    <br />
                  </h1>

                  <h4 className='text mt-0 text-base lg:text-xl font-medium mb-4 tracking-widest text'>Import styles from node modules</h4>
                  <h1>
                    Since Next.js 9.5.4, importing a CSS file from <h>node_modules</h> is permitted anywhere in your application.
                    <br />
                    <br />
                    For global stylesheets, like <h>bootstrap</h> or <h> nprogress</h>, you should import the file inside <h>pages/_app.js</h>
                    <br />
                    <br /> For example:
                  </h1>
                  <div className='text-center'>
                    <Code code={ex2} language='javascript' />
                  </div>
                  <h1>
                    For importing CSS required by a third party component, you can do so in your component. For example:
                    <br />
                    <div className='text-center'>
                      <Code code={ex3} language='javascript' />
                    </div>
                  </h1>
                  {/* Prev next */}
                  <div className='row'>
                    <div className='w-full mx-auto'>
                      <div className='grid gap-5 mx-0 mt-6'>
                        <div className='col-start-1 col-end-3 my-2'>
                          <Link href='/Chapter/Chapter_4'>
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
                          <Link href='/Chapter/Chapter_6'>
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
