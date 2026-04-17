import { useEffect, useState,useCallback } from "react";
import { fetchCompanies } from "../services/api";

import Sidebar from "../layout/Sidebar";
import Header from "../components/Header";
import CompanyCard from "../components/CompanyCard";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import Error from "../components/Error";



import "./Home.css";

export default function Home() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [filters, setFilters] = useState({
    search: "",
    location: "",
    industry: "",
    sort: "name",
    order: "asc",
  });

 
 const getData = useCallback(async () => {
  try {
    setLoading(true);

    const data = await fetchCompanies({
      ...filters,
      page,
      limit: 6,
    });

    setCompanies(data.data);
    setTotalPages(data.totalPages);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
}, [filters, page]);

 
  useEffect(() => {
  getData();
}, [getData]);

  return (
    <div className="layout">
      {/* Sidebar */}
      <Sidebar setFilters={setFilters} setPage={setPage} />

      <div className="main">
        {/* Header now handles filters */}
        <Header
          filters={filters}
          setFilters={setFilters}
          setPage={setPage}
        />

        {/* States */}
        {loading && <Loader />}
        {error && <Error message={error} />}

        {/* Cards */}
        <div className="grid">
  {companies.length === 0 ? (
    <p className="no-data">
      No companies found based on filters
    </p>
  ) : (
    companies.map((c) => (
      <CompanyCard key={c._id} company={c} />
    ))
  )}
</div>

        {/* Pagination */}
        <Pagination
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
}