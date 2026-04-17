const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000/api";


export const fetchCompanies = async (params) => {
  const query = new URLSearchParams(params).toString();
  const res = await fetch(`${BASE_URL}/companies?${query}`);
  if (!res.ok) throw new Error("Error fetching");
  return res.json();
};

export const fetchLocations = async () => {
  const res = await fetch(`${BASE_URL}/locations`);
  return res.json();
};

export const fetchIndustries = async () => {
  const res = await fetch(`${BASE_URL}/industries`);
  return res.json();
}