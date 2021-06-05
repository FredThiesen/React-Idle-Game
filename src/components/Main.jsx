import React, { Component } from "react"
import "./Main.css"
import Investments from "./Investments"

export default class Main extends Component {
	initialState = {
		Kpopers: 0,
		Fanclubs: 0,
		Albuns: 0,
		AlbumRequisito: 40,
		Tour: 0,
		TourRequisito: 2000,
	}

	state = { ...this.initialState }

	KClick = () => {
		this.setState({ Kpopers: this.state.Kpopers + 1 })
	}

	lancarNovoAlbum = () => {
		this.setState({ Albuns: this.state.Albuns + 1 })
		setInterval(() => {
			this.setState({ Kpopers: this.state.Kpopers + 1 })
		}, 1000)
		this.setState({ AlbumRequisito: this.state.AlbumRequisito * 1.4 })
	}
	iniciarNovoTour = () => {
		this.setState({ TourRequisito: this.state.Kpopers * 1.4 })

		const barraProgresso = document.querySelector(".barraProgresso")
		barraProgresso.setAttribute("id", "iniciarProgresso")

		setTimeout(() => {
			this.setState({ Kpopers: Math.round(this.state.Kpopers * 1.2) })
			barraProgresso.setAttribute("id", "")
		}, 20000)
	}

	render() {
		let iniciarTour
		let lancarAlbum
		if (this.state.Kpopers > this.state.AlbumRequisito - 1) {
			lancarAlbum = (
				<div>
					<button
						className="botaoDentro"
						onClick={this.lancarNovoAlbum}
					>
						Lançar álbum
					</button>
				</div>
			)
		}
		if (this.state.Kpopers > this.state.TourRequisito - 1) {
			iniciarTour = (
				<div>
					<button
						className="botaoDentro"
						onClick={this.iniciarNovoTour}
					>
						Novo Tour
					</button>
				</div>
			)
		}

		return (
			<div className="frame">
				<div className="iphone">
					<div className="display">
						<div className="barraProgressoContainer">
							<div className="barraProgresso" />
						</div>

						<h2>Kpopers: {this.state.Kpopers}</h2>
						<h4>Albuns: {this.state.Albuns}</h4>
						{lancarAlbum}
						{iniciarTour}
					</div>
					<button
						className="botaoIphone"
						onClick={this.KClick}
					></button>
				</div>
				<div>
					<Investments data={this.state.Kpopers} />
				</div>
			</div>
		)
	}
}
