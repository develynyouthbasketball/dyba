import React from "react";
import MainContainer from '../common/MainContainer';

const Home = () => (
	<MainContainer title="WELCOME">
		<h2>DYBA</h2>
		<p>D'Evelyn Youth Basketball Association is a club that provides an opportunity for Dennison and D’Evelyn girls and boys to play league basketball. We have teams from 3rd through 8th grade. Our 3rd through 8th grade teams play in the Jeffco Basketball Conference. Some of our 4th through 8th grade teams will also play in the Gold Crown league. </p>
		<p>Our team placement is free to attend and our annual membership dues are $50. These funds are used to cover the costs of running the club. You must be a member of the club to play on our teams.</p>
		<p>2019 Team Placement is on Sunday, September 8th. Click on the Registration button to get started. Click on the Team Placement button for this year's schedule.</p>
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
