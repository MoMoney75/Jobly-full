import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";
import './CompanyCard.css'

function CompanyCard({ companyData}) {
  const { hasAppliedToJob, applyToJob } = useContext(UserContext);
  const [appliedJobs, setAppliedJobs] = useState([]);

  React.useEffect(() => {
    const appliedStatus = companyData.jobs.map((job) => ({
      id: job.id,
      applied: hasAppliedToJob(job.id),
    }));
    setAppliedJobs(appliedStatus);
  }, [companyData.jobs, hasAppliedToJob]);

  async function handleApply(jobId) {
    if (hasAppliedToJob(jobId)) return;

    applyToJob(jobId);

    // Update the applied status for the specific job
    setAppliedJobs((prevStatus) =>
      prevStatus.map((job) =>
        job.id === jobId ? { ...job, applied: true } : job
      )
    );
  }

  return (
  <div id="company-div" className="container-fluid">
    <div className="row">
      <div className="col-12">
            <div className="card" id="company-main">
              <div className="card-body">
              <h2 className="card-title">{companyData.name}</h2>
              <p className="card-text">{companyData.description}</p>
              <p className="card-text"> Total employees: {companyData.numEmployees}</p>
          </div>
        </div>

    </div>
      <div id="jobs-list">
          {companyData.jobs.map((j) => (
            <div className="card">
              <div className="card-header"> {j.title}</div>
                <div className="card-body"> 

                  {j.salary === null ? 
                    <h5 className="card-title"> Salary not available </h5> : <h5 className="card-title"> Salary: ${j.salary} </h5> }

                  {j.equity === null ? <p className="card-text">Equity not available</p> : <p className="card-text">Equity: {j.equity}</p>}

                  <button className="btn btn-primary" onClick={() => handleApply(j.id)} disabled={hasAppliedToJob(j.id)}>
                    {appliedJobs.find((job) => job.id === j.id)?.applied
                      ? "Applied" : "Submit application"}
                  </button>
                </div>
            </div> ))}
      </div>
    </div>
  </div>
  );
}

export default CompanyCard;

