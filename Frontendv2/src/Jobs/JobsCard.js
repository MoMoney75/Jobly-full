import React from "react"
import { Link } from "react-router-dom"
function JobsCard({jobs}){

    return(
        <div>

    {jobs && jobs.map(j => (

        <div className="row"> 
          <div className="col-sm-6 mb-3 mb-sm-0"> 
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{j.title}</h5>
                <p className="card-text"> {j.companyName}</p>
                <Link className="btn btn-primary"to={`/jobs/${j.id}`}> View job</Link>
              </div>
            </div>
          </div>
        </div>
    ))}
    </div>
    )
}

export default JobsCard