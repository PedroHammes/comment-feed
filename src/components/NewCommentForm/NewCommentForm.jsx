import styles from './styles.module.css'

export default function NewCommentForm() {
    return (
        <form className={styles.NewCommentForm}>
            <input type="email" placeholder="example@email.com"/>
            <textarea
                name="comment"
                id="comment"
                // cols={30}
                // rows={10}
                minLength={1}
                maxLength={280}
                required
                ></textarea>
  
            <button>^</button>
        </form>
    )
}