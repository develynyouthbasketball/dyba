import React, { Component } from "react";
import { ButtonToolbar, ButtonGroup, DropdownButton, MenuItem, Button } from 'react-bootstrap';
import MainContainer from '../common/MainContainer';

const DYBAFeesData = {
	feeType: ['Fee Type', 'Team Placement', 'Club', 'Jeffco Conference', 'Uniform', 'Gold Crown',
		'Gold Crown Gym Usage', 'Coach', 'DHS Gym Usage', {data: 'Total Fees', class: 'totals-row'}
	],
	boysA: [{title1: 'Boys & Girls', title2: '6, 7, 8 GOLD'}, 'FREE', '$50', {data: '$160', sup: 1}, '~$40', {data: '$150', sup: 1},
		{data: '$20', sup: 1}, '$100', '$130', {data: '$650', class: 'totals-row'}
	],
	girlsA: [{title1: 'Boys & Girls', title2: '6, 7, 8 SILVER'}, 'FREE', '$50', {data: '$160', sup: 1}, '~$40', {data: '$150', sup: 1}, {data: '$20', sup: 1}, '$50', '$130', {data: '$600', class: 'totals-row'}],
	boysB: [{title1: 'Boys', title2: 'Other Teams'}, 'FREE', '$50', {data: '$225', sup: 2}, '~$40', '-', '-', '-', '-', {data: '$315', class: 'totals-row'}],
	girlsB: [{title1: 'Girls', title2: 'Other Teams'}, 'FREE', '$50', {data: '$225', sup: 2}, '~$40', '-', '-', '-', '-', {data: '$315', class: 'totals-row'}],
	payableTo: ['Payable To', '-', 'DYBA', 'Just Play Sports', 'Denver Athletic', 'Gold Crown', 'DYBA', 'DYBA', 'DYBA', '-'],
	dueDate: ['Due Date', '-', 'Spot Acceptance', 'Oct 1', 'Oct 1', 'Nov 15', 'Nov 30', 'Nov 1', 'Nov 1', '-']
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
						<MenuItem id="boysA" onClick={this.setMobileView}>Boys & Girls 6, 7, 8 GOLD</MenuItem>
						<MenuItem id="girlsA" onClick={this.setMobileView}>Boys & Girls 6, 7, 8 Silver</MenuItem>
						<MenuItem id="boysB" onClick={this.setMobileView}>Boys Other Teams</MenuItem>
						<MenuItem id="girlsB" onClick={this.setMobileView}>Girls Other Teams</MenuItem>
					</DropdownButton>
					{this.state.showMobileTable && (
						<React.Fragment>
							<div className="fees-table">
								{this.renderData()}
							</div>
							<div className="footnote"><span className="super">1</span> Not all teams will participate in both Jeffco & Gold Crown Leagues. This will be team by team decision.</div>
							<div className="footnote"><span className="super">2</span> Includes gym time for practices.</div>
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
				<div className="footnote"><span className="super">1</span> Not all teams will participate in both Jeffco & Gold Crown Leagues. This will be team by team decision.</div>
				<div className="footnote"><span className="super">2</span> Includes gym time for practices.</div>
			</MainContainer>
		);
	}
}

export default DYBAFees;
