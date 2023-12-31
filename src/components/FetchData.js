import React, {useEffect, useState} from "react";

const FetchData = ( url ) => {
    const [ isLoading, setIsLoading ] = useState( true );
    const [ error, setError ] = useState( null );
    const [ countries, setCountries ] = useState([]);
    const [ filteredCountries, setFilteredCountries ] = useState( countries );

    const fetchData = async ( url ) => {
        setIsLoading( true );
        try {
            const response = await fetch( url );
            const data = await response.json();
            setCountries( data );
            setFilteredCountries( data );
            setIsLoading( false );
            setError( null );
        } catch (err) {
            setIsLoading( false );
            setError( err );
        }
    }
    useEffect(() => {
        fetchData(url);
    }, []);

    const handleRemoveCountry = ( name ) => {
        const filter = filteredCountries.filter( (country) => country.name.common !== name );

        setFilteredCountries((filter));
    }

    const handleSearch = ( searchValue ) => {
        let value = searchValue.toLowerCase();
        const newCountries = countries.filter((country) => {
            const countryName = country.name.common.toLowerCase();
            return countryName.startsWith(value);
        });
        setFilteredCountries(newCountries);
    }
    return isLoading, error, data;
}

export default FetchData;