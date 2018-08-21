import React from "react";
import MainContainer from '../common/MainContainer';
import zinn from '../images/Zinn.png';
import slaughter from '../images/slaughter.png';

const DHSCoaches = () => (
	<MainContainer title="COACHES">
		<h2>DHS Coaching Staff</h2>
		<br />
		<div className="row">
			<p>Dan Zinn - Varsity Head Coach - Boys</p>
			<img src={zinn} className="col-xs-12 col-sm-3" alt="coach zinn" />
			<div className="dhs-coaches col-xs-12 col-sm-9">
				<p>Coach Zinn joined the D'Evelyn Jaguars in June 2015 as the Boys' Varsity Head Coach and Head of Program. Over the past sixteen years, he has coached basketball in a variety of roles at the high school and college levels.  For nine of those years, he was the head coach at Colorado Academy and most recently he coached at Kent Denver.  One of the reasons Coach Zinn chose to work at these schools, and now at D’Evelyn, is their belief in academics as a priority.  He is a believer that the players in this program are student-athletes and he believes in and understands the importance of academics at a school like D'Evelyn.</p>
			</div>
		</div>
		<br />
		<br />
		<br />
		<div className="row">
			<p>Preston Slaughter - JV Head Coach - Boys</p>
			<img src={slaughter} className="col-xs-12 col-sm-3" alt="coach slaughter" />
			<div className="dhs-coaches col-xs-12 col-sm-9">
				<p>Coach Slaughter is a math teacher at D'Evelyn. He was a walk-on at the University of Colorado Boulder from 2000-2002 where he averaged 4.1 points while playing 4.6 minutes per game. He was awarded the Golden Buffalo Award in 2002 for being the player who demonstrated a great work ethic and who took personal responsibility for continual progress and improvement. Coach Slaughter coached at Arvada High school for five years, including three years as the Varsity Head Coach. We are thrilled to have Coach Slaughter as a part of our program. His depth of experience as both a coach and a player will greatly impact our program.</p>
			</div>
		</div>
		<br />
		<br />
		<br />
		<div className="row">
			<p>Chris Olson - Varsity Head Coach - Girls</p>
			<div className="dhs-coaches col-xs-12">
				<p>Coach Olson was hired in 2006 as the Girls' Varsity Head Coach at D'Evelyn High School. In the 12 years since Coach O was hired, the girls Varsity team has a record of 215-88. With 7 appearances in the Sweet 16, 5 straight Great 8 appearances, 4 20+ win seasons, 4 Jeffco League Championships, and 2 State Runners Up in Class 4A, the Jags are considered one of the best girls basketball programs in the state of Colorado. Known for running the fast break, pressing full court, and shooting a bunch of 3's, the Jags are fun to watch! And in those 12 years, 9 girls have continued playing basketball in college and 10 more have received scholarships in other sports.</p>
			</div>
		</div>
	</MainContainer>
);

export default DHSCoaches;
