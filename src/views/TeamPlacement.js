import React from "react";
import MainContainer from '../common/MainContainer';

const TeamPlacement = () => (
	<MainContainer title="TEAM INFO">
		<h2>2017/18 Team Placement</h2>
    <p>Team Placement will take place on Sunday, September 10th, 2017 in the D'Evelyn High School gym. Please plan to arrive at least 15 minutes prior to the start time so we can stay on schedule. We need volunteers to assist with the sign-in process. Please email Tory at director@develynyouthbasketball.org if you're interested in helping.</p>
    <h3><u>Schedule</u></h3>
    <div className="placement-schedule">
      <div className="first">
        <div><u>K-2nd Grade</u></div>
        <div>Check-in: 9:30am</div>
        <div>Start: 10:00am</div>
        <br />
        <div><u>3rd Grade</u></div>
        <div>Check-in: 10:30am</div>
        <div>Start: 11:00am</div>
        <br />
        <div><u>4th Grade</u></div>
        <div>Check-in: 11:30am</div>
        <div>Start: 12:00pm</div>
        <br />
        <div><u>5th Grade</u></div>
        <div>Check-in: 1:00pm</div>
        <div>Start: 1:30pm</div>
      </div>
      <div className="second">
        <div><u>6th Grade</u></div>
        <div>Check-in: 2:00pm</div>
        <div>Start: 2:30pm</div>
        <br />
        <div><u>7th Grade</u></div>
        <div>Check-in: 3:00pm</div>
        <div>Start: 3:30pm</div>
        <br />
        <div><u>8th Grade</u></div>
        <div>Check-in: 4:00pm</div>
        <div>Start: 4:30pm</div>
      </div>
    </div>
    <p className="center-margin-top">Click on Team Placement FAQ for more information.</p>
    <a className="link-button btn" href="/team-placement-faq.html">Team Placement FAQ</a>
	</MainContainer>
);

export default TeamPlacement;
