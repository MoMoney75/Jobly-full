import React from "react"
import { Link } from "react-router-dom"
<<<<<<< HEAD
function JobsCard({jobs}){
  console.log("all jobs:", jobs)

    return(
        <div>

=======
import './JobsCard.css'
function JobsCard({message, jobs}){
    return(
        <div>
      <div className="page-header">
        <h1 className="h3">Browse by job listings</h1>
      </div> 
      { message && message.length > 0 ? <div id="message"> <p>{message}</p> </div> : null}
      <div id="all-jobs">
>>>>>>> cc7c624 (update(frontend): add files)
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
<<<<<<< HEAD
    ))}
    </div>
=======
        
    ))}
    </div>
    </div>
>>>>>>> cc7c624 (update(frontend): add files)
    )
}

export default JobsCard