import React, { useEffect, useState }  from "react";
import {useParams,Link} from 'react-router-dom'
import JoblyApi from "../API/JoblyAPI";
import CompanyCard from "./CompanyCard";
function CompanyDetails(){
const {company} = useParams();
const [companyData, setCompanyData] = useState(null);
useEffect(() => {
    const getData = async()=> {
        try{
        const result = await JoblyApi.getCompany(company)
        setCompanyData(result)
        console.log(result)
        }
        catch(e){
            console.log("Error wile trying to get company data :",e)
            return e;
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
