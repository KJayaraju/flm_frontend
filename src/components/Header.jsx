import "./Header.css";
import { useEffect, useState } from "react";
import { fetchLocations,fetchIndustries } from "../services/api";
import CustomDropdown from "../components/CustomDropdown";

export default function Header({ filters, setFilters, setPage }) {
    const [locations, setLocations] = useState([]);
    const [industries, setIndustries] = useState([]);


    useEffect(() => {
  const getLocations = async () => {
    const data = await fetchLocations();
    setLocations(data);
  };
    const getIndustries = async () => {
    const data = await fetchIndustries();
    setIndustries(data);
  };

  getLocations();
    getIndustries();
}, []);
  const handleChange = (e) => {
    setPage(1);

    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="header">
      <div>
        <h1>Companies Directory</h1>
        <p>Browse companies</p>
      </div>

      <div className="filters">
        <input
          name="search"
          placeholder="Search company..."
          value={filters.search}
          onChange={handleChange}
        />
       <CustomDropdown
  options={industries}
  value={filters.industry}
  onChange={(value) => {
    setPage(1);
    setFilters((prev) => ({
      ...prev,
      industry: value,
    }));
  }}
  placeholder="All Industries"
/>
<CustomDropdown
  options={locations}
  value={filters.location}
  onChange={(value) => {
    setPage(1);
    setFilters((prev) => ({
      ...prev,
      location: value,
    }));
  }}
  placeholder="All Locations"
/>

        <select name="sort" onChange={handleChange}>
          <option value="name">Sort: Name</option>
          <option value="employees">Sort: Employees</option>
        </select>
      </div>
    </div>
  );
}