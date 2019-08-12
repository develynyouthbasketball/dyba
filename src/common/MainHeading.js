import React from "react";
import jagHead from '../images/DYBA-Head.png';

const MainHeading = ({ title }) => {
	const imageClass = title === 'WELCOME' ? ' home' : '';
	return (
		<div className="main-heading">
			<div className="main-heading-row1">
				<div className="main-heading-row1-border"></div>
				<div className="main-heading-row1-image text-center">
					<img className={`main-heading-row1-image-file${imageClass}`} src={jagHead} alt="Jags Logo" />
				</div>
				<div className="main-heading-row1-border"></div>
			</div>
			<div className="main-heading-row2 text-center">{title}</div>
			<div className="main-heading-row3"></div>
		</div>
	)
};

export default MainHeading;
