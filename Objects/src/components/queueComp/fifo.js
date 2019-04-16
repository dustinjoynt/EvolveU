import React from 'react'

class Fifo extends React.Component{
	render(props){
		console.log(this.props.fifoQueue.queue)
		// const reverseQueue = this.props.fifoQueue.queue.reverse()
		// console.log('reverse',reverseQueue)
		const fifoQueue = this.props.fifoQueue.queue.map((item, index) => 
			<div className='fifo' key={item+'-'+index}>
				<p>Item: {item}</p>
			</div>
			)

		return(
			<div>
			{fifoQueue}
			<h1>Hello World</h1>
			</div>
			)
	}

}

export default Fifo