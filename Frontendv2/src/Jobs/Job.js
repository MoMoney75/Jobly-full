import React, { useEffect, useState }  from "react";
import {useParams} from 'react-router-dom'
import JoblyApi from "../API/JoblyAPI";
import JobCard from "./JobCard";


function Job(){
const {jobID} = useParams();
const [jobData, setJobData] = useState(null)
console.log("JOB ID:", jobID)

useEffect(() => {
    const getData = async()=> {
        try{
        const result = await JoblyApi.getJob(jobID)
        setJobData(result)

        }
        catch(err){
            console.log("Error wile trying to get job data :",err)
        }
    }
    getData();
},[jobID])

if (!jobData) {
    return <p>Loading...</p>;
  }

    return(
        <div>
            <JobCard jobData={jobData}/>
              
        </div>
    )
}

export default Job;
