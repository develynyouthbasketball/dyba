import React from "react";
import MainContainer from '../common/MainContainer';

const TeamPlacement = () => (
	<MainContainer title="DYBA INFO">
		<h2>2019/20 Team Placement</h2>
		<p>Team Placement will take place on Sunday, September 8th, 2019 in the D'Evelyn High School gym. Please plan to arrive at least 10 minutes prior to the start time so we can stay on schedule. We need volunteers to assist with the sign-in process. Please send an email to director@develynyouthbasketball.org if you're interested in helping.</p>
		<h3><u>Schedule</u></h3>
		<div className="placement-schedule">
			<div className="first">
				<br />
				<div><u>3rd Grade Boys & Girls</u></div>
				<div>Check-in: 9:15am</div>
				<div>Start: 9:30am</div>
				<br />
				<div><u>4th Grade Boys & Girls</u></div>
				<div>Check-in: 10:15am</div>
				<div>Start: 10:30am</div>
				<br />
				<div><u>5th Grade Boys & Girls</u></div>
				<div>Check-in: 11:15am</div>
				<div>Start: 11:30am</div>
				<br />
			</div>
			<div className="second">
				<br />
				<div><u>6th Grade Boys & Girls</u></div>
				<div>Check-in: 12:45pm</div>
				<div>Start: 1:00pm</div>
				<br />
				<div><u>7th Grade Boys & Girls</u></div>
				<div>Check-in: 1:45pm</div>
				<div>Start: 2:00pm</div>
				<br />
				<div><u>8th Grade Boys & Girls</u></div>
				<div>Check-in: 2:45pm</div>
				<div>Start: 3:00pm</div>
			</div>
		</div>
		<br />
		<p>There will be a breif parent information talk during the last 10 minutes of each player placement session</p>
		<br />
		<p className="center-margin-top">Click on Team Placement FAQ for more information.</p>
		<a className="link-button btn" href="/team-placement-faq">Team Placement FAQ</a>
	</MainContainer>
);

export default TeamPlacement;
