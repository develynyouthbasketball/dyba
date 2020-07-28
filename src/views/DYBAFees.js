import React, { Component, Fragment } from "react";
import { DropdownButton, MenuItem } from 'react-bootstrap';
import MainContainer from '../common/MainContainer';

const DYBAFeesData = {
  feeType: ['Fee Type', 'Club', 'Jeffco Conference', 'Uniform', 'Gold Crown',
    {data: 'Gold Crown Gym Usage', sup: 4}, {data: 'DHS Gym Usage', sup: 1}, {data: 'Coach', sup: 5}, {data: 'Total Fees', class: 'totals-row'}
  ],
  boysA: [{title1: 'Boys', title2: 'A Team'}, '$50', {data: '$170', sup: 1}, {data: '$90', sup: 3}, '$150',
    '$20', '$130', '$100', {data: '$710', class: 'totals-row'}
  ],
  girlsA: [{title1: 'Girls', title2: 'A Team'}, '$50', '-', '$35', '$150', '$20', '$130', '$100', {data: '$485', class: 'totals-row'}],
  boysB: [{title1: 'Boys', title2: 'B Team'}, '$50', {data: '$235', sup: 2}, '$25', '-', '-', '-', '$50', {data: '$360', class: 'totals-row'}],
  girlsB: [{title1: 'Girls', title2: 'B Team'}, '$50', {data: '$235', sup: 2}, '$35', '-', '-', '-', '$50', {data: '$370', class: 'totals-row'}],
  payableTo: ['Payable To', 'DYBA', 'Just Play Sports', 'Varies', 'Gold Crown', 'DYBA', 'DYBA', 'DYBA', '-'],
  dueDate: ['Due Date', 'Oct 1', 'Oct 1', 'Varies', 'Nov 15', 'Nov 30', 'Nov 30', 'Nov 30', '-']
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
          (<Fragment>
            <div>{item.title1}</div>
            <div>{item.title2}</div>
          </Fragment>) :
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

  renderTable() {
    return (
      <Fragment>
        <div className="fees-table">
          {this.renderData()}
        </div>
        <div className="footnote">
          <span className="super">1</span>
          &nbsp;
          Some A teams will practice at DHS, and will pay a separate DHS Gym Usage fee and a lower
          Jeffco Conference fee that doesn't include practice time. Preference will be given to upper grades.
          For all other A teams, please review the B team information.
        </div>
        <div className="footnote">
          <span className="super">2</span>
          &nbsp;
          Applies to grades 5-8. The fee for grades 2-4 is $220. The fee includes gym time for practices.
        </div>
        <div className="footnote">
          <span className="super">3</span>
          &nbsp;
          These are reversible, shirt/shorts uniforms and are typically used for 2 seasons.
        </div>
        <div className="footnote">
          <span className="super">4</span>
          &nbsp;
          This fee is required for Gold Crown teams whose home school does not donate gym time for games.
        </div>
        <div className="footnote">
          <span className="super">5</span>
          &nbsp;
          This fee typically applies to 7th and 8th grades only.
        </div>
        <div className="disclaimer">
          Disclaimer: These fees are estimates, and can change from team to team and from year to year without notice.
        </div>
      </Fragment>
    );
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
          {this.state.showMobileTable && this.renderTable()}
        </MainContainer>
      );
    }

    return (
      <MainContainer title="DYBA INFO" custom=" dyba-fees">
        <h2>DYBA Fees</h2>
        {this.renderTable()}
      </MainContainer>
    );
  }
}

export default DYBAFees;
