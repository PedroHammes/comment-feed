import { useState } from "react"

export default function updateFeed() {
    const [ feed, setFeed ] = useState([])

    const submitNewPost = (email, comment) => {
        const id = Math.floor(Math.random()*1000000000)
        const date = Date().toLocaleString('pt-BR').slice(0,21).toLowerCase()
        const newPost = {
            id: id, 
            email: email,
            date: date,
            comment: comment
        }
    
        console.log(newPost)
        setFeed([newPost,...feed])
      }

      return { feed, submitNewPost }
}