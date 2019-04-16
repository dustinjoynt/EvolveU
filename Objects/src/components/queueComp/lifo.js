import React from 'react'

class Lifo extends React.Component{
	render(props){
		console.log(this.props.lifoQueue.queue)
		// const reverseQueue = this.props.fifoQueue.queue.reverse()
		// console.log('reverse',reverseQueue)
		const lifoQueue = this.props.lifoQueue.queue.map((item, index) => 
			<div className='fifo' key={item+'-'+index}>
				<p>Item: {item}</p>
			</div>
			)

		return(
			<div>
			{lifoQueue}
			<h1>Hello World</h1>
			</div>
			)
	}

}

export default Lifo