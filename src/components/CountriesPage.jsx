import {SearchCountries} from "./SearchCountries.jsx";
import {Countries} from "./Countries.jsx";
import {Favourite} from "./Favourite.jsx";
import {createContext, useReducer} from "react";

export const favourteContext = createContext()
export const CountriesPage = () => {
    const initialState = {
        favourite: []
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                if (!state.favourite.some(country => country.name.common === action.payload.name.common)) {
                    return {
                        ...state,
                        favourite: [...state.favourite, action.payload]
                    }
                }
                return state
            case "REMOVE":
                return {
                    ...state,
                    favourite: state.favourite.filter((country) => country.name.common !== action.payload.name.common)
                }
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    const addFavourite = (country) => {
        dispatch({type: "ADD", payload: country});
    };

    const removeFavourite = (country) => {
        dispatch({type: "REMOVE", payload: country});
    };
    return (
        <div className={"container"}>
            <favourteContext.Provider value={{favourite: state.favourite, addFavourite, removeFavourite}}>
                <div>
                    <SearchCountries/>
                    <Countries/>
                </div>
                <Favourite/>
            </favourteContext.Provider>

        </div>
    )
}