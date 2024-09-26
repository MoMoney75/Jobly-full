import React, {useState} from "react";
import './searchForm.css'
function SearchForm({searchFor}){
const [formData,setFormData] = useState("");


const handleChange = (evt) =>{
const SearchTerm = evt.target.value;
 setFormData(SearchTerm)
}

const handleSubmit = (evt) => {
    evt.preventDefault();
    searchFor(formData)
    setFormData("")
    
}

    return(
        <div className="container-fluid" id="search-div">
            <form role="search" id="searchForm" onSubmit={handleSubmit}>

                    <input 
                        className="form-control me-2"
                        aria-label="Search"
                        type="search"
                        name="searchTerm"
                        id="searchTerm"
                        placeholder="Search..."
                        onChange={handleChange}
                        value={formData}>

                    </input>

                    <button className="btn btn-outline-success" type="submit ">Search</button>
            </form>
        
        </div>
    )
}

export default SearchForm;