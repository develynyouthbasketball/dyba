import React from "react";
import MainContainer from '../common/MainContainer';
import brochure from '../images//2019-DYBA-Summer-Camps.png';

const SummerCamp = () => (
  <MainContainer title="PROGRAMS">
    <h2>Summer Camps 2021 - $90</h2>
    <p>Grades 2-5 - Coed - June 1,2,3 from 9-11am</p>
    <p>Grades 6-8 - Boys - June 1,2,3 from 11:30-1:30pm</p>
    <p>Grades 6-8 - Girls - June 7,8,9 from 12-2pm</p>
  <p className="center-margin-top">Advanced registration is required.</p>
    <p className="center-margin-top">Click the Register button to begin the process.</p>
    <a
      className="link-button btn"
      href="https://registration.bluesombrero.com/12806/available-programs"
      target="_blank"
      rel="noopener noreferrer"
    >
      Register
    </a>
  </MainContainer>
);

export default SummerCamp;
