import React from "react";
import MainContainer from '../common/MainContainer';
import brochure from '../images//2018-DYBA-Summer-Camps.png';

const SummerCamp = () => (
	<MainContainer title="PROGRAMS">
    <h2>2018 Summer Camps</h2>
    <p>DYBA summer camps are back. We'll have three camps this year. A coed camp for 2nd thru 5th graders, as well as camps for girls 6th thru 8th graders and for boys 6th thru 8th graders. See below for details. The sign-up link will take you to the registration site for all camps.</p>
    <a href="http://leagues.bluesombrero.com/Default.aspx?tabid=1175515" className="signup center-margin-top">Camp Registration</a>
    <img src={brochure} className="camp-image" alt="brochure" />
    <p className="center-margin-top">-----</p>
    <a href="http://leagues.bluesombrero.com/Default.aspx?tabid=1175515" className="signup center-margin-top">Camp Registration</a>
	</MainContainer>
);

export default SummerCamp;
