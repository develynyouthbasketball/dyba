import React from "react";
import MainContainer from '../common/MainContainer';
import olson from '../images/olson.jpg';
import gosch from '../images/gosch.jpg';
import ziemian from '../images/ziemian.jpg';

const Staff = () => (
  <MainContainer title="STAFF">
    <h2>DYBA Staff</h2>
    <div className="staff-section row">
      <p>Michelle Ziemian - Director</p>
      <img src={ziemian} className="col-xs-12 col-sm-3" alt="michelle ziemian" />
      <div className="dyba-staff col-xs-12 col-sm-9">
        <p>
          Michelle Ziemian took over the Director role in 2020.  She has been a DYBA coach and parent for multiple years
          and won a league championship with her team in her second year with DYBA.  She has also coached her children in
          other area basketball leagues.  Michelle played college basketball for MIT and continues to play pick up from
          time to time.  She has a passion for helping children develop as players and people through the sport of basketball.
        </p>
      </div>
    </div>
    <div className="staff-section row">
      <p>Will Gosch - Boys Coordinator</p>
      <img src={gosch} className="col-xs-12 col-sm-3" alt="coach gosch" />
      <div className="dyba-staff col-xs-12 col-sm-9">
        <p>Coach Gosch</p>
      </div>
    </div>
    <div className="staff-section row">
      <p>Chris Olson - Girls Coordinator</p>
      <img src={olson} className="col-xs-12 col-sm-3" alt="coach olson" />
      <div className="dyba-staff col-xs-12 col-sm-9">
        <p>
          Coach Olson was hired in 2006 as the Girls' Varsity Head Coach at D'Evelyn High School. In the 12 years since
          Coach O was hired, the girls Varsity team has a record of 215-88. With 7 appearances in the Sweet 16, 5 straight
          Great 8 appearances, 4 20+ win seasons, 4 Jeffco League Championships, and 2 State Runners Up in Class 4A, the Jags
          are considered one of the best girls basketball programs in the state of Colorado. Known for running the fast break,
          pressing full court, and shooting a bunch of 3's, the Jags are fun to watch! And in those 12 years, 9 girls have
          continued playing basketball in college and 10 more have received scholarships in other sports.
        </p>
      </div>
    </div>
  </MainContainer>
);

export default Staff;
