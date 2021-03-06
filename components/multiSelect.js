class MultiSelect extends React.Component {
	render(){
		return (<div>
			<select className={'multiSelect'} multiple
					onChange={e => this.props.getValue([...e.target.options].filter(opt => opt.selected).map(opt => opt.value))}>
				{this.props.options.map(opt => <option key={opt}>{opt}</option>)}
			</select>
		</div>);
	}
}