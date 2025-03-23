import Navbar from "../../components/Navbar";
import "../style.css";

export default function Activities() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200 animate-gradient p-4 sm:p-6">
        <div className="w-full max-w-[1440px] bg-white/95 backdrop-blur-lg rounded-[5px] sm:rounded-[5px] p-8 sm:p-12 shadow-[0_20px_50px_rgba(75,_85,_99,_0.7)] mx-4 sm:mx-6 border-2 border-white/30 hover:shadow-[0_20px_60px_rgba(75,_85,_99,_0.8)] transition-all duration-500">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 lg:mb-12 text-center text-black animate-fadeIn">
            My Extra Activities
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 animate-slideUp delay-100">
            <div className="bg-white/80 backdrop-blur-lg rounded-[5px] p-4 sm:p-6 lg:p-8 shadow-2xl border-2 border-white/30 hover:shadow-[0_15px_30px_rgba(75,_85,_99,_0.3)] transition-all duration-300">
              <div className="flex items-center space-x-3">
                <span className="bg-gradient-to-r from-gray-600 to-gray-800 text-white text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-[5px]">
                  2019
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-black">Workshop</h2>
              </div>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-700">
                Participated in Two Days Hands-on Workshop on "Recent Developments in Databases".
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-[5px] p-4 sm:p-6 lg:p-8 shadow-2xl border-2 border-white/30 hover:shadow-[0_15px_30px_rgba(75,_85,_99,_0.3)] transition-all duration-300">
              <div className="flex items-center space-x-3">
                <span className="bg-gradient-to-r from-gray-600 to-gray-800 text-white text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-[5px]">
                  2020
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-black">Workshop</h2>
              </div>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-700">
                Participated in the "State level Workshop on IoT (4.0)".
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-[5px] p-4 sm:p-6 lg:p-8 shadow-2xl border-2 border-white/30 hover:shadow-[0_15px_30px_rgba(75,_85,_99,_0.3)] transition-all duration-300">
              <div className="flex items-center space-x-3">
                <span className="bg-gradient-to-r from-gray-600 to-gray-800 text-white text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-[5px]">
                  2020
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-black">Workshop</h2>
              </div>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-700">
                Participated in the workshop of "Part of Computer Technology in Tamil learning and Teaching".
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-[5px] p-4 sm:p-6 lg:p-8 shadow-2xl border-2 border-white/30 hover:shadow-[0_15px_30px_rgba(75,_85,_99,_0.3)] transition-all duration-300">
              <div className="flex items-center space-x-3">
                <span className="bg-gradient-to-r from-gray-600 to-gray-800 text-white text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-[5px]">
                  2020
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-black">Tech Meet</h2>
              </div>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-700">
                Participated & Won I prize in PAPER PRESENTATION
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-[5px] p-4 sm:p-6 lg:p-8 shadow-2xl border-2 border-white/30 hover:shadow-[0_15px_30px_rgba(75,_85,_99,_0.3)] transition-all duration-300">
              <div className="flex items-center space-x-3">
                <span className="bg-gradient-to-r from-gray-600 to-gray-800 text-white text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-[5px]">
                  2020
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-black">Tech Feast</h2>
              </div>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-700">
                Participated & Won prize in Quiz competition in Intercollegiate Meet
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-[5px] p-4 sm:p-6 lg:p-8 shadow-2xl border-2 border-white/30 hover:shadow-[0_15px_30px_rgba(75,_85,_99,_0.3)] transition-all duration-300">
              <div className="flex items-center space-x-3">
                <span className="bg-gradient-to-r from-gray-600 to-gray-800 text-white text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-[5px]">
                  2021
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-black">Examination</h2>
              </div>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-700">
                Passed MADHYAMA Examination in First Class
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
