import React from "react";
import MainContainer from '../common/MainContainer';
import zinn from '../images/Zinn.png';
import slaughter from '../images/slaughter.png';

const DHSCoaches = () => (
	<MainContainer title="COACHES">
		<h2>DHS Coaching Staff</h2>
		<br />
		<div className="row">
			<p>Dan Zinn - Varsity Head Coach</p>
			<img src={zinn} className="col-xs-12 col-sm-3" alt="coach zinn" />
			<div className="dhs-coaches col-xs-12 col-sm-9">
				<p>Coach Zinn joined the D'Evelyn Jaguars in June 2015 as the Boys' Varsity Head Coach and Head of Program. Over the past sixteen years, he has coached basketball in a variety of roles at the high school and college levels.  For nine of those years, he was the head coach at Colorado Academy and most recently he coached at Kent Denver.  One of the reasons Coach Zinn chose to work at these schools, and now at D’Evelyn, is their belief in academics as a priority.  He is a believer that the players in this program are student-athletes and he believes in and understands the importance of academics at a school like D'Evelyn.</p>
			</div>
		</div>
		<br />
		<br />
		<br />
		<div className="row">
			<p>Preston Slaughter - JV Head Coach</p>
			<img src={slaughter} className="col-xs-12 col-sm-3" alt="coach slaughter" />
			<div className="dhs-coaches col-xs-12 col-sm-9">
				<p>Coach Slaughter is a math teacher at D'Evelyn. He was a walk-on at the University of Colorado Boulder from 2000-2002 where he averaged 4.1 points while playing 4.6 minutes per game. He was awarded the Golden Buffalo Award in 2002 for being the player who demonstrated a great work ethic and who took personal responsibility for continual progress and improvement. Coach Slaughter coached at Arvada High school for five years, including three years as the Varsity Head Coach. We are thrilled to have Coach Slaughter as a part of our program. His depth of experience as both a coach and a player will greatly impact our program.</p>
			</div>
		</div>
	</MainContainer>
);

export default DHSCoaches;
