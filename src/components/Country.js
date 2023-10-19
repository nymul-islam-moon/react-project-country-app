import React from 'react';

const Country = ( props ) => {
    const { country } = props;
    const { name, flags, capital, population, area } = country;
    return (
        <artical>
            <div>
                <img src={flags.png} alt={ name.common } />
                <h3>Name : { name.common }</h3>
                <h3>Population : { population }</h3>
                <h3>Capital : { capital }</h3>
                <h3>Area : { area }</h3>
            </div>
        </artical>
    )
}

export default Country;