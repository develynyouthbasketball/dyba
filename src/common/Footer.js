import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      credits: 'none'
    }
  }

  handleClick() {
    const credits = this.state.credits === 'none' ? 'block' : 'none';
    this.setState({
      credits
    })
  }

  render() {
    return (
      <footer className="footer">
        <div className="footer-credits">
          <button onClick={this.handleClick}>Credits</button>
          <div onClick={this.handleClick} className="footer-credits-popup" style={{ display: this.state.credits }}>
            Paw icon made by <a href="http://www.freepik.com" title="Freepik"  target="_blank" rel="noopener noreferrer">Freepik</a>
            , from <a href="http://www.flaticon.com" title="Flaticon"  target="_blank" rel="noopener noreferrer">www.flaticon.com</a>
            , and is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a>
          </div>
        </div>
        <div className="footer-middle">
          <div className="footer-created text-center">
            <a href="https://tory-rahm.herokuapp.com/">Created by Tory Rahm</a>
          </div>
          <div>
            <p className="footer-copyright text-center">Copyright &copy; 2018. All rights reserved.</p>
          </div>
        </div>
        <div className="footer-contact">
          <p>Contact DYBA: director@develynyouthbasketball.org</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
