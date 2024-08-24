import React from "react";

function FormHeading({heading}){
    return (
        <>
        <h1 className="mb-6b text-white text-xl m-4 font-bold font-serif"> {heading} </h1>
        </>
    )
}

export default React.memo(FormHeading);