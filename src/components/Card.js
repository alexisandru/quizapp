import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const Card = ({pregunta, cambiar, correctas}) => {

	const [respuestas, setRespuestas] = useState([])
	const [correcto, setCorrecto] = useState("")
	const [selected, setSelected] = useState(null)
	const [contestado, setContestado] = useState(false)
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
		setContestado(false)
		setSelected(null)
	}, [respuestas])

	const res = alea.map((item, i) => {
		return (
			<Button 
				key={i} 
				correct={item === correcto}
				contestado={contestado}
				disabled={contestado}
				selected={item === selected} 
				onClick={() => setSelected(item)}
			>
			{item}
			</Button>
		)
	})


	const contestar = () => {
		setContestado(true)
		 if(selected === correcto) {
		 	correctas()
		 }
	}

	const HTMLDecode = (textString) => {
	    let doc = new DOMParser().parseFromString(textString, "text/html");
	    return doc.documentElement.textContent;
	}

	return (
		<Container>
			<Category>{pregunta.category}</Category>
			<Question>{HTMLDecode(pregunta.question)}</Question>
			<Buttons>
				{res}	
			</Buttons>
			{contestado
				? <Next onClick={() => cambiar()}>Next</Next>
				: <Check disabled={selected === null} onClick={() => contestar()}>Check Answer</Check>
			}
			
		</Container>
	)
}  

export default Card

const Container = styled.div`
	
	margin-top: 30px;
	width: 50%;
	height: 500px;
	max-height: 500px;

	border-radius: 5px;
	padding: 30px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	box-shadow: 0 1px 10px 1px rgba(0,0,0,0.4);

	@media screen and (max-width: 650px) {
     	width: 90%; 
    }

    @media screen and (max-height: 600px) {
     	height: 450px;
     	padding: 20px;	
    }

`

const Category = styled.label`
	text-align: center;
	color: rgba(0,0,0,0.6);
`

const Question = styled.p`
	font-size: 1.7em;
	font-weight: 600;
	text-align: center;
	align-self: center;
	@media screen and (max-width: 650px) {
     	font-size: 1.3em;
    }

    
`

const Buttons = styled.div`
	display: flex;
	flex-direction: column;
`

const Check = styled.button`
	align-self: center;
	border-radius: 5px;
	background-color: #fff;
	padding: 15px 30px;
	font-size: 1em;
	box-shadow: 0 1px 5px 1px rgba(0,0,0,0.5);
	cursor: pointer;
	border: none;
`

const Next = styled(Check)`
	background-color: rgba(32, 252, 3, 0.4)
`

const Button = styled.button`
	padding: 10px; 
	font-size: 1.1em;
	margin-top: 10px;
	border-radius: 5px;
	cursor: pointer;


	background-color: ${props => {
		if (props.contestado && props.correct) {
			return "rgba(2, 107, 9, 0.5)"
		} else if (props.contestado && props.selected && !props.correct) {
			return "rgba(250, 24, 7, 0.5)"
		} else if (props.selected) {
			return "rgba(0,0,0,0.2)"
		} else {
			return "#fff"
		}
	}};
	
	color: #000;
`

//background-color: ${props => props.selected ? "#333" : "#fff"};