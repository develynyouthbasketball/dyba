import React from "react";
import MainHeading from './MainHeading';

const MainContainer = ({ title, custom, children }) => (
  <main className="dyba-main">
    <MainHeading title={title} />
    <div className={`main-content${custom || ''}`}>
      {children}
    </div>
  </main>
);

export default MainContainer;
