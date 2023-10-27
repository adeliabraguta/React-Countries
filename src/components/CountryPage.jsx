import {useParams} from "react-router-dom";
import {useContext, useState} from "react";
import {CountryContext} from "../App.jsx";
import {useCountries} from "../hooks/useCountries.js";

export const CountryPage = () => {
    const {name} = useParams()
    const {isLoading, countries, errorMessage} = useCountries(`https://restcountries.com/v3.1/name/${name}`)
    const country = countries && countries[0]
    return (
        <div>
            {country && (
                <div className={"single-country"}>
                    <h1 className={"single-country-name"}>{country.name.common}</h1>
                    <div className={"single-country-information"}>
                        <div className={"single-country-info"}>
                            <p>Official Name: </p>
                            <h3>{country.name.official}</h3>
                        </div>
                        <div className={"single-country-info"}>
                            <p>Capital: </p>
                            <h3>{country.capital}</h3>
                        </div>
                        <div className={"single-country-info"}>
                            <p>Region: </p>
                            <h3>{country.region}</h3>
                        </div>
                        <div className={"single-country-info"}>
                            <p>Population: </p>
                            <h3>{country.population} People</h3>
                        </div>
                        <div className={"single-country-info"}>
                            <p>Native Language: </p>
                            <h3>{country.languages[Object.keys(country.languages)[0]]}</h3>
                        </div>
                    </div>
                    <img className={"img"} src={country.flags.png}/>

                    <div className={"single-country-info-last"}>
                        <p>Location: </p>
                        <a href={country.maps.googleMaps}>{country.maps.googleMaps}</a>
                    </div>
                </div>
            )
            }
        </div>
    )
}