import React, { Component } from "react";
import { ButtonToolbar, ButtonGroup, DropdownButton, MenuItem, Button } from 'react-bootstrap';
import MainContainer from '../common/MainContainer';

const DYBAFeesData = {
	feeType: ['Fee Type', 'Team Placement', 'Club', 'Jeffco Conference', 'Uniform', 'Gold Crown',
		'Gold Crown Gym Usage', {data: 'Coach', sup: 2}, {data: 'DHS Gym Usage', sup: 2}, {data: 'Total Fees', class: 'totals-row'}
	],
	boysA: [{title1: 'Boys', title2: 'A Team'}, '$15', '$50', '$160', {data: '$90', sup: 2, data2: '/$25'}, {data: '$150', sup: 3},
		{data: '$20', sup: 3}, '$100', '$130', {data: '$715', class: 'totals-row'}
	],
	girlsA: [{title1: 'Girls', title2: 'A Team'}, '$15', '$50', '-', '$35', '$150', '$20', '$100', '$130', {data: '$500', class: 'totals-row'}],
	boysB: [{title1: 'Boys', title2: 'B Team'}, '$15', '$50', {data: '$225', sup: 1}, '$25', '-', '-', '$50', '-', {data: '$365', class: 'totals-row'}],
	girlsB: [{title1: 'Girls', title2: 'B Team'}, '$15', '$50', {data: '$225', sup: 1}, '$35', '-', '-', '$50', '-', {data: '$375', class: 'totals-row'}],
	payableTo: ['Payable To', 'DYBA', 'DYBA', 'Just Play Sports', 'Varies', 'Gold Crown', 'DYBA', 'DYBA', 'DYBA', '-'],
	dueDate: ['Due Date', 'Sept 23', 'Oct 1', 'Oct 1', 'Varies', 'Nov 15', 'Nov 30', 'Nov 30', 'Nov 30', '-']
};

class DYBAFees extends Component {
	constructor(props) {
		super(props);
		this.setMobileView = this.setMobileView.bind(this);

		this.state = {
			showMobileTable: false,
			column: ''
		}
	}

	setMobileView(e) {
		this.setState({
			showMobileTable: true,
			column: e.target.id
		})
	}

	getKeys() {
		if (this.state.showMobileTable) {
			let keysArray = Object.keys(DYBAFeesData);
			keysArray.splice(1, 4, this.state.column);
			return keysArray;
		}

		return Object.keys(DYBAFeesData);
	}

	renderData() {
		return this.getKeys().reduce((acc, curr) => {
			DYBAFeesData[curr].forEach((item, i) => {
				const data = item.title1 ?
					(<React.Fragment>
						<div>{item.title1}</div>
						<div>{item.title2}</div>
					</React.Fragment>) :
					(item.data || item)
				;
				const data2 = item.data2 || '';
				const sup = item.sup || '';
				const className = item.class || '';
				acc.push(
					<div key={`${curr}-${data}-${i}`} className={className}>
						{data}
						{sup && <span className="super">{sup}</span>}
						{data2}
					</div>
				);
			});
			return acc;
		}, []);
	}

	render() {
		if (window.innerWidth < 768) {
			return (
				<MainContainer title="DYBA INFO" custom=" dyba-fees">
					<h2>DYBA Fees</h2>
					<DropdownButton title="Select" id="menu">
						<MenuItem id="boysA" onClick={this.setMobileView}>Boys A Team</MenuItem>
						<MenuItem id="girlsA" onClick={this.setMobileView}>Girls A Team</MenuItem>
						<MenuItem id="boysB" onClick={this.setMobileView}>Boys B Team</MenuItem>
						<MenuItem id="girlsB" onClick={this.setMobileView}>Girls B Team</MenuItem>
					</DropdownButton>
					{this.state.showMobileTable && (
						<React.Fragment>
							<div className="fees-table">
								{this.renderData()}
							</div>
							<div className="footnote"><span className="super">1</span> Includes gym time for practices.</div>
							<div className="footnote"><span className="super">2</span> These fees apply to 6th, 7th and 8th grade teams only.</div>
							<div className="footnote"><span className="super">3</span> 7th and 8th grade boys A teams will play Gold Crown. Others will be team by team decision.</div>
						</React.Fragment>
					)}
				</MainContainer>
			);
		}

		return (
			<MainContainer title="DYBA INFO" custom=" dyba-fees">
				<h2>DYBA Fees</h2>
				<div className="fees-table">
					{this.renderData()}
				</div>
				<div className="footnote"><span className="super">1</span> Includes gym time for practices.</div>
				<div className="footnote"><span className="super">2</span> These fees apply to 6th, 7th and 8th grade teams only.</div>
				<div className="footnote"><span className="super">3</span> 7th and 8th grade boys A teams will play Gold Crown. Others will be team by team decision.</div>
			</MainContainer>
		);
	}
}

export default DYBAFees;
