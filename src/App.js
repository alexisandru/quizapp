import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import Home from './components/Home'
import Cards from './components/Cards'
import Header from './components/Header'

function App() {
  const [preguntas, setPreguntas] = useState([])
  const [options, setOptions] = useState({})
  const [token, setToken] = useState(0)
  
  useEffect(() => {
    fetch("https://opentdb.com/api_token.php?command=request")
      .then(res => res.json())
      .then(data => setToken(data.token))
  }, [])

  useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=${options.amount}${options.difficulty !== "any" ? "&difficulty=" + options.difficulty : ""}${options.category !== "any" ? "&category=" + options.category : ""}&type=${options.type}&token=${token}`)
    .then(res => res.json())
    .then(data => setPreguntas(data.results))
  }, [options, token])

  

  /*
  {
        preguntas.length !== 0
        ? cards
        : <Home addOptions={setOptions}/>
      }
  */

  const reiniciar = () => {
    setPreguntas([])
  }

  return (
    <Container >
      <Header />
      {
        preguntas.length !== 0
        ? <Cards allQuestions={preguntas} reiniciar={reiniciar}/>
        : <Home addOptions={setOptions} />
      }
    </Container>
  );
}

export default App;


const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

`