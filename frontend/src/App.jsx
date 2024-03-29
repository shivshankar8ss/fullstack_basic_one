import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [friends, setfriends] = useState([])

useEffect(()=>{
  axios.get('/api/friends').then((response)=>{
    setfriends(response.data)
  })
  .catch((error)=>{
    console.log(error)
  })
})

  return (
    <>
     <h1 >Friendship is very crucial for humans.</h1>
     <p>Friends: {friends.length}</p>

     {
      friends.map((fr,index)=>(
        <div key={fr.id}>
          <h3>{fr.title}</h3>
          <p>{fr.content}</p>
        </div>
      ))
     }
     
    </>
  )
}

export default App
