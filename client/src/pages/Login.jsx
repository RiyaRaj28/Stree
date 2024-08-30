import LoginForm from "../components/auth/LoginForm";

function Login(){
    return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-500 ">
      <LoginForm className='w-full'/>
    </div>
  );
}

export default Login;

