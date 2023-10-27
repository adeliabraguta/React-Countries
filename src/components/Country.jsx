import {favourteContext} from "./CountriesPage.jsx";
import {useContext} from "react";
import {CountryPage} from "./CountryPage.jsx";
import {Link} from "react-router-dom";

export const Country = ({country}) => {
    const {favourite, addFavourite, removeFavourite} = useContext(favourteContext)
    return (
        <div className={"country"} key={country.flag}>
            <Link to={`/country/${country.name.common}`}>
                <img className={"img"} src={country.flags.png}/>
            </Link>

            <div className={"fav"}>
                <Link to={`/country/${country.name.common}`}>
                    <p>{country.name.common}</p>
                </Link>
                {favourite.some(
                    (favCountry) => favCountry.name.common === country.name.common
                ) ? (
                    <span className={"btn-favorite"} onClick={() => removeFavourite(country)}>❌</span>
                ) : (
                    <span className={"btn-favorite"} onClick={() => addFavourite(country)}>❤️</span>
                )}
            </div>
        </div>
    )
}
