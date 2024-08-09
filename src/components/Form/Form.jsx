import styles from './form.module.css'
import { useState } from 'react'

export default function Form(props) {

    const [ email, setEmail ] = useState('')
    const [ comment, setComment ] = useState('')
    const [ formVisibility, setFormVisibility ] = useState('none')
    const [ openFormVisibility, setOpenFormVisibility ] = useState('flex')

    const formSubmit = (ev) => {
        ev.preventDefault()
        console.log('Your comment will be sent:')
        props.submitNewPost(email, comment)
        setEmail('')
        setComment('')
        setFormVisibility('none')
        setOpenFormVisibility('flex')
    }

    const openForm = (ev) => {
        ev.preventDefault()
        setOpenFormVisibility('none')
        setFormVisibility('flex')
    }

    return (
        <div className={styles.formArea}>
            <form 
                className={styles.form}
                onSubmit={formSubmit}
                style={{
                    display: `${formVisibility}`
                }}
            >
            <input
                type="text"
                placeholder='email@example.com'
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
            />

            <textarea 
                placeholder='Your comment here'
                value={comment}
                onChange={(ev) => setComment(ev.target.value)}
            >
            </textarea>

            <button> ^ </button>
        </form>

        <button
            className={styles.openForm}
            style={{
                display: `${openFormVisibility}`
            }}
            onClick={openForm}
        > + </button>
        </div>
    )
}