import { useContext, useEffect, useState } from "react"
import AuthContext from "../../stores/authContaxts"
import Code from "../../components/Code"
import ReadMinutes from "../../components/ReadMinutes"

const install = `function HomePage() {
  return <div>Welcome to Next.js!</div>
}

export default HomePage
`
const installmenual = `npm install next react react-dom
# or
yarn add next react react-dom`

const installMenualScript = `"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start"
}`

export default function Guides() {
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
                    Pages are associated with a route based on their file name. For example<h>pages/about.js</h> is mapped to <h>/about</h>. You can even add dynamic route parameters with the filename.
                    <br />
                    <br /> Create a <h>pages</h> directory inside your project.
                    <br />
                    <br /> Populate <h>./pages/index.js</h> with the following contents:
                  </h1>
                  <br />
                  <div className='text-center'></div>
                  <h1 className='text mt-6 text-xl lg:text-2xl font-bold tracking-widest text'>Setup</h1>
                  <h2 className='mt-4 lg:mt-6'>
                    We recommend creating a new Next.js app using <h>create-next-app</h>, which sets up everything automatically for you. To create a project, run:
                  </h2>
                  <br />
                  <div className='text-center'>
                    <Code code={install} language='javascript' />
                  </div>
                  <br />

                  <h2 className=''>
                    To start developing your application run <h>npm run dev</h> or yarn dev. <br />
                    <br /> This starts the development server on <h>http://localhost:3000.</h> Visit <h>http://localhost:3000</h> to view your application.
                  </h2>

                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
