import React from 'react'

class NodeSummary extends React.Component{
	render(){
		return(
			<div className='nodeDisplay'>
				<div className='currentNode'>
					<h1 className='listP'>Current Node:</h1>
					<h2 className='listP'>{this.props.linkedList.currentNode.subject}</h2>
					<h2 className='listP'>{this.props.linkedList.currentNode.amount}</h2>
				</div>
				<div>
					<button id='first' onClick={this.props.handleClick} className='cityButton'>First Node</button>
					<button id='last' onClick={this.props.handleClick} className='cityButton'>Last Node</button>
					<button id='previous' onClick={this.props.handleClick} className='cityButton'>Previous Node</button>
					<button id='next' onClick={this.props.handleClick} className='cityButton'>Next Node</button>
					<button id='delete' onClick={this.props.handleClick} className='cityButton'>Delete Node</button>
				</div>
			</div>

			)
	}
}

export default NodeSummary