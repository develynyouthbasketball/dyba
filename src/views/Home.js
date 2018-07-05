import React from "react";
import MainContainer from '../common/MainContainer';

const Home = () => (
	<MainContainer title="WELCOME">
		<h2>DYBA3</h2>
		<p>D'Evelyn Youth Basketball Association is a basketball club that was organized to provide an opportunity for current/future Dennison and D’Evelyn boys to play together. We have teams from 2nd through 8th grade. Kindergartners and 1st graders are welcome to attend the annual tryouts, but will likely be directed to play in the YMCA league. Depending on size and skill level, 1st graders may be invited to play on a 2nd grade team. Our 2nd through 8th grade teams play in the Jeffco Basketball Conference and our 4th through 8th grade kids may also play in the Gold Crown league. </p>
		<p>Our annual membership dues are $30. These funds are used to cover the costs of running the club as well as provide scholarships to players and appreciation gifts to our coaches. You must be a member of the club to play on our teams.</p>
		<p>2017 Team Placement is on Sunday, September 10th. Click on the Registration button to get started. Click on the Team Placement button for this year's schedule.</p>
		<div className="text-center">
			<a className="link-button btn inline" href="/register">Registration</a>
			<a className="link-button btn inline" href="/team-placement">Team Placement</a>
		</div>
		<div>
			<a href="/email-list" className="signup center-margin-top">Join Our Email List</a>
		</div>
	</MainContainer>
);

export default Home;
