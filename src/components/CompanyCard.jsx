import "./CompanyCard.css";

export default function CompanyCard({ company }) {
  return (
    <div className="card">
      
     
      <div className="card-header">
        <div className="logo">
          {company.name?.charAt(0)}
        </div>
        <div>
          <h3>{company.name}</h3>
          <p className="sub-text">
            {company.industry} • {company.location}
          </p>
        </div>
      </div>

      
      <p className="desc">
       {company.name || "No description available."} is well known for its expertise in {company.industry} and is based in {company.location}. With a strong commitment to innovation and excellence, {company.name} has established itself as a leader in the industry, providing top-notch services and solutions to its clients.
      </p>

      
      <div className="info">
        <div className="info-item">
          <span className="label">🏢 Industry:</span>
          <span>{company.industry}</span>
        </div>

        <div className="info-item">
          <span className="label">📍 Location:</span>
          <span>{company.location}</span>
        </div>

        <div className="info-item">
          <span className="label">👥 Employees:</span>
          <span>{company.employees}</span>
        </div>
      </div>

      
      <div className="tags">
        <span className="tag blue">{company.industry}</span>
        <span className="tag green">{company.location}</span>
      </div>

      
      <div className="actions">
        {company.website && (
          <a
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="btn link"
          >
            🌐 Website
          </a>
        )}

        <button className="btn primary">
          View Details
        </button>
      </div>
    </div>
  );
}