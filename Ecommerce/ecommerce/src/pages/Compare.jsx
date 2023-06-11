import React, { useState } from 'react';
import phonesData from '../data/data.json';
import compareicon from '../assets/compareicon.png';
import decorationhome from '../assets/decorationhome.png';
import FloatingButton from '../components/FloatingButton';

function Compare() {
  const [selectedPhone1, setSelectedPhone1] = useState('');
  const [selectedPhone2, setSelectedPhone2] = useState('');

  const handlePhone1Change = (e) => {
    setSelectedPhone1(e.target.value);
  };

  const handlePhone2Change = (e) => {
    setSelectedPhone2(e.target.value);
  };

  const getPhoneDetails = (phoneName) => {
    const phones = phonesData.brands.flatMap((brand) => brand.models);
    return phones.find((phone) => phone.name === phoneName);
  };

  const phone1Details = selectedPhone1 ? getPhoneDetails(selectedPhone1) : null;
  const phone2Details = selectedPhone2 ? getPhoneDetails(selectedPhone2) : null;

  return (
    <div className="ComparePage">


     
<div className="decorationhome">
    <img src={decorationhome} className="d-block w-100 fadein-animation" alt="decorationhome" /> </div>


<div className="compareicon">
      <img src={compareicon} className="compareicon" alt="compareicon"></img>
      </div>




      <div className="selectors">
        <select className="Selector1" value={selectedPhone1} onChange={handlePhone1Change}>
          <option value="">Select Phone 1</option>
          {phonesData.brands.flatMap((brand) =>
            brand.models.map((model) => (
              <option key={model.id} value={model.name}>
                {model.name}
              </option>
            ))
          )}
        </select>
        <select className="Selector2" value={selectedPhone2} onChange={handlePhone2Change}>
          <option value="">Select Phone 2</option>
          {phonesData.brands.flatMap((brand) =>
            brand.models.map((model) => (
              <option key={model.id} value={model.name}>
                {model.name}
              </option>
            ))
          )}
        </select>
      </div>
      {phone1Details && phone2Details && (
        <div className="phone-details">
          <div className="phone-details-item">
            <img src={phone1Details.photo} alt="Phone 1" />
            <p>Name: {phone1Details.name}</p>
            <p>Storage: {phone1Details.storage}</p>
            <p>Screen Size: {phone1Details.screenSize}</p>
          </div>
          <div className="phone-details-item">
            <img src={phone2Details.photo} alt="Phone 2" />
            <p>Name: {phone2Details.name}</p>
            <p>Storage: {phone2Details.storage}</p>
            <p >Screen Size: {phone2Details.screenSize}</p>


          </div>
        </div>
      )}

<div className="decorationhome">
    <img src={decorationhome} className="d-block w-100 fadein-animation" alt="decorationhome" /> </div>

    <FloatingButton />

    </div>
  );
}

export default Compare;
