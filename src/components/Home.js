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
		return <option value={item.id}>{item.name}</option>
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
				<label>Amount of questions:</label>
				<select onChange={handleOptions}  title="amount">
					<option>3</option>
					<option>5</option>
					<option>10</option>
				</select>

				<label>Category:</label>
				<select onChange={handleOptions}  title="category">
					<option value="any">Any category</option>
					{allCategories}
				</select>

				<label>Difficulty:</label>
				<select onChange={handleOptions}  title="difficulty">
					<option value="any">Any difficult</option>
					<option value="easy">Easy</option>
					<option value="medium">Medium</option>
					<option value="hard">Hard</option>
				</select>

				<label>Type:</label>
				<select onChange={handleOptions}  title="type">
					<option value="boolean">True/False</option>
					<option value="multiple">Multiple Choice</option>
				</select>
			</Content>
			<button onClick={() => console.log(send())}>jj</button>
		</Container>
	)
}

export default Home

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: inherit;
`

const Content = styled.div`
	border: 1px solid #333;

	display: flex;
	flex-direction: column;
`