class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			multiSelectValue: "",
			rates: {},
			currencies: [],
			currenciesList: ['USD','EUR','ILS','UAH','RUB'],
		}
	}

	render(){
		return (<div>
			<ConverterFromTo option ={this.state.currencies} rates = {this.state.rates} />
			<MessageDiv text={this.state.multiSelectValue}/>
			<MultiSelect options={this.state.currencies}
						 getValue={arrSTR => this.setState({
							 multiSelectValue: "[ " + arrSTR.join(", ") + " ]", currenciesList: arrSTR
						 })}/>
			<CrossCourseTable currenciesList={this.state.currenciesList} rates ={this.state.rates} inpValue = {this.state.inpValue}/>
		</div>);
	}


	componentDidMount(){
		fetch("https://v6.exchangerate-api.com/v6/fb267a01a39c56bf7667b3a0/latest/USD")
			.then(result => result.json())
			.then(data => this.setState({rates: data.conversion_rates, currencies: Object.keys(data.conversion_rates)}))
	}
}

