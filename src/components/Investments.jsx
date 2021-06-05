import React, { Component } from "react"
import "./Investments.css"

export default class Investments extends Component {
	initialState = {
		Dolars: 0,
		Stock: [],
		StockValue: [],
		StockQuantity: [],
		StockPL: [],
		Risk: [],
	}
	state = { ...this.initialState }

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
		setTimeout(this.UpdateStocks(), 1)
	}

	render() {
		const Kpopers = this.props.data
		let InvestmentBoard
		if (Kpopers > 10) {
			InvestmentBoard = (
				<div className="laptop">
					<div className="board">
						<div className="board-row">
							<div className="board-head">
								Wallet:
								<div className="board-row">
									<h4>Available:</h4>
									<h5>${this.state.Dolars}</h5>
									<h5>Invested:</h5>
									<h5>${this.state.Dolars}</h5>
								</div>
							</div>
						</div>
					</div>
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
								<button className="botaoInvestBuy">Buy</button>
								<button className="botaoInvestSell">
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
								<button className="botaoInvestBuy">Buy</button>
								<button className="botaoInvestSell">
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
								<button className="botaoInvestBuy">Buy</button>
								<button className="botaoInvestSell">
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
								<button className="botaoInvestBuy">Buy</button>
								<button className="botaoInvestSell">
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
								<button className="botaoInvestBuy">Buy</button>
								<button className="botaoInvestSell">
									Sell
								</button>
							</div>
						</div>
					</div>
				</div>
			)
		}

		return <div>{InvestmentBoard}</div>
	}
}
