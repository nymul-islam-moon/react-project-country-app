import React, {useState} from "react";

const FetchData = ( url ) => {
    const [ isLoading, setIsLoading ] = useState( true );
    const [ error, setError ] = useState( null );
    const [ data, setData ] = useState([]);


    const fetchData = async ( url ) => {
        setIsLoading( true );
        try {
            const response = await fetch( url );
            const data = await response.json();
            setData( data );
            setFilteredData( data );
            setIsLoading( false );
            setError( null );
        } catch (err) {
            setIsLoading( false );
            setError( err );
        }
    }
    return isLoading, error, data;
}

export default FetchData;