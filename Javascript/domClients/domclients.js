const data = 
	{clients:
		[
			{name:"Jane", balance:10},
			{name:"Liam", balance:1000},
			{name:"Emma", balance:1330},
			{name:"Olivia", balance:310},
			{name:"Noah", balance:503},
			{name:"William", balance:520},
			{name:"Benjamin", balance:150},
		]
	}

function deleteF(event){
	const card = event.target.parentNode
	document.getElementById('cardContainer').removeChild(card)

}

	data.clients.forEach(client => {
		const name = client.name
		const balance = client.balance

		const clientCard = document.createElement('div')
		clientCard.className = 'clientCard'

		const clientHeader = document.createElement('h2')
		const cardHeader = document.createTextNode(`${name} ${balance}`)
		clientHeader.appendChild(cardHeader)
		clientCard.appendChild(clientHeader)

		const deleteButton = document.createElement('button')
		deleteButton.onclick = deleteF
		const deleteTxt = document.createTextNode('Delete')
		deleteButton.appendChild(deleteTxt)
		clientCard.appendChild(deleteButton)

		const cardContainer = document.getElementById('cardContainer')
		cardContainer.appendChild(clientCard)
	})


