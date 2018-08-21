import React from "react";
import MainContainer from '../common/MainContainer';

const Register = () => (
	<MainContainer title="REGISTRATION">
		<h2>Welcome to DYBA Registration</h2>
		<p>Thanks for your interest in D'Evelyn Youth Basketball. Our registration process is handled through Blue Sombrero. In order to register, you will be asked to take the following steps:</p>
		<ol>
			<li>Login to existing account or create a new parent account on the Blue Sombrero website.</li>
			<li>Add all participants to your account.</li>
			<li>Register each participant for the 2018 tryouts.</li>
		</ol>
		<p>We will accept on-site registrations the day of Team Placement. However, we would prefer that you complete your registration in advance.</p>
		<p className="center-margin-top">Click the Register button to begin the process.</p>
		<a
			className="link-button btn"
			href="http://leagues.bluesombrero.com/Default.aspx?tabid=1175515"
			target="_blank"
			rel="noopener noreferrer"
		>
			Register
		</a>
		<p className="center-margin-top">Click on Team Placement for information on this year's tryouts.</p>
		<a className="link-button btn" href="/team-placement">Team Placement</a>
	</MainContainer>
);

export default Register;
