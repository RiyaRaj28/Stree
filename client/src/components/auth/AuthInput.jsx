import React from "react";

function AuthInput({labelText, inputFor, inputType, placeholderText}){
    return(
        <>
        <div class="mb-5 md:w-[90%] lg:w-[70%]">
            <label for={inputFor} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> {labelText} </label>
            <input type={inputType} id={inputFor} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholderText} required />
        </div>
        </>
    )
}

export default React.memo(AuthInput);