class ConverterFromTo extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			valueIn: 0,
			selFrom : 1,
			selTO : 1,
		}
	}

	render(){
		console.log(this.state.valueIn);
		return (<div className='fromTo'>

			<select className="from" onChange={(e) => this.setState({selFrom:this.props.rates[e.target.value].toFixed(4)})}>
				{this.props.option.map(opt => <option>{opt}</option>)}</select>

			<input className="inpFrom" type={"number"} onChange={(e) => this.setState({
				valueIn: e.target.value})}/>
			<input type="text" value={(this.state.selTO / this.state.selFrom * this.state.valueIn).toFixed(2)}/>

			<select  className="to"  onChange={(e) => this.setState({selTO:this.props.rates[e.target.value].toFixed(4)})}>
				{this.props.option.map(opt => <option>{opt}</option>)}</select>

		</div>);
	}

}