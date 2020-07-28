import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './common/Header';
import Home from './views/Home';
import Register from './views/Register';
import TeamPlacement from './views/TeamPlacement';
import TeamPlacementFAQ from './views/TeamPlacementFAQ';
import DYBAFees from './views/DYBAFees';
import KinderFirstInfo from './views/KinderFirstInfo';
import SecondThirdInfo from './views/SecondThirdInfo';
import FourthInfo from './views/FourthInfo';
import FifthEigthInfo from './views/FifthEigthInfo';
import SummerCamp from './views/SummerCamp';
import Staff from './views/Staff';
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
			<Route path="/fees" component={DYBAFees} />
			<Route path="/leagues/k-1st" component={KinderFirstInfo} />
			<Route path="/leagues/2nd-3rd" component={SecondThirdInfo} />
			<Route path="/leagues/4th" component={FourthInfo} />
			<Route path="/leagues/5th-8th" component={FifthEigthInfo} />
			<Route path="/summer-camp" component={SummerCamp} />
			<Route path="/staff" component={Staff} />
			<Route path="/email-list" component={EmailList} />
			<Footer />
		</div>
	</Router>
);

export default App;
