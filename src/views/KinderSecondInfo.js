import React from "react";
import MainContainer from '../common/MainContainer';

const KinderSecondInfo = () => (
	<MainContainer title="LEAGUE INFO">
		<h2>K - 2nd Grade</h2>
		<span className="list-header"><u>Available leagues</u></span>
		<ul>
			<li>YMCA: K thru 2nd graders can play in the Southwest YMCA league. DYBA will not be responsible for managing these teams.</li>
			<li>Jeffco Conference: 2nd graders can play in the Jeffco Conference. DYBA will not be responsible for managing these teams.</li>
		</ul>
		<span className="list-header"><u>YMCA league details</u></span>
		<ul>
			<li>Info: The YMCA basketball program focuses on teaching fundamentals, sportsmanship and teamwork through games and drills.</li>
			<li>Cost: $65 for members; $108 for non-members.</li>
			<li>Uniform: Included in league fee.</li>
			<li>Season: Fall session is Oct-Dec; Winter session is Jan-Mar</li>
			<li>Practices: Teams practice once a week. Practice nights vary by team, but will be on the same night every week.</li>
			<li>Games: Teams will play at least one game per week on Saturdays.</li>
		</ul>
		<a className="link-button btn" href="https://www.denverymca.org/southwest/youth-sports/basketball">YMCA League</a>
		<span className="list-header"><u>Jeffco Conference details</u></span>
		<ul>
			<li>Info: The Jeffco Conference is more competitive than the YMCA league and is intended for the more serious players.</li>
			<li>Cost: $210</li>
			<li>Uniform: $25 jersey if purchased from league.</li>
			<li>Season: Oct 30 - Feb 25</li>
			<li>Practices: 1-2 practices per week. Practices are weeknights at Lakewood schools and can vary week to week.</li>
			<li>Games: Games will begin the week of Nov 27 and can be any day of the week except Sunday. Games are played at schools throughout Jefferson County as well as the Gold Crown Fieldhouse.</li>
		</ul>
		<a className="link-button btn" href="http://justplaysportscolorado.com/Page.asp?n=27279&org=JUSTPLAYSPORTSCOLORADO.COM">Jeffco Conference</a>
	</MainContainer>
);

export default KinderSecondInfo;
