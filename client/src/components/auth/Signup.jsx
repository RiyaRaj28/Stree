import React from "react";
import AuthInput from "./AuthInput";
import FormHeading from "./FormHeading";
import FormSubmit from "./FormSubmit";

function Signup(){
    return (
        <>
        <body className="flex w-full justify-center items-center min-h-screen">
            <form class="w-[35%] rounded-lg shadow-lg p-4 bg-gray-200 flex flex-col items-center">
                <FormHeading heading={"Sign Up"} />
                <AuthInput labelText={"Enter your email"} placeholderText={"abc@gmail.com"} inputType={"email"} inputFor={"email"} />
                <AuthInput labelText={"Enter your password"} placeholderText={"********"} inputType={"password"} inputFor={"password"} />
                <AuthInput labelText={"Enter your first name"} placeholderText={"Your first Name"} inputType={"text"} inputFor={"firstName"} />
                <AuthInput labelText={"Enter your last name"} placeholderText={"Your Last Name"} inputType={"text"} inputFor={"LastName"} />
                <FormSubmit />
            </form>   
        </body>
        
        </>
    )
}

export default React.memo(Signup);