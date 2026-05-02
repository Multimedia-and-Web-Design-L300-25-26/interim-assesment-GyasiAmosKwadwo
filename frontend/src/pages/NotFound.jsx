import { useNavigate } from "react-router-dom";
import { errorPage } from "../assets/assets";
import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
        <img
          src={errorPage.error404}
          alt="Page not found"
          className="w-64 h-64 object-contain mb-6"
        />
        <p className="text-sm text-gray-400 mb-4 tracking-wide">
          1773074992738
        </p>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Page not found
        </h1>
        <p className="text-gray-500 text-center mb-8">
          The page you&apos;re looking for could not be found.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-colors"
        >
          Go back
        </button>
      </div>

      <Footer />
    </>
  );
};

export default NotFound;
