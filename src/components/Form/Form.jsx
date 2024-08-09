import styles from './form.module.css'
import { useState } from 'react'

export default function Form(props) {

    const [ email, setEmail ] = useState('example@email.com')
    const [ comment, setComment ] = useState('Comment #1')


    const formSubmit = (ev) => {
        ev.preventDefault()
        console.log('Your comment will be sent:')
        props.submitNewPost(email, comment)
        setEmail('')
        setComment('')
    }

    return (
        <form 
            className={styles.form}
            onSubmit={formSubmit}
        >
            <input
                type="text"
                // placeholder='email@example.com'
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
            />

            <textarea 
            // placeholder='Your comment here'
            value={comment}
            onChange={(ev) => setComment(ev.target.value)}
            ></textarea>

            <button> ^ </button>
        </form>
    )
}