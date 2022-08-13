import React, {useState, useEffect, useCallback} from 'react'
import styled from 'styled-components'

const Card = ({pregunta}) => {

	const [respuestas, setRespuestas] = useState([])
	const [correcto, setCorrecto] = useState("")
	const [selected, setSelected] = useState(null)
	const [alea, setAlea] = useState([])

	useEffect(() => {
		setRespuestas([pregunta.correct_answer, ...pregunta.incorrect_answers])
		setCorrecto(pregunta.correct_answer)
	}, [pregunta.correct_answer, pregunta.incorrect_answers])

	useEffect(() => {
		const aray = respuestas
		for (let i = aray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			const temp = aray[i]
			aray[i] = aray[j]
			aray[j] = temp
		}
		setAlea(aray)
	}, [respuestas])

	/*
	const shuffle = () => {
		const aray = respuestas
		for (let i = aray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			const temp = aray[i]
			aray[i] = aray[j]
			aray[j] = temp
		}
		return aray
	}*/

	const res = alea.map((item, i) => {
		return (
			<Button key={i} selected={i === selected} onClick={() => setSelected(i)}>{item}</Button>
		)
	})

	const HTMLDecode = (textString) => {
	    let doc = new DOMParser().parseFromString(textString, "text/html");
	    return doc.documentElement.textContent;
	}

	return (
		<Container>
			<Question>{HTMLDecode(pregunta.question)}</Question>
			<Buttons>
				{res}	
			</Buttons>
			
		</Container>
	)
}

export default Card

const Container = styled.div`
	border: 1px solid #333;
	align-self: center;
	justify-self: center;

	width: 50%;

	border-radius: 5px;
	padding: 10px;
`

const Question = styled.p`
	font-size: 1.1em;
	font-weight: 600;
`

const Buttons = styled.div`
	display: flex;
	flex-direction: column;
`

const Button = styled.button`
	padding: 3px; 
	font-size: 1em;
	margin-top: 5px;
	border-radius: 5px;
	cursor: pointer;

	background-color: ${props => props.selected ? "#333" : "#fff"}
`