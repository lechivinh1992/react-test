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
	
	// signOrder(id) {
		// let ids = [
		// { 'orderId': id }
		// ];
		// console.log(ids)
		// fetch('example.com/api/orders/unsigned', {
			// method: 'POST',
			// headers: {
				// 'Content-Type': 'application/json'
			// },
			// body: JSON.stringify(ids)
		// })
		
	// }
	
	componentDidMount() {
		this.loadData()
	}
	
  render() {
    return <ul>
			<li className='title'>
				<span>Sales Order</span>
				<span>Dealer Name</span>
				<span>Product</span>
				<span>Signature</span>
			</li>
      { this.state.data.map((item, i) => {
				let statusClass = 'sign'
				if (item.signStatus === 'Out for signature') statusClass += ' sign-complete'
				let boundClick = this.signOrder.bind(this, i)
				return <li className='item'>
					<span>{item.name}</span>
					<span>{item.password}</span>
					<span><span className={statusClass} onClick={() => this.signOrder(item.orderID)}>{item.signStatus}</span></span>
				</li>
        })
      }
    </ul>;
  }
}
			
ReactDOM.render(<UnsignedOrders />, document.getElementById('root'));