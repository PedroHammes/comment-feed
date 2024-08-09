import styles from './form.module.css'

export default function Form(props) {

    return (
        <form 
            className={styles.NewCommentForm}
            onSubmit={props.submitNewPost}
        >
            <input
                type="text"
                placeholder='email@example.com'
                value={props.email}
                onChange={(ev) => props.setEmail(ev.target.value)}
            />

            <textarea 
            placeholder='Your comment here'
            value={props.comment}
            onChange={(ev) => props.setComment(ev.target.value)}
            ></textarea>

            <button> ^ </button>
        </form>
    )
}