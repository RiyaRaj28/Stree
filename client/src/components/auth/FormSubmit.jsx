import React from "react"

function FormSubmitBtn(){
    return (
        <>
        <button type="submit" className="text-white bg-purple-600 hover:bg-purple-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
            Submit
        </button>
        </>
    )
}

export default React.memo(FormSubmitBtn);
