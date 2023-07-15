import React, { useState, useEffect, useRef } from "react";

import { Country, State } from "country-state-city";

const LocationSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef(null);

  const filterCountries = () => {
    return Country.getAllCountries().filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filterStates = () => {
    return State.getAllStates().filter((state) =>
      state.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const matchingOptions = [];

    if (term.trim() !== "") {
      matchingOptions.push(
        ...filterCountries().map((country) => ({
          name: country.name,
          type: "country",
        }))
      );
      matchingOptions.push(
        ...filterStates().map((state) => ({ name: state.name, type: "state" }))
      );
    }

    const limitedOptions = matchingOptions.slice(0, 10);
    setDropdownOptions(limitedOptions);
    setShowDropdown(term.trim() !== "" && limitedOptions.length > 0);
  };

  const handleKeyDown = (e) => {
    if (e.key === "/" && document.activeElement !== inputRef.current) {
      e.preventDefault();
      setSearchTerm("");
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="relative text-slate-950 w-2/4">
      <input
        ref={inputRef}
        type="text"
        placeholder="search..."
        value={searchTerm}
        onChange={handleInputChange}
        className="flex justify-center w-3/4 rounded-xl border-2 border-gray-200 bg-white  font-satoshi pl-10 pr-4 py-2 text-sm shadow-lg font-medium focus:border-stone-400   focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="h-6 w-6 absolute left-3 top-1/2 transform -translate-y-1/2
      text-gray-400 bi bi-slash-square mr-5"
        viewBox="0 0 16 16"
      >
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
        <path d="M11.354 4.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0z" />
      </svg>
      
      {showDropdown && (
        <div className="mt-2 absolute bg-white border border-gray-300 rounded-md w-3/4">
          {dropdownOptions.map((option, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setSearchTerm(option.name);
                setDropdownOptions([]);
                setShowDropdown(false);
              }}
            >
              {option.name} ({option.type})
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationSearch;

{
  /* <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
  className="h-6 w-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
  />
</svg> */
}
