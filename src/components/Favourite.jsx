import {useContext} from "react";
import {favourteContext} from "./CountriesPage.jsx";
import {Link} from "react-router-dom";

export const Favourite = () => {
    const {favourite, addFavourite, removeFavourite} = useContext(favourteContext)

    return (
        <div className={"favourite-container"}>
            <h2 className={"favourite-name"}>Favourite</h2>
            <div className={"favourite"}>
                {favourite.map(country => (
                    <div className={"country"} key={country.flag}>
                        <Link to={`/country/${country.name.common}`}>
                            <img className={"img"} src={country.flags.png}/>
                        </Link>
                        <div className={"fav"}>
                            <Link to={`/country/${country.name.common}`}>
                                <p>{country.name.common}</p>
                            </Link>
                            <span className={"btn-favorite"} onClick={() => removeFavourite(country)}>❌</span>
                        </div>
                    </div>
                )).reverse()}
            </div>
        </div>
    )
}
