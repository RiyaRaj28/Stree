import RegisterForm from "../components/auth/RegisterForm";

function Register(){
    return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-500 ">
      <RegisterForm className='w-full'/>
    </div>
  );
}

export default Register;
