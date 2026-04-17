import "./CompanyCard.css";

export default function CompanyCard({ company }) {
  console.log(company);
  return (
    <div className="card">
      <div className="card-header">
        <div className="logo">IC</div>
        <h3>{company.name}</h3>
      </div>

      <p className="desc">
        AI-driven analytics for global logistics...
      </p>

      <div className="tags">
        <span className="tag blue">{company.industry}</span>
        <span className="tag green">{company.location}</span>
      </div>

      <p className="employees">
        Employees: {company.employees}
      </p>

      <button>View Details</button>
    </div>
  );
}