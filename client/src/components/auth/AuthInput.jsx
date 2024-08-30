import React from "react";

function AuthInput({ labelText, inputFor, inputType, placeholderText }) {
    return (
        <div className="mb-5 md:w-[90%] lg:w-[70%]">
            <label htmlFor={inputFor} className="block mb-2 text-sm font-semibold text-purple-900 dark:text-purple-200">
                {labelText}
            </label>
            <input
                type={inputType}
                id={inputFor}
                className="border outline-none bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-2 focus:border-purple-500 block w-[100%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                placeholder={placeholderText}
                required
            />
        </div>
    );
}

export default React.memo(AuthInput);
