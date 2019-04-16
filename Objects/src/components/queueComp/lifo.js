import React from 'react'

class Lifo extends React.Component{
	render(props){
		console.log(this.props.lifoQueue.queue)
		// const reverseQueue = this.props.fifoQueue.queue.reverse()
		// console.log('reverse',reverseQueue)
		const lifoQueue = this.props.lifoQueue.queue.map((item, index) => 
			<div className='fifo' key={item+'-'+index}>
				<p className='listP'>Item: {item}</p>
			</div>
			)

		return(
			<div>
			{lifoQueue}
			</div>
			)
	}

}

export default Lifo