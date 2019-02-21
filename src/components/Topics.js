import React, {Component} from 'react'
import {
	Link,
	Route
}from 'react-router-dom'

class Topic extends Component {
	render(){	
		console.log("Props to topics", this.props)
	    return <h3> {this.props.match.params.nnnn} </h3>
	}
	
}

function Topics (props){
	console.log("Match props", props.match)
	return ( 
		<div>
			<h2>Topics</h2>
			<ul>
				<li>
					<Link to={`${props.match.url}/rendering`}>Rendering</Link>
				</li>
				<li>
					<Link to={`${props.match.url}/components`}>Components</Link>
				</li>
				<li>
					<Link to={`${props.match.url}/props-v-state`}>Prop-v-state</Link>
				</li>
			</ul>

			<hr/>
			<Route path={`${props.match.path}/:topicId/:nnnn`} component={Topic}/>
		</div>
		)
}

export default Topics 

