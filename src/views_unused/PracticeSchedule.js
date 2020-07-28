import React from "react";
import MainHeading from '../common/MainHeading';

const PracticeSchedule = () => (
	<main className="dyba-main">
		<MainHeading title="DYBA INFO" />
		<div className="calendar-container">
			<h2>Practice Schedule for 6A, 7A, 8A Teams</h2>
			<iframe
				src="https://calendar.google.com/calendar/embed?src=dybadirector%40gmail.com&ctz=America/Denver"
				style={{ border: 0 }}
				width="800"
				height="600"
				frameBorder="0"
				scrolling="no"
				title="practice-schedule"
			/>
		</div>
	</main>
);

export default PracticeSchedule;
