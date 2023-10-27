import {useContext, useReducer, useState} from "react";
import {CountryContext} from "../App.jsx";
import {Country} from "./Country.jsx";

export const Countries = () => {
    const {isLoading, countries, errorMessage} = useContext(CountryContext)
    return (
        <div>
            <div>{isLoading && <p>Is loading...</p>}</div>
            <div>{errorMessage && <p>{errorMessage}</p>}</div>
            <div className={"countries"}>
                {countries && countries.map(country => (
                    <Country country={country} key={country.flag}/>
                ))}
            </div>
        </div>
    )
}