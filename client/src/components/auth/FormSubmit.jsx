import React from "react"

function FormSubmitBtn(){
    return (
        <>
        <button type="submit" class="text-white bg-gray-700 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </>
    )
}

export default React.memo(FormSubmitBtn);