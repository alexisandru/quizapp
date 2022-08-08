import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import Card from './Card'
import data from './data.json'

const Publications = () => {
	const [cards, setCards] = useState([])
	useEffect(() => {
		setCards([...data.publications]);
	}, [])



	const post = cards.map(item => {
		return <Card  key={item.id} info={item} votes={item.options}/>
	})

	return (
		<Container>
			{post}			
		</Container>
	)
}

export default Publications

const Container = styled.div`
	width: 50%;
	padding: 0 30px;
	background-color: rgba(0,0,0,0.04);
`