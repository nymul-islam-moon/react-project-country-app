import React from 'react';

import style from "./country.module.css";

const Country = ( props ) => {
    const { country } = props;
    const { name, flags, capital, population, area, region, altSpellings } = country;
    const handleRemoveCountry = ( name ) => {
        props.onRemoveCountry(name);
    }

    return (
        <article className={style.country}>
            <div>
                <img src={flags.png} className={style.flag} alt={ name.common } />
                <h3>Name : { name.common }</h3>
                <h3>Region Name : { region }</h3>
                <h3>Experiment : { name.nativeName?.fra?.official ? name.nativeName?.fra?.official : 'N/A' }</h3>
                <h3>Population : { population }</h3>
                <h3>Capital : { capital }</h3>
                <h3>Area : { area }</h3>
                <button className={style.btn} onClick={() => {
                    handleRemoveCountry( name.common )
                }}>Remove {name.common}</button>
            </div>
        </article>
    )
}

export default Country;