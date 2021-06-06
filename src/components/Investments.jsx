import React, { Component } from "react"
import "./Investments.css"

export default class Investments extends Component {
	initialState = {
		Dolars: 100000,
		DolarsInvested: 0,
		Stock: [],
		StockValue: [],
		StockQuantity: [0, 0, 0, 0, 0],
		StockPL: [],
		Risk: [],
	}
	constructor(props) {
		super(props)
		this.state = {
			...this.initialState,
		}
		this.HandleBuy = this.HandleBuy.bind(this)
	}
	HandleBuy(stockIndex) {
		if (100 * this.state.StockValue[stockIndex] <= this.state.Dolars) {
			let StockQuantity = [...this.state.StockQuantity]

			let newQuantity = StockQuantity[stockIndex]

			newQuantity = this.state.StockQuantity[stockIndex] + 100

			StockQuantity[stockIndex] = newQuantity

			this.setState({
				StockQuantity,
				Dolars:
					this.state.Dolars - this.state.StockValue[stockIndex] * 100,
				DolarsInvested:
					this.state.DolarsInvested +
					this.state.StockValue[stockIndex] * 100,
			})
		}
	}
	HandleSell(stockIndex) {
		if (this.state.StockQuantity[stockIndex] > 0) {
			let StockQuantity = [...this.state.StockQuantity]

			let newQuantity = StockQuantity[stockIndex]

			newQuantity = this.state.StockQuantity[stockIndex] - 100

			StockQuantity[stockIndex] = newQuantity

			this.setState({
				StockQuantity,
				Dolars:
					this.state.Dolars + this.state.StockValue[stockIndex] * 100,
				DolarsInvested:
					this.state.DolarsInvested -
					this.state.StockValue[stockIndex] * 100,
			})
		}
	}

	Buy() {}
	GenerateStockName() {
		var result = []
		var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
		var charactersLength = characters.length
		for (var i = 0; i < 3; i++) {
			result.push(
				characters.charAt(Math.floor(Math.random() * charactersLength))
			)
		}
		return result.join("")
	}
	HandleRisk() {
		this.setState({ Risk: ["50", "150"] })
	}
	GenerateStockValue() {
		// let min = this.state.Risk[0]
		// let max = this.state.Risk[1]
		// min = parseFloat(min)
		// max = parseFloat(max)
		return Math.round(Math.random() * 1000)
		//return Math.random() * (max - min) + min
	}
	UpdateStocks() {
		this.setState({
			Stock: [
				this.GenerateStockName(),
				this.GenerateStockName(),
				this.GenerateStockName(),
				this.GenerateStockName(),
				this.GenerateStockName(),
			],
			StockValue: [
				this.GenerateStockValue(),
				this.GenerateStockValue(),
				this.GenerateStockValue(),
				this.GenerateStockValue(),
				this.GenerateStockValue(),
			],
		})
	}

	componentDidMount() {
		this.HandleRisk()
		this.UpdateStocks()
	}

	render() {
		const Kpopers = this.props.data
		let InvestmentBoard
		if (Kpopers > 10) {
			InvestmentBoard = (
				//<div className="laptop">
				<div>
					<div className="board">
						<div className="board-row">
							<div className="board-head">Wallet:</div>
							<div className="board-row">
								<div className="board-head">
									<h4>Available:</h4>
								</div>
								<div className="board-head">
									<h4>Invested:</h4>
								</div>
							</div>
							<div className="board-row">
								<div className="board-cell">
									<h5>${this.state.Dolars}</h5>
								</div>
								<div className="board-cell">
									<h5>${this.state.DolarsInvested}</h5>
								</div>
							</div>
						</div>
					</div>
					<div className="board">
						<div className="board">
							<div className="board-row">
								<div className="board-head">Stock</div>
								<div className="board-head">Price</div>
								<div className="board-head">Quantity</div>
								<div className="board-head">P/L</div>
								<div className="board-head">Operate</div>
							</div>
							<div className="board-row">
								<div className="board-cell">
									{this.state.Stock[0]}
								</div>
								<div className="board-cell">
									{this.state.StockValue[0]}
								</div>
								<div className="board-cell">
									{this.state.StockQuantity[0]}
								</div>
								<div className="board-cell">
									{this.state.StockPL[0]}
								</div>
								<div className="board-cell">
									<button
										className="botaoInvestBuy"
										onClick={() => this.HandleBuy(0)}
									>
										Buy
									</button>
									<button
										className="botaoInvestSell"
										onClick={() => this.HandleSell(0)}
									>
										Sell
									</button>
								</div>
							</div>
							<div className="board-row">
								<div className="board-cell">
									{this.state.Stock[1]}
								</div>
								<div className="board-cell">
									{this.state.StockValue[1]}
								</div>
								<div className="board-cell">
									{this.state.StockQuantity[1]}
								</div>
								<div className="board-cell">
									{this.state.StockPL[1]}
								</div>
								<div className="board-cell">
									<button
										className="botaoInvestBuy"
										onClick={() => this.HandleBuy(1)}
									>
										Buy
									</button>
									<button
										className="botaoInvestSell"
										onClick={() => this.HandleSell(1)}
									>
										Sell
									</button>
								</div>
							</div>
							<div className="board-row">
								<div className="board-cell">
									{this.state.Stock[2]}
								</div>
								<div className="board-cell">
									{this.state.StockValue[2]}
								</div>
								<div className="board-cell">
									{this.state.StockQuantity[2]}
								</div>
								<div className="board-cell">
									{this.state.StockPL[2]}
								</div>
								<div className="board-cell">
									<button
										className="botaoInvestBuy"
										onClick={() => this.HandleBuy(2)}
									>
										Buy
									</button>
									<button
										className="botaoInvestSell"
										onClick={() => this.HandleSell(2)}
									>
										Sell
									</button>
								</div>
							</div>
							<div className="board-row">
								<div className="board-cell">
									{this.state.Stock[3]}
								</div>
								<div className="board-cell">
									{this.state.StockValue[3]}
								</div>
								<div className="board-cell">
									{this.state.StockQuantity[3]}
								</div>
								<div className="board-cell">
									{this.state.StockPL[3]}
								</div>
								<div className="board-cell">
									<button
										className="botaoInvestBuy"
										onClick={() => this.HandleBuy(3)}
									>
										Buy
									</button>
									<button
										className="botaoInvestSell"
										onClick={() => this.HandleSell(3)}
									>
										Sell
									</button>
								</div>
							</div>
							<div className="board-row">
								<div className="board-cell">
									{this.state.Stock[4]}
								</div>
								<div className="board-cell">
									{this.state.StockValue[4]}
								</div>
								<div className="board-cell">
									{this.state.StockQuantity[4]}
								</div>
								<div className="board-cell">
									{this.state.StockPL[4]}
								</div>
								<div className="board-cell">
									<button
										className="botaoInvestBuy"
										onClick={() => this.HandleBuy(4)}
									>
										Buy
									</button>
									<button
										className="botaoInvestSell"
										onClick={() => this.HandleSell(4)}
									>
										Sell
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
		}

		return <div>{InvestmentBoard}</div>
	}
}
