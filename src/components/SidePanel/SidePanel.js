import React from "react";
import "./SidePanel.css";

function SidePanel({ countryData, countryId, year }) {
  if (!countryData) {
    return (
      <div className="sidePanel">
        <p>Clique em um país</p>
      </div>
    );
  }

  return (
    <div className="sidePanel">
      <div className="section" id="year">
        <h1 className="sectionTitle">{year}</h1>
      </div>

      <div className="section">
        <h1 className="sectionTitle">{countryData.name}</h1>
      </div>

      <div className="sectionImage">
        <div className="sectionImage">
          <img
            className="flag"
            src={`/coatofarms/${countryId}.png`}
            alt={`${countryData.name} flag`}
          />
        </div>
      </div>

      <h3 className="sectionSubtitle">
        {countryData.fullNameEnglish}
      </h3>
      <h3 className="sectionSubtitle">{countryData.fullNameLocal}</h3>
      <div className="mainText">
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
    </div>
  );
}

export default SidePanel;
