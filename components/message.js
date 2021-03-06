/*class MessageDiv extends React.Component {
	render(){
		return (<div>
			{this.props.text}
		</div>);
	}
}*/

function MessageDiv(props){
	return <div className={"message"}>{props.text}</div>
}