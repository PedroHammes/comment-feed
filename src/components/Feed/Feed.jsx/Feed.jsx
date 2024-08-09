import styles from './feed.module.css'
import Post from "../Post/Post"

export default function Feed({ feed }) {
    return (
        <section className={styles.feed}>
            {feed.length > 0 ? (

                <div>
                    {feed.map((post) => (
                        <Post
                            key={post.id}
                            email={post.email}
                            date={post.date}
                            comment={post.comment}
                            id={post.id}
                        />
                    ))}
                </div>

            ): (
                
                <p>Comments will appear here</p>
            
            )}
      </section>
    )
}