import { useState } from 'react'
import styles from './styles/app.module.css'


export default function App() {

  const [ email, setEmail ] = useState('')
  const [ comment, setComment ] = useState('')

  const submitNewComment = (ev) => {
    ev.preventDefault()
    console.log('Your comment will be sent:')
    console.log(`${email}\n${comment}`)
    setEmail('')
    setComment('')
  }

  return (
    <div className={styles.app}>
      
      <nav>
        <h1>Wellcome to our .Chat</h1>
      </nav>
      
      <section className={styles.feed}>
        <p>Comments will appear here</p>
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

            <button onClick={submitNewComment}> ^ </button>
      </div>
    </div>
  )
}