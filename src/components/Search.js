import React, {useState, useEffect} from "react";

const Search = ( props ) => {

    const [ searchText, setSearchText ] = useState("");

    const handleChange = ( e ) => {
        setSearchText( e.target.value );
    }

    /**
     * Every rendering it will find immediate data
     */
    useEffect(() => {
        props.onSearch( searchText );
    }, [searchText]);
    

    return (
        <div style={{ textAlign: "center" }}>
            <input type="text" placeholder="Search Country" value={searchText} onChange={handleChange}/>
        </div>
    )
}

export default Search;