import React, { Component } from 'react';
import { ButtonToolbar, ButtonGroup, DropdownButton, MenuItem, Button } from 'react-bootstrap';
import jagShield from '../images/Jags-shield-logo-white-text.png';
import jagPaw from '../images/animal-paw-print_green.svg';
import roar from '../images/jaguar.mp3';

class Header extends Component {
	constructor(props) {
		super(props);
		this.roar = this.roar.bind(this);
		this.goHome = this.goHome.bind(this);
		this.goAway = this.goAway.bind(this);

		this.state = {
			homeOpacity: 0,
			imageOpacity: 1
		}
	}

	goHome() {
		this.setState({
			homeOpacity: 1,
			imageOpacity: 0.1
		})
	}

	goAway() {
		this.setState({
			homeOpacity: 0,
			imageOpacity: 1
		})
	}

	roar() {
		const audioElement = document.createElement('audio');
		audioElement.setAttribute('src', roar);
		audioElement.setAttribute('volume', 1);
		audioElement.setAttribute('autoplay', 'autoplay');
		document.body.appendChild(audioElement);
		window.setTimeout(() => {
			document.body.removeChild(audioElement);
		}, 2000);
	}

	renderDYBAInfoDropdown(noCaret = false) {
		return (
			<DropdownButton
				title="DYBA INFO"
				id="dyba-info"
				noCaret={noCaret}
			>
				<MenuItem href="/team-placement">TEAM PLACEMENT</MenuItem>
				<MenuItem href="/team-placement-faq">TEAM PLACEMENT FAQ</MenuItem>
				<MenuItem href="practice-schedule">DHS PRACTICE SCHEDULE</MenuItem>
				<MenuItem href="/fees">DYBA FEES</MenuItem>
				<MenuItem divider></MenuItem>
				<MenuItem header>BOYS</MenuItem>
				<MenuItem href="/team-rosters-boys">TEAM ROSTERS</MenuItem>
				<MenuItem divider></MenuItem>
				<MenuItem header>GIRLS</MenuItem>
				<MenuItem href="/team-rosters-girls">TEAM ROSTERS</MenuItem>
			</DropdownButton>
		)
	}

	renderLeagueInfoDropdown(noCaret = false) {
		return (
			<DropdownButton
				title="LEAGUE INFO"
				id="league-info"
				noCaret={noCaret}
			>
				<MenuItem href="/leagues/k-1st">K THRU 1ST GRADE</MenuItem>
				<MenuItem href="/leagues/2nd-3rd">2ND THRU 3RD GRADE</MenuItem>
				<MenuItem href="/leagues/4th">4TH GRADE</MenuItem>
				<MenuItem href="/leagues/5th-8th">5TH THRU 8TH GRADE</MenuItem>
			</DropdownButton>
		)
	}

	renderPaw() {
		return (
			<li className="nav-paw">
				<img src={jagPaw} alt="Jag Paw" />
			</li>
		)
	}

	render() {
		return (
			<header className="dyba-header">
				<div className="dyba-background">
					<div className="row">
						<div className="col-xs-1"></div>
						<a href="/" className="logo-container text-center hidden-xs col-sm-2" onMouseEnter={this.goHome} onMouseLeave={this.goAway}>
							<span className="home-hidden" style={{ opacity: this.state.homeOpacity }}>Home</span>
							<img src={jagShield} className="nav-logo" alt="logo" style={{ opacity: this.state.imageOpacity }} />
						</a>
						<div className="title-container col-xs-10 col-sm-8">
							<div className="dyba-title">D'EVELYN YOUTH BASKETBALL</div>
						</div>
						<div className="col-xs-1"></div>
					</div>
					<ButtonToolbar className="nav-bar text-center">

					{/* Desktop dropdown */}
						<ButtonGroup className="hidden-xs col-sm-12">
							<Button href="/register">REGISTRATION</Button>
							<li className="nav-paw roar">
								<button onClick={this.roar}>
									<img src={jagPaw} alt="Jag Paw" />
								</button>
							</li>
							{this.renderDYBAInfoDropdown(true)}
							{this.renderPaw()}
							{this.renderLeagueInfoDropdown(true)}
							{this.renderPaw()}
							<DropdownButton
								title="PROGRAMS"
								id="programs"
								noCaret
							>
								<MenuItem href="/summer-camp">2018 SUMMER CAMPS</MenuItem>
							</DropdownButton>
							{this.renderPaw()}
							<DropdownButton
								title="COACHES"
								id="coaches"
								noCaret
							>
								<MenuItem href="/dhs-coaches">DHS COACHING STAFF</MenuItem>
							</DropdownButton>
							{this.renderPaw()}
							<Button href="/email-list">EMAIL LIST</Button>
						</ButtonGroup>

					{/* Mobile dropdown */}
						<ButtonGroup className="col-xs-12 hidden-sm hidden-md hidden-lg">
							<DropdownButton
								title="MENU"
								id="menu"
							>
								<MenuItem href="/">HOME</MenuItem>
								<MenuItem href="/register">REGISTRATION</MenuItem>
								{this.renderDYBAInfoDropdown()}
								{this.renderLeagueInfoDropdown()}
								<MenuItem href="/summer-camp">2018 SUMMER CAMPS</MenuItem>
								<MenuItem href="/dhs-coaches" >DHS COACHING STAFF</MenuItem>
								<MenuItem href="/email-list">EMAIL LIST</MenuItem>
							</DropdownButton>
						</ButtonGroup>
					</ButtonToolbar>
				</div>
			</header>
		);
	}
}

export default Header;
