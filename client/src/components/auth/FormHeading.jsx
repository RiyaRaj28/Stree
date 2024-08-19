import React from "react";

function FormHeading({heading}){
    return (
        <>
        <b className="mb-6"> {heading} </b>
        </>
    )
}

export default React.memo(FormHeading);