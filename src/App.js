import { useEffect, useState } from "react";
import "./App.css";
import Map from "./components/Map/Map.js";
import SidePanel from "./components/SidePanel/SidePanel.js";
import { findCountryData } from "./utils/findCountryData.js";

function App() {
  const [selectedCountryId, setSelectedCountryId] = useState(null);
  const [countriesData, setCountriesData] = useState({});

  useEffect(() => {
    fetch("/data/countries1444.json")
      .then((res) => res.json())
      .then((data) => setCountriesData(data));
  }, []);

  return (
    <div className="App">
      <header>
        <h1 className="title">Neo Karte</h1>
      </header>

      <div className="Main">
        <Map onCountryClick={setSelectedCountryId} />
        <SidePanel
          countryId={selectedCountryId}
          countryData={
            selectedCountryId
              ? findCountryData(selectedCountryId, countriesData)
              : null
          }
        />
      </div>
    </div>
  );
}

export default App;
