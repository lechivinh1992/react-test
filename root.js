class UnsignedOrders extends React.Component {
	constructor(props) {
		super(props)
		this.state = { data: [] }
	}
	
	loadData() {
		fetch('https://raw.githubusercontent.com/lechivinh1992/keyword-search/f9738c31c4fd74fbbd7932eb3719f11a6978db15/loginInfo.json')
			.then(response => response.json())
			.then(data => {
				this.setState({data: data.user })
		})
			.catch(err => console.error(this.props.url, err.toString()))
	}
	
	componentDidMount() {
		this.loadData()
	}
	
  render() {
    return 
      { this.state.data.map((item, i) => {
				let statusClass = 'sign'
				if (item.signStatus === 'Out for signature') statusClass += ' sign-complete'
				let boundClick = this.signOrder.bind(this, i)
				return <tr className='item'>
					<td>{item.name}</td>
					<td>{item.password}</td>
					<td className={statusClass} onClick={() => this.signOrder(item.orderID)}>{item.signStatus}</td>
				</tr>
        })
      };
  }
}
			
ReactDOM.render(<UnsignedOrders />, document.getElementById('root'));
