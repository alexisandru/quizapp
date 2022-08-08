import React from 'react'

import styled from 'styled-components'

import Navbar from './Navbar'
import SidebarA from './SidebarA'
import SidebarB from './SidebarB'
import Publications from './Publications'

const Home = () => {
	return (
		<Container>
			<Navbar />
			<SidebarA />
			<Publications />
			<SidebarB />
		</Container>
	)
}

export default Home


const Container = styled.div`
	display:flex;
	flex-wrap: wrap;
	flex-direction: row;
	width: 100%;
	justify-content: center;
`