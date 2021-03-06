class InputTD extends React.Component {
	render(){
		return (<div>
			<input className={"inpNum"} type={"number"} value={this.props.value}
				   onChange={(e) => this.props.inpOnChange(e)}
			/>
		</div>);
	}
}

