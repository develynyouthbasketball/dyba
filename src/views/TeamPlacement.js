import React from "react";
import MainContainer from '../common/MainContainer';

const TeamPlacement = () => (
  <MainContainer title="DYBA INFO">
    <h2>2020/21 Team Placement</h2>
    <p>Team Placement will take place on Tuesday, September 8th and Wednesday September 9th at the Gold Crown Fieldhouse. Please plan to arrive 5 minutes prior to the start time so we can stay on schedule.  Parent meetings will be held outdoors near the building for the first 10 minutes of each session.  Registration is FREE but required to attend.</p>
    <h3><u>Schedule</u></h3>
    <div className="placement-schedule">
      <div className="middle">
        {/* <br /> */}
        <div><u>Boys Grades 2nd-4th</u></div>
        <div>Date: Wednesday, September 9th</div>
        <div>Time: 5-6pm</div>
        <br />
        <div><u>Girls Grades 2nd-4th</u></div>
        <div>Date: Wednesday, September 9th</div>
        <div>Time: 6-7pm</div>
        <br />
        <div><u>5th Grade</u></div>
        <div>Date: Wednesday, September 9th</div>
        <div>Time: 5-6pm</div>
        <br />
        <div><u>6th Grade</u></div>
        <div>Date: Wednesday, September 9th</div>
        <div>Time: 6-7pm</div>
        <br />
        <div><u>7th Grade</u></div>
        <div>Date: Tuesday, September 8th</div>
        <div>Time: 7:30-8:30pm</div>
        <br />
        <div><u>8th Grade</u></div>
        <div>Date: Tuesday, September 8th</div>
        <div>Time: 8:30-9:30pm</div>
      </div>
    </div>
    <br />
    <p className="center-margin-top">Click on Team Placement FAQ for more information.</p>
    <a className="link-button btn" href="/team-placement-faq">Team Placement FAQ</a>
  </MainContainer>
);

export default TeamPlacement;
