import styles from './post.module.css'

export default function Post({ id, email, date, comment }) {
    return (
        <div className={styles.post}>
            <p className={styles.email}>{email} </p>
            <p className={styles.date}>{date}</p>
            <p className={styles.comment}>{comment}</p>
            <p className={styles.id}>#{id}</p>
        </div>
    )
}