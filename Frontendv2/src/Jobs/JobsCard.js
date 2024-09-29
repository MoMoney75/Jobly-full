import React from "react"
import { Link } from "react-router-dom"
function JobsCard({jobs, message}){

    return(
        <div>

    <div className="page-header">
      <h1 className="h3">Browse by job title</h1>
      </div> 

          {message && message.length > 0 ? <p id="message">{message}</p> : null}

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