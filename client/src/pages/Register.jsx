import RegisterForm from "../components/auth/RegisterForm";

function Register() {
  return (
    <div className="flex flex-col md:flex-row gap-0 lg:gap-8 h-full lg:h-screen bg-gray-900">
      <div className="w-full md:w-1/2 flex items-center justify-center relative overflow-hidden m-2">
        <img 
          src="/welcomeimg.png" 
          alt="welcome" 
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8">
        <RegisterForm className="w-full max-w-md" /> 
      </div>
    </div>
  );
}

export default Register; 