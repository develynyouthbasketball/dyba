import React from "react";
import MainContainer from '../common/MainContainer';

const SecondThirdInfo = () => (
  <MainContainer title="LEAGUE INFO">
    <h2>2nd - 3rd Grade</h2>
    <span className="list-header"><u>Available leagues</u></span>
    <ul>
      <li>2nd and 3rd graders will play in the Jeffco Basketball Conference.</li>
    </ul>
    <span className="list-header"><u>Jeffco Conference details</u></span>
    <ul>
      <li>Info: The Jeffco Conference offers both competitive and recreational leagues.</li>
      <li>Cost: $210</li>
      <li>Uniform: $25 jersey if purchased from league.</li>
      <li>Season: Oct 30 - Feb 25</li>
      <li>Practices: 1-2 practices per week. Practices are weeknights at Lakewood schools and can vary week to week.</li>
      <li>Games: Games will begin the week of Nov 27 and can be any day of the week except Sunday. Games are played at schools throughout Jefferson County as well as the Gold Crown Fieldhouse.</li>
    </ul>
    <a className="link-button btn" href="http://justplaysportscolorado.com/Page.asp?n=27279&org=JUSTPLAYSPORTSCOLORADO.COM">Jeffco Conference</a>
  </MainContainer>
);

export default SecondThirdInfo;
