import styles from './styles/app.module.css'
import NewCommentForm from "./components/NewCommentForm/NewCommentForm";
import Feed from './components/Feed/Feed';

export default function App() {
  return (
    <div className={styles.app}>
      <nav>
        <h1>Wellcome to our .Chat</h1>
      </nav>
      
      <Feed />
      
      <NewCommentForm />
    </div>
  )
}