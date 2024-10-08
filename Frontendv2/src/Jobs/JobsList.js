import React, {useState, useEffect} from "react";
import JoblyApi from "../API/JoblyAPI";
import JobsCard from "./JobsCard";
import SearchForm from "../Forms/SearchForm";

function JobsList() {
    const [jobs, setJobs] = useState(null)
    const [message, setMessage] = useState(null)
    useEffect(function getJobs() {
        searchJobs();
      }, []);
    
      async function searchJobs(title) {
        try{
        let jobs = await JoblyApi.getJobs(title);
        if(jobs.length > 0){
        setJobs(jobs)
        }

        else{
          setMessage("No matches found")
        }
        }
        catch(e){
          setMessage("Unable to find any jobs, please try again")
        }
      }
    
  return (
    <div>
          <div id="searchForm">
        <SearchForm  searchFor={searchJobs}/>
          </div>
          <div>
        <JobsCard message={message} jobs={jobs} />
        </div>
    </div>
  );
}

export default JobsList;

