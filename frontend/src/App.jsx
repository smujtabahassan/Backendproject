import {useState } from 'react'
import './App.css'
//when we import axios its shows error check here and below useeffect
// import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [jokes, setJokes] = useState([])

// useEffect(()=>{
// axios.get('/api/jokes')
// .then((response)=>{

//   setJokes(response.data)
// })

// .catch((error)=>{
//   console.log(error)
// })


// })


  return (
    <>
      <h1>Here list of All JOkes Syed</h1>
<p>jokes total length:{jokes.length}</p>

{jokes.map((joke,index)=>{
<div key={joke.id}>
<h3>{joke.id}</h3>
<h3>{joke.title}</h3>
<h3>{joke.content}</h3>



</div>


})


}



    </>
  )
}

export default App














