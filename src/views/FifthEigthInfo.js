import React from "react";
import MainContainer from '../common/MainContainer';

const FifthEightInfo = () => (
	<MainContainer title="LEAGUE INFO">
		<h2>5th - 8th Grade</h2>
		<span className="list-header"><u>Available leagues</u></span>
		<ul>
			<li>Jeffco Conference: All 5th-8th graders will play in the Jeffco Conference.</li>
			<li>Gold Crown: Some 5th-8th graders will also play in the Gold Crown league.</li>
		</ul>
		<span className="list-header"><u>Jeffco Conference details</u></span>
		<ul>
			<li>Info: The Jeffco Conference offers both competitive and recreational leagues.</li>
			<li>Cost: $225</li>
			<li>Uniform: $25 jersey if purchased from league. ~$100 if team chooses to purchase full uniform.</li>
			<li>Season: Oct 30 - Feb 25</li>
			<li>Practices: 1-2 practices per week. Practices are weeknights at Lakewood schools and can vary week to week.</li>
			<li>Games: Games will begin the week of Nov 27 and can be any day of the week except Sunday. Games are played at schools throughout Jefferson County as well as the Gold Crown Fieldhouse.</li>
		</ul>
		<a className="link-button btn" href="http://justplaysportscolorado.com/Page.asp?n=27279&org=JUSTPLAYSPORTSCOLORADO.COM">Jeffco Conference</a>
		<span className="list-header"><u>Gold Crown league details</u></span>
		<ul>
			<li>Info: The Gold Crown league is more competitive than the Jeffco Conference and is intended for the more serious players. Gold Crown only offers competitive leagues.</li>
			<li>Cost: ~$180 depending on the number of players on the team.</li>
			<li>Uniform: Team will use the same uniform as purchased for Jeffco Conference.</li>
			<li>Season: Jan 13 - Mar 4</li>
			<li>Practices: Teams that play in both leagues may have up to 3 practices per week. The 'A' teams for 6th, 7th and 8th grades practice at D'Evelyn.</li>
			<li>Games: Games will begin the week of Jan 13 and are typically played as a double header on Sunday. Games are played at schools throughout Jefferson County as well as the Gold Crown Fieldhouse.</li>
		</ul>
		<a className="link-button btn" href="http://www.goldcrownfoundation.com/basketball/leagues-nc/winter-competitive-league/">Gold Crown League</a>
	</MainContainer>
);

export default FifthEightInfo;
