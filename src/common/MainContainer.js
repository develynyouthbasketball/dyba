import React from "react";
import MainHeading from './MainHeading';

const MainContainer = ({ title, children }) => (
	<main className="dyba-main">
		<MainHeading title={title} />
		<div className="main-content">
			{children}
		</div>
	</main>
);

export default MainContainer;
