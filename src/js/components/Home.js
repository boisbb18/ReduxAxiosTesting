import React from "react"
import ReactDOM from "react-dom"
import {connect} from 'react-redux'
import axios from 'axios'
import {addInputs, subtractInputs, getDevelopers} from '../actions/calculatorActions'
const mapStateToProps = (state) => ({
  output:state.output
})


export class Home extends React.Component{


	constructor(props) {
		super(props);
		this.handleRequest = this.handleRequest.bind(this)
	}

	handleRequest() {
		this.props.dispatch(getDevelopers());
		// axios.get('/users')
		// 	.then(res => {
		// 		console.log('Res ----> ', res)
		// 	})
		// 	.catch(err => console.log('Err ----> ', err))
	}

	render(){
		let IntegerA,IntegerB,IntegerC,IntegerD;

		return(
			<div className="container">
				<h2>using React and Redux</h2>
				<div>Input 1: 
					<input type="text" placeholder="Input 1" ref="input1"></input>
				</div>
				<div>Input 2 :
					<input type="text" placeholder="Input 2" ref="input2"></input>
				</div>
				<div>Output :
					<input type="text" placeholder="Output" readOnly ref="output" value={this.props.output}></input>
				</div>
				<div>
					<button id="add" onClick={ () => {
						IntegerA = parseInt(ReactDOM.findDOMNode(this.refs.input1).value)
						IntegerB = parseInt(ReactDOM.findDOMNode(this.refs.input2).value)
						IntegerC = IntegerA+IntegerB

						// console.log('A ' + IntegerA + ' B ' +IntegerB+ ' C ' +IntegerC)
						
						// ReactDOM.findDOMNode(this.refs.output).value = this.props.output
						this.props.dispatch(addInputs(IntegerC))

					  }
					}>Add</button>
					
					<button id="subtract" onClick={ () => {
						IntegerA = parseInt(ReactDOM.findDOMNode(this.refs.input1).value)
						IntegerB = parseInt(ReactDOM.findDOMNode(this.refs.input2).value)
						IntegerC = IntegerA-IntegerB

						// console.log('A ' + IntegerA + ' B ' +IntegerB+ ' C ' +IntegerC)
						
						// ReactDOM.findDOMNode(this.refs.output).value = this.props.output
						this.props.dispatch(subtractInputs(IntegerC))
					  }
					}>Subtract</button>
				</div>

				<hr/>
				<div>
					<button onClick={this.handleRequest}>Press For Request</button>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps)(Home)