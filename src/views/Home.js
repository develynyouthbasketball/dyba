import React from "react";
import MainContainer from '../common/MainContainer';

const Home = () => (
  <MainContainer title="WELCOME">
    <h2>DYBA</h2>
    <p>
      D'Evelyn Youth Basketball Association is a club that provides an opportunity for current and prospective Dennison and
      D'Evelyn girls and boys to play league basketball. We have teams from 3rd through 8th grade. Our teams usually play in the
      &nbsp;
      <a
        href="http://www.justplaysportscolorado.com/Page.asp?n=27279&org=justplaysportscolorado.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        JPS League
      </a>.
      Some of our 4th through 8th grade teams will play in the
      &nbsp;
      <a
        href="https://www.goldcrownfoundation.com/basketball-programs/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gold Crown League
      </a>
      &nbsp;
      in addition to or in lieu of JPS. Some teams will enter tournaments as well.
    </p>
    <p>Our team placement is free to attend and we attempt to find a spot for every child who wants to play!</p>
    <p>Click on the Team Placement button below for this year's schedule.</p>
    <div className="button-container">
      <a className="link-button btn inline" href="/team-placement">Team Placement</a>
      <a className="link-button btn inline" href="/email-list">Subscribe</a>
      <a className="link-button btn inline" href="/register">Registration</a>
    </div>
  </MainContainer>
);

export default Home;
