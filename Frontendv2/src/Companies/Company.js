import React, { useEffect, useState }  from "react";
import {useParams,Link} from 'react-router-dom'
import JoblyApi from "../API/JoblyAPI";
import CompanyCard from "./CompanyCard";

function CompanyDetails(){
const {company} = useParams();
const [companyData, setCompanyData] = useState(null);
const [errors,setErrors] = useState([])
useEffect(() => {
    const getData = async()=> {
        try{
        const result = await JoblyApi.getCompany(company)
        setCompanyData(result)
        console.log(result)
        }
        catch(err){
            console.error("Error fetching company data:", err);
        }
    }
    getData();
},[company])

if (!companyData) {
    return <p>Loading...</p>;
  }

    return(
        <div>
            <CompanyCard companyData={companyData}/>
        </div>
    )
}

export default CompanyDetails;
