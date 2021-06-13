import React, { useState, useEffect } from "react";
import { Dropdown } from "semantic-ui-react";
import CityService from "../../../services/cityService";

export default function CityList() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data));
  }, []);

  let cityOptions = cities.map((city) => ({
    key: city.id,
    text: city.name,
    value: city.name,
  }));

  return (
    <div>
      <Dropdown
        placeholder="Select City"
        search
        selection
        options={cityOptions}
      />
    </div>
  );
}
