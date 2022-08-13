import React, {useState} from 'react'
import styled from 'styled-components'

import Card from './Card'
import Results from './Results'

const Cards = ({allQuestions, reiniciar}) => {
	const [cantidad, setCantidad] = useState(allQuestions.length)
	const [index, setIndex] = useState(0)
	const [correctas, setCorrectas] = useState(0)

	const handleChange = () => {
		if (index < cantidad) {
			setIndex(index + 1)
		} 
	}

	const sumarCorrectas = () => {
		setCorrectas(prev => prev + 1)
	}


	return (
		<Container>

			{
				index === cantidad
				? <Results reiniciar={reiniciar} total={cantidad} bienContestadas={correctas}/>
				: (
					<>
					<Counter>{index + 1} / {cantidad}</Counter>
					<Card correctas={sumarCorrectas} pregunta={allQuestions[index]} cambiar={handleChange}/>
					</>
				)
			}
		</Container>
	)
}

export default Cards

const Container = styled.div`
	height: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const Counter = styled.p`
	font-size: 2em;
	font-weight: 800;
`