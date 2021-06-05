import React, { Component } from "react"
import "./Investments.css"

export default class Investments extends Component {
	initialState = {
		Dolars: 0,
		Stock: [],
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
	UpdateStockNames() {
		this.setState({
			Stock: [
				this.GenerateStockName(),
				this.GenerateStockName(),
				this.GenerateStockName(),
				this.GenerateStockName(),
				this.GenerateStockName(),
			],
		})
	}

	componentDidMount() {
		this.UpdateStockNames()
	}

	render() {
		const Kpopers = this.props.data
		let InvestmentBoard
		if (Kpopers > 10) {
			InvestmentBoard = (
				<div className="laptop">
					<div className="board">
						<div className="board-row">
							<div className="board-head">Wallet</div>
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
							<div className="board-cell">22222</div>
							<div className="board-cell">22222</div>
							<div className="board-cell">33333</div>
							<div className="board-cell"></div>
						</div>
						<div className="board-row">
							<div className="board-cell">
								{this.state.Stock[1]}
							</div>
							<div className="board-cell">22222</div>
							<div className="board-cell">22222</div>
							<div className="board-cell">33333</div>
							<div className="board-cell"></div>
						</div>
						<div className="board-row">
							<div className="board-cell">
								{this.state.Stock[2]}
							</div>
							<div className="board-cell">22222</div>
							<div className="board-cell">22222</div>
							<div className="board-cell">33333</div>
							<div className="board-cell"></div>
						</div>
						<div className="board-row">
							<div className="board-cell">
								{this.state.Stock[3]}
							</div>
							<div className="board-cell">22222</div>
							<div className="board-cell">22222</div>
							<div className="board-cell">33333</div>
							<div className="board-cell"></div>
						</div>
						<div className="board-row">
							<div className="board-cell">
								{this.state.Stock[4]}
							</div>
							<div className="board-cell">22222</div>
							<div className="board-cell">22222</div>
							<div className="board-cell">33333</div>
							<div className="board-cell"></div>
						</div>
					</div>
				</div>
			)
		}

		return <div>{InvestmentBoard}</div>
	}
}
