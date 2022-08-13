import React from 'react' 
import styled from 'styled-components'

const Results = ({total, bienContestadas, reiniciar}) => {
	return (
		<Container>
			<Titulo>Results</Titulo>
			<Resultado>{bienContestadas} / {total}</Resultado>
			<Button onClick={() => reiniciar()}>Restart</Button>
		</Container>
	)
}

export default Results

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const Titulo = styled.h1`
	font-size: 4em;
`

const Resultado = styled.h2`
	font-size: 2em;
	margin: 20px 0;
`

const Button = styled.button`
	align-self: center;
	border-radius: 5px;
	background-color: rgba(212, 84, 4, 0.4);
	padding: 15px 30px;
	font-size: 1em;
	box-shadow: 0 1px 5px 1px rgba(0,0,0,0.5);
	cursor: pointer;
	border: none;
`