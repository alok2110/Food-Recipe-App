import React from "react";
import "./RecipeTile.css"

const RecipeTile = ({ recipe, ind }) => {
    return(
        <>
        <div className="recipeTile">
            <img className="recipeTile__image" src={recipe["recipe"]["image"]} />
            <p className="recipeTile__image__name" key={ind}>{recipe["recipe"]["label"]}</p>
        </div>   
        </>
    )
}

export default RecipeTile;