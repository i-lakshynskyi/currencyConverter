class CrossCourseTable extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			inpValue : 1,
		}
	}
handleOnChange = (e) => {
		this.setState({
			inpValue: e.target.value
		})
}
	render(){
		return (<div>
			<table>
				<tr>
					<td  style={{backgroundColor: "#ffdc64"}}>
						<InputTD value ={this.state.inpValue} inpOnChange={this.handleOnChange}  />
					</td>
					{this.props.currenciesList.map(curr1 => <td key={curr1}>{curr1}</td>)}
				</tr>
				{this.props.currenciesList.map(curr1 => <tr key={curr1}>
					<td key={""}>{curr1}</td>
					{this.props.currenciesList.map(curr2 => {
						if(curr1 === curr2) {
							return <td className={"orange"}
									   key={curr2}>{(this.props.rates[curr1] / this.props.rates[curr2] * this.state.inpValue).toFixed(4)}</td>
						}
						return <td
							key={curr2}>{(this.props.rates[curr1] / this.props.rates[curr2] * this.state.inpValue).toFixed(4)}</td>
					})}
				</tr>)}
			</table>
		</div>);
	}
}

