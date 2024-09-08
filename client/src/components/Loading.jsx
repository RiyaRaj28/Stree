import Footer from "./Footer";
import Header from "./Header";

const Loading = () => {
  return (
    <>
    <Header/>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="animate-spin rounded-full h-20 w-16 border-t-4 border-pink-500 border-solid mb-4"></div>
            <p className="text-gray-700 text-xl">Loading...</p>
        </div>
    <Footer/>
    </>
  );
};

export default Loading;
