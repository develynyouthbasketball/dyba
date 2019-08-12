import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './common/Header';
import Home from './views/Home';
import Register from './views/Register';
import TeamPlacement from './views/TeamPlacement';
import TeamPlacementFAQ from './views/TeamPlacementFAQ';
import PracticeSchedule from './views/PracticeSchedule';
import DYBAFees from './views/DYBAFees';
import TeamRostersBoys from './views/TeamRostersBoys';
import TeamRostersGirls from './views/TeamRostersGirls';
import KinderSecondInfo from './views/KinderSecondInfo';
import ThirdFourthInfo from './views/ThirdFourthInfo';
import FifthEigthInfo from './views/FifthEigthInfo';
import SummerCamp from './views/SummerCamp';
import DHSCoaches from './views/DHSCoaches';
import EmailList from './views/EmailList';
import Footer from './common/Footer';

const App = () => (
	<Router>
		<div>
			<Header />
			<Route exact path="/" component={Home} />
			<Route exact path="/register" component={Register} />
			<Route path="/team-placement" component={TeamPlacement} />
			<Route path="/team-placement-faq" component={TeamPlacementFAQ} />
			<Route path="/practice-schedule" component={PracticeSchedule} />
			<Route path="/fees" component={DYBAFees} />
			<Route path="/team-rosters-boys" component={TeamRostersBoys} />
			<Route path="/team-rosters-girls" component={TeamRostersGirls} />
			<Route path="/leagues/k-2nd" component={KinderSecondInfo} />
			<Route path="/leagues/3rd-4th" component={ThirdFourthInfo} />
			<Route path="/leagues/5th-8th" component={FifthEigthInfo} />
			<Route path="/summer-camp" component={SummerCamp} />
			<Route path="/dhs-coaches" component={DHSCoaches} />
			<Route path="/email-list" component={EmailList} />
			<Footer />
		</div>
	</Router>
);

export default App;
