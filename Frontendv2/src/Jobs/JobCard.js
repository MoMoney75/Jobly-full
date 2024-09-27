import React, {useState,useContext} from "react";
import UserContext from "../Context/UserContext";
import {Link} from 'react-router-dom'
import './JobsCard.css'

function JobCard({jobData}){
  const { hasAppliedToJob, applyToJob } = useContext(UserContext);
  const [applied, setApplied] = useState();


  React.useEffect(function updateAppliedStatus() {

    setApplied(hasAppliedToJob(jobData.id));
  }, [jobData.id, hasAppliedToJob]);

  /** Apply for a job */
  async function handleApply(evt) {
    if (hasAppliedToJob(jobData.id)) return;
    applyToJob(jobData.id);
    setApplied(true);
  }
  return (
    <div id="company-div" className="container-fluid">
      <div className="row">
        <div className="col-12">
              <div className="card" id="company-main">
                <div className="card-body">
                <h2 className="card-title">{jobData.title}</h2>

                {jobData.salary === null ? 
           <p className="card-text">Salary not available</p> :
           <p className="card-text"> Salary: ${jobData.salary}</p>}

                {jobData.equity === null?  
                  <p className="card-text">Equity not available</p> :    
                  <p className="card-text">Equity: {jobData.equity}</p>}

                  <Link id="company_link"className="card-text" to={`/companies/${jobData.company.handle}`}>
                    {jobData.company.name} 
                  </Link>
                <p className="card-text h5">{jobData.company.description}</p>

                     <button className="btn btn-primary" onClick={handleApply}
                      disabled={applied}>  {applied ? "Applied" : "Apply" }
                      </button>
            </div>
          </div>
  
      </div>
      </div>
    </div>
    );
}

export default JobCard;
