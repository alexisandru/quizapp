import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const Home = ({addOptions}) => {
	const [options, setOptions] = useState({
		amount: 3,
		category: "any",
		difficulty: "any",
		type: "boolean",
	})
	const [categories, setCategories] = useState([])

	useEffect(() => {
		fetch("https://opentdb.com/api_category.php")
			.then(res => res.json())
			.then(data => setCategories(data.trivia_categories))
	}, [])

	const allCategories = categories.map(item => {
		return <Option value={item.id}>{item.name}</Option>
	})

	const handleOptions = (e) => {
		setOptions({
			...options,
			[e.target.title]: e.target.value,
		})
	}

	const send = () => {
		//`https://opentdb.com/api.php?amount=${options.amount}${options.difficulty !== "any" ? "&difficulty=" + options.difficulty : ""}${options.category !== "any" ? "&category=" + options.category : ""}&type=${options.type}`
		addOptions(options)		
	}

	return (
		<Container>
			<Content>
				<Label>Amount of questions:</Label>
				<Select onChange={handleOptions}  title="amount">
					<Option>3</Option>
					<Option>5</Option>
					<Option>10</Option>
				</Select>

				<Label>Category:</Label>
				<Select onChange={handleOptions}  title="category">
					<Option value="any">Any category</Option>
					{allCategories}
				</Select>

				<Label>Difficulty:</Label>
				<Select onChange={handleOptions}  title="difficulty">
					<Option value="any">Any difficult</Option>
					<Option value="easy">Easy</Option>
					<Option value="medium">Medium</Option>
					<Option value="hard">Hard</Option>
				</Select>

				<Label>Type:</Label>
				<Select onChange={handleOptions}  title="type">
					<Option value="boolean">True/False</Option>
					<Option value="multiple">Multiple Choice</Option>
				</Select>
			</Content>
			<Start onClick={() => send()}>Start</Start>
		</Container>
	)
}

export default Home

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: inherit;

	@media screen and (max-width: 650px) {
     	width: 100%; 
    }
`

const Content = styled.div`
	display: flex;
	flex-direction: column;

	box-shadow: 0 1px 10px 1px rgba(0,0,0,0.4);
	padding: 30px;
	border-radius: 5px;

	@media screen and (max-width: 650px) {
     	width: 90%; 
    }
`

const Option = styled.option`
	font-size: 1em;
`

const Select = styled.select`
	font-size: 1.1em;
	border-radius: 5px;
	padding: 10px;
	color: rgba(0,0,0,0.9);
`

const Label = styled.label`
	font-size: 1.1em;
	margin-bottom: 5px;
	&:not(:first-child) {
		margin-top: 20px;
	}
`

const Start = styled.button`
	align-self: center;
	border-radius: 5px;
	background-color: rgba(212, 84, 4, 0.4);
	padding: 15px 30px;
	font-size: 1em;
	box-shadow: 0 1px 5px 1px rgba(0,0,0,0.5);
	cursor: pointer;
	border: none;
	margin-top: 20px;
`