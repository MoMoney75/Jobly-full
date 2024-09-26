import React, {useState, useEffect} from "react";
import JoblyApi from "../API/JoblyAPI";
import SearchForm from "../Forms/SearchForm";
//import CompaniesCard from "./CompaniesCard";
import './CompaniesList.css'
import { Link } from "react-router-dom";


function CompaniesList() {
    const [companies, setCompanies] = useState(null)
    const [message, setMessage] = useState(null)
    useEffect(function getCompaniesOnMount() {
        console.debug("CompanyList useEffect getCompaniesOnMount");
        searchCompanies();
      }, []);
    
      async function searchCompanies(name) {
        try{
        let companies = await JoblyApi.getCompanies(name);
        if(companies.length > 0){
        console.log("companies list:", companies)
        setCompanies(companies);}
        else{
          setMessage("No matches found, Please try searching for a different company")
        }
        }

        catch(e){
          setMessage("Unable to search for companies, please try again ")
            console.log("ERROR!!:", e)
        }
      }
    
  return (
    <div>
    <div id="searchForm">
    <SearchForm searchFor={searchCompanies}/>
    </div>

    <div className="page-header">
      <h1 className="h3">Browse by company</h1>
      </div> 
      {message && message.length > 0 ? <p id="message">{message} </p>: null}
<div id="all-companies">
      {companies && companies.map(company => (
        <div className="row"> 
          <div className="col-sm-6 mb-3 mb-sm-0"> 
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{company.name}</h5>
                <p className="card-text"> {company.description}</p>
                <Link className="btn btn-primary"to={`/companies/${company.handle}`}> View company</Link>
              </div>
            </div>
          </div>
        </div>
      
      ))}
    </div>
  </div>
  );
}

export default CompaniesList;



