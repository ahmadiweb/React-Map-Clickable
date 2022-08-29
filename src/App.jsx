import React, { useState, useEffect } from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Map from "./Component/Map";
import Info from "./Component/Info";
import Summary from "./Component/Summary";
import wiki from 'wikipedia'


export default function App() {

  const [selectedCountry, setSelectedCountry] = useState({ countryName: 'iran', animationChange: true })
  const [countryInfo, setCountryInfo] = useState({})

  useEffect(() => {
    (async () => {
      try {
        const page = await wiki.page(selectedCountry.countryName);
        const [data, info, body] = await Promise.all([
          page.summary(),
          page.infobox(),
          page.intro()
        ])
        setSelectedCountry({
          animationChange: false
        })
        setCountryInfo({
          flag: data.originalimage.source,
          countryName: data.title,
          capital: info.capital,
          currency: info.currency,
          officialLanguages: info.officialLanguages,
          population: info.populationEstimate,
          area: info.areaKm2,
          body: body

        })


      } catch (error) {
      }
    })();

  }, [selectedCountry.countryName])


  const handleSelect = (name) => {
    setSelectedCountry({
      countryName: name,
      animationChange: true
    })
  }

  const transaction = selectedCountry.animationChange;
  return (

    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col col-md-9">
            <Map handleSelect={handleSelect} />
          </div>
          <div className="col-12 col-md-3">
            <Info data={countryInfo} transaction={transaction} />
          </div>
        </div>
        <div className="row mt-3">
          <Summary body={countryInfo.body} transaction={transaction} />
        </div>
      </div>

    </>
  );
}

