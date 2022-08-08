import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
	return (
		<Container>
			<Title href="!#">Web Page</Title>
			<ListOptions>
				<Option href="!#">Profile</Option>
				<Option href="!#">Settings</Option>
			</ListOptions>
		</Container>
	)
}

export default Navbar

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 15px 30px;
`

const Title = styled.a`
	color: #333;
	text-decoration: none;
	font-size: 2em;
`

const ListOptions = styled.nav`
	width: 20%;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
`

const Option = styled(Title)`
	font-size: 1em;
	text-align: center;
	padding: 10px;
	flex-grow: 1;
	border-radius: 5px;

	&:hover {
		background-color: rgba(0,0,0,0.1);
	}
`