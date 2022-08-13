import React from 'react'

import Card from './Card'

const Cards = ({allQuestions}) => {

	const cards = allQuestions.map((item, i) => {
    return (
      <Card key={i} pregunta={item} />
    )
  }) 

  console.log(allQuestions)

	return (
		<div>
			<p>{allQuestions.length}</p>
			{cards}
		</div>
	)
}

export default Cards