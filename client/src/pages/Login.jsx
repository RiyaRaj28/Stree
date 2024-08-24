import React from "react";
import AuthInput from "../components/auth/AuthInput";
import FormHeading from "../components/auth/FormHeading";
import FormSubmit from "../components/auth/FormSubmit";

function Login() {
    return (
        <div className="flex w-full justify-center items-center min-h-screen p-8 rounded-lg bg-pink-500">
            <form className="w-[35%] rounded-lg shadow-lg p-4 bg-gray-800 flex flex-col items-center">
                <FormHeading heading={"Login"} />
                <AuthInput labelText={"Enter your username"} placeholderText={"Your Username"} inputType={"text"} inputFor={"username"} />
                <AuthInput labelText={"Enter your password"} placeholderText={"********"} inputType={"password"} inputFor={"password"} />
                <FormSubmit />
            </form>
        </div>
    );
}

export default React.memo(Login);
