import React from 'react'
import CreateNode from './listComp/createnode'
import NodeSummary from './listComp/nodesummary'
import LinkedList from './listComp/linkedlist'
import './listComp/listcomp.css'

class ListComp extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			createNode: false,
			nodeSubject: '',
			nodeAmount: '',
			linkedList: new LinkedList(),
		}
	}

	handleClick = (event) => {
		// console.log(event.target.id)
		if(event.target.id === 'createNode'){
			this.setState({
				createNode: true,
			})
		}
		if(event.target.id === 'mask'){
			this.setState({
				createNode: false,
			})
		}
		if(event.target.id === 'addNode'){
			const tempList = this.state.linkedList
			tempList.insertNode(this.state.nodeSubject, this.state.nodeAmount)
			this.setState({
				linkedList:  tempList,
				createNode: false
			})
		}
		if(event.target.id === 'first'){
			const tempList = this.state.linkedList
			tempList.getFirst()
			this.setState({
				linkedList: tempList
			})
		}
		if(event.target.id === 'last'){
			const tempList = this.state.linkedList
			tempList.getLast()
			this.setState({
				linkedList: tempList
			})
		}
		if(event.target.id === 'next'){
			const tempList = this.state.linkedList
			tempList.getNext()
			this.setState({
				linkedList: tempList
			})
		}
		if(event.target.id === 'previous'){
			const tempList = this.state.linkedList
			tempList.getPrevious()
			this.setState({
				linkedList: tempList
			})
		}
		if(event.target.id === 'delete'){
			const tempList = this.state.linkedList
			tempList.deleteNode()
			this.setState({
				linkedList: tempList
			})
		}
	}

	handleChange = (event) => {
		let {id, value} = event.target
		this.setState({
			[id]: value
		})
	}

	render(){
		return(
				<div className='Comp'>
					<button className='cityButton' id='createNode' onClick={this.handleClick}>Insert Node</button>
					{this.state.createNode === true &&
						<CreateNode
							handleClick = {this.handleClick}
							handleChange = {this.handleChange}
						 />
					}
					{this.state.linkedList.head != null &&
						<NodeSummary
							linkedList = {this.state.linkedList}
							handleClick = {this.handleClick}
						 />
					}
				</div>
			)
	}
}


export default ListComp