import React from 'react'
import Queue from './queue'
import Fifo from './fifo'
import InputFieldFifo from './inputfieldfifo'
import Lifo from './lifo'

class QueueComp extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			fifoQueueRender: false,
			lifoQueueRender: false,
			fifoValue: '',
			fifoQueue: new Queue(),
			fifoCount: 0,
			lifoQueue: new Queue(),
			lifoCount: 0
		}
	}

	handleClick = (event) =>{
		console.log(event.target.id)
		if(event.target.id === 'fifoQueue'){
			this.setState({
				fifoQueueRender: true
			})
		}
		if(event.target.id === 'lifoQueue'){
			this.setState({
				lifoQueueRender: true
			})
		}
		if(event.target.id === 'addFifo'){
			let count = this.state.fifoCount
			count++
			const tempQueue = this.state.fifoQueue
			tempQueue.addQueue(count)
			this.setState({
				fifoQueue: tempQueue,
				fifoQueueRender: false,
				fifoValue: '',
				fifoCount: count
			})
		}
		if(event.target.id === 'removeFifo'){
			// let count = this.state.fifoCount
			// count--
			const tempQueue = this.state.fifoQueue
			tempQueue.fifo()
			this.setState({
				fifoQueue: tempQueue,
				// fifoCount: count
			})
		}
		if(event.target.id === 'addLifo'){
			let count = this.state.lifoCount
			count++
			const tempQueue = this.state.lifoQueue
			tempQueue.addQueue(count)
			this.setState({
				lifoQueue: tempQueue,
				lifoQueueRender: false,
				lifoValue: '',
				lifoCount: count
			})
		}
		if(event.target.id === 'removeLifo'){
			// let count = this.state.fifoCount
			// count--
			const tempQueue = this.state.lifoQueue
			tempQueue.lifo()
			this.setState({
				lifoQueue: tempQueue,
				// fifoCount: count
			})
		}
	}

	handleChange = (event) =>{
		const {name, value} = event.target
		this.setState({
			[name]: value
		})
	}

	render(){
		return(
			<div>
				<div>
					<h1>FIFO</h1>
					<button id='addFifo' onClick={this.handleClick}>Add To Queue</button>
					<button id='removeFifo' onClick={this.handleClick}>Remove From Queue</button>
					{this.state.fifoQueueRender === true &&
						<InputFieldFifo
							handleChange = {this.handleChange}
							handleClick = {this.handleClick}
						 />
					}
					{this.state.fifoQueue.queue.length > 0 && 
						<Fifo 
							fifoQueue = {this.state.fifoQueue}
						/>
					}
				</div>
				<div>
					<h1>LIFO</h1>
					<button id='addLifo' onClick={this.handleClick}>Add To Queue</button>
					<button id='removeLifo' onClick={this.handleClick}>Remove From Queue</button>
					{this.state.lifoQueueRender === true &&
						<h1>Hello World</h1>
					}
					{this.state.lifoQueue.queue.length > 0 && 
						<Lifo 
							lifoQueue = {this.state.lifoQueue}
						/>
					}
				</div>
			</div>
			)
	}
}

export default QueueComp