import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import profile from '../assets/gris.jpg'

const Card = ({info}) => {
	const [totalVotes, setTotalVotes] = useState(0)

	useEffect(() => {
		info.options.map(item => setTotalVotes(prev => prev + item.votes.length))
		return ()=> setTotalVotes(0)
	}, [info.options])

	const votesOptions = info.options.map(item => {	
		const vo = item.votes.length
		return <Vote total={(vo * 100) / totalVotes}>{item.text}</Vote>
	})

	return (
		<Container>
			<Profile>
				<a href="!#"><ProfileImage src={profile} /></a>
				<ProfileName href="!#">John Doe</ProfileName>
			</Profile>

			<p>{info.description}</p>

			<Votes>
				{votesOptions}
			</Votes>
			<p>Total Votes: {totalVotes}</p>
			<Buttons>
				<Button>Like</Button>
				<Button>Dislike</Button>
				<Button>Share</Button>
			</Buttons>
		</Container>
	)
}

export default Card


const Container = styled.div`
	
	background-color: rgba(255, 255, 255);
	border-radius: 5px;
	padding: 10px 20px;
	margin-bottom: 20px;
	box-shadow:
      0 1px 1px hsl(0deg 0% 0% / 0.075),
      0 2px 2px hsl(0deg 0% 0% / 0.075),
      0 4px 4px hsl(0deg 0% 0% / 0.075),
      0 8px 8px hsl(0deg 0% 0% / 0.075),
      0 16px 16px hsl(0deg 0% 0% / 0.075)
    ;
` 

const Profile = styled.div`
	display: flex;
	align-items: center;
`

const ProfileImage = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
`

const ProfileName = styled.a`
	text-decoration: none;
	color: #333;
	margin-left: 15px;
	font-size: 1.2em;

	&:hover {
		text-decoration: underline;
	}
`

const Votes = styled.div`
	margin: 10px 0;	
`

const Vote = styled.div`
	//border: 1px solid rgba(0,0,0,0.2);
	border-radius: 5px;
	padding: 10px;
	background: -moz-linear-gradient(90deg, rgba(0,0,0, 0.2) ${props => props.total}%, #ffffff 0%);
  	background: -webkit-linear-gradient(90deg, rgba(0,0,0, 0.2) ${props => props.total}%, #ffffff 0%);
	background: linear-gradient(90deg, rgba(0,0,0, 0.2) ${props => props.total}%, #ffffff 0%);
	
	&:first-child {
		margin-bottom: 10px;
	}

	&:hover {
		cursor: pointer;
	}
`

const Buttons = styled.div`
	display: flex;
`

const Button = styled.button`
	flex-grow: 1;
	padding: 10px;
	font-size: 1em;
	border-radius:5px;
	background-color: transparent;
	border: none;

	&:hover {
		background-color: rgba(0,0,0,0.2);
		cursor: pointer;
	}
`