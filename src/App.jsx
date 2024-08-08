import { useState } from 'react'
import styles from './styles/app.module.css'
import Post from './components/Post/Post'


export default function App() {

  const [ email, setEmail ] = useState('')
  const [ comment, setComment ] = useState('')
  const [ feed, setFeed ] = useState([])

  const submitNewPost = (ev) => {
    ev.preventDefault()
    console.log('Your comment will be sent:')
    const id = Math.floor(Math.random()*1000000000)
    const date = Date().toLocaleString('pt-BR').slice(0,24)
    const newPost = {
      id: id, 
      email: email,
      date: date,
      comment: comment
    }

    console.log(newPost)
    setFeed([...feed, newPost])
    setEmail('')
    setComment('')
  }

  return (
    <div className={styles.app}>
      
      <nav>
        <h1>Wellcome to our .Chat</h1>
      </nav>
      

      <section className={styles.feed}>
        {feed.length > 0 ? (
          <div className={styles.postsSection}>
            {feed.map((post) => (
              <Post
                key={post.id}
                email={post.email}
                date={post.date}
                comment={post.comment}
              />
            ))}
          </div>

        ): (
          <p>Comments will appear here</p>
        )}
      </section>
      
      <div className={styles.NewCommentForm}>
            <input
                type="text"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
            />

            <textarea 
              name=""
              id=""
              value={comment}
              onChange={(ev) => setComment(ev.target.value)}
            ></textarea>

            <button onClick={submitNewPost}> ^ </button>
      </div>
    </div>
  )
}