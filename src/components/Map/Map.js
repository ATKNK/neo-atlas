import React, { useState, useEffect } from "react";
import { ReactComponent as Map1444 } from "../../assets/1444.svg";
import "./Map.css";

function Map() {
  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    content: "",
  });

  const [countryData, setCountryData] = useState({});

  useEffect(() => {
    fetch("/data/countries.json")
      .then((res) => res.json())
      .then((data) => setCountryData(data));
  }, []);

  const handleMouseEnter = (e) => {
    const countryTag = e.target.id;
    const countryName = e.target.getAttribute("data-name");
    const info = countryData[countryTag];

    setTooltip({
      visible: true,
      x: e.clientX,
      y: e.clientY,
      content: (
        <div className="tooltipContent">
          <img
            src={`/flags/${countryTag}.png`}
            alt={countryName}
            className="flag"
          />
          <div className="tooltipTitle">{countryName}</div>
          {info && (
            <div className="tooltipExtra">
              <div>Capital: {info.capital}</div>
              <div>Title: {info.title}</div>
            </div>
          )}
        </div>
      ),
    });
  };

  const handleMouseMove = (e) => {
    setTooltip((prev) => ({
      ...prev,
      x: e.clientX,
      y: e.clientY,
    }));
  };

  const handleMouseLeave = () => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  useEffect(() => {
    const countries = document.querySelectorAll(".country");
    countries.forEach((country) => {
      country.addEventListener("mouseenter", handleMouseEnter);
      country.addEventListener("mousemove", handleMouseMove);
      country.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      countries.forEach((country) => {
        country.removeEventListener("mouseenter", handleMouseEnter);
        country.removeEventListener("mousemove", handleMouseMove);
        country.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [countryData]);

  return (
    <div className="Map">
      <Map1444 />
      <div
        className={`tooltip ${tooltip.visible ? "visible" : ""}`}
        style={{ top: tooltip.y + 10, left: tooltip.x + 10 }}
      >
        {tooltip.content}
      </div>
    </div>
  );
}

export default Map;
