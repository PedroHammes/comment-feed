import styles from './styles/app.module.css'
import Nav from './components/Nav/Nav'
import Feed from './components/Feed/Feed.jsx/Feed'
import Form from './components/Form/Form'
import updateFeed from './hooks/updateFeed'


export default function App() {

  const { feed, submitNewPost } = updateFeed()

  return (
    <div className={styles.app}>
      
      <Nav />
      <Feed feed={feed}/>
      <Form submitNewPost={submitNewPost}/>
      
    </div>
  )
}