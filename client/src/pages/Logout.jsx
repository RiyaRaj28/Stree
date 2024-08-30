import LogoutForm from "../components/auth/LoginForm";

function Logout(){
    return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-500 ">
      <LogoutForm className='w-full'/>
    </div>
  );
}

export default Logout;

