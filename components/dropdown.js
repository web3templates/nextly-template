import { useState } from "react";

const Dropdown = () => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

  const handleFilterChange = (e) => {
    setCountry(e.target.value);
    setState("");
  };

  const handleSecondFilterChange = (e) => {
    setState(e.target.value);
  };

  if (country === "Habitat") {
  return (
    <div>
      <select className="px-4 py-3 text-lg font-medium text-center text-gray-500 rounded-md" onChange={handleFilterChange} value={country}>
        <option disabled selected value="">-- Select Filter --</option>
        <option value="Body Mass">Body Mass</option>
        <option value="Habitat">Habitat</option>
      </select>
      <select className="px-4 py-3 text-lg font-medium text-center text-gray-500 rounded-md" onChange={handleSecondFilterChange} value={state} disabled={country === ""}>
                <option value="">-- Select Habitat --</option>
                {country === "Habitat" && (
                <><option key="Forest">Forest</option><option key="Ocean">Ocean</option><option key="Ocean">Savannah</option></>
                )}
                {/* {country === "USA" && (
                <><option key="California">California</option><option key="Texas">Texas</option><option key="New York">New York</option></>
                )}
                {country === "UK" && (
                <><option key="London">London</option><option key="Manchester">Manchester</option><option key="Birmingham">Birmingham</option></>
                )} */}
            </select>
    </div>
  );
    } else {
        return (
            <div>
              <select className="px-4 py-3 text-lg font-medium text-center text-gray-500 rounded-md" onChange={handleFilterChange} value={country}>
                <option disabled selected value="">-- Select Filter --</option>
                <option value="Body Mass">Body Mass</option>
                <option value="Habitat">Habitat</option>
              </select>
              </div>
    )};
};
export default Dropdown;