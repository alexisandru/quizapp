import React from 'react'
import styled from 'styled-components'

const Header = () => {
	return (
		<Container>
			<h1>Quiz App</h1>
		</Container>
	)
}


export default Header


const Container = styled.div`
	box-shadow: 0 1px 5px 1px rgba(0,0,0,0.2);

	padding: 20px;
	font-size: 1em;
	text-align: center;
`