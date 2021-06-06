import { useContext, useEffect, useState } from 'react'
import AuthContext from '../stores/authContaxts'

export default function Guides () {
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
    <div>

      {!authReady && <div>Loading...</div>}

      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}

      {chapters && chapter.map(Chapter => (
        <div key={chapter.title}>
          <h3>{chapter.title}</h3>
          <h4>written by {chapter.body}</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At corrupti iste ab magnam dignissimos id maxime rerum quae minima. Delectus maxime culpa est consequatur veritatis, perspiciatis cum corrupti possimus quis?</p>
        </div>
      ))}
    </div>
  )
}