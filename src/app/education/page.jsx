import Navbar from "../../components/Navbar";
import "../style.css";

export default function Education() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200 animate-gradient p-4 sm:p-6">
        <div className="w-full max-w-[1440px] bg-white/95 backdrop-blur-lg rounded-[5px] sm:rounded-[5px] p-8 sm:p-12 shadow-[0_20px_50px_rgba(75,_85,_99,_0.7)] mx-4 sm:mx-6 border-2 border-white/30 hover:shadow-[0_20px_60px_rgba(75,_85,_99,_0.8)] transition-all duration-500">
          <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-black animate-fadeIn">
            My Education
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slideUp delay-100">
            <div className="bg-white/80 backdrop-blur-lg rounded-[5px] p-8 shadow-2xl border-2 border-white/30 hover:shadow-[0_15px_30px_rgba(75,_85,_99,_0.3)] transition-all duration-300">
              <div className="flex items-center space-x-3">
                <span className="bg-gradient-to-r from-gray-600 to-gray-800 text-white text-sm font-semibold px-3 py-1 rounded-[5px]">
                  2015
                </span>
                <h2 className="text-xl font-bold text-black">Computer Education</h2>
              </div>
              <p className="mt-4 text-lg text-gray-700">
                Diploma Course - OFFICE AUTOMATION, C, CPP &amp; Java
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-[5px] p-8 shadow-2xl border-2 border-white/30 hover:shadow-[0_15px_30px_rgba(75,_85,_99,_0.3)] transition-all duration-300">
              <div className="flex items-center space-x-3">
                <span className="bg-gradient-to-r from-gray-600 to-gray-800 text-white text-sm font-semibold px-3 py-1 rounded-[5px]">
                  2017
                </span>
                <h2 className="text-xl font-bold text-black">Secondary Education</h2>
              </div>
              <p className="mt-4 text-lg text-gray-700">
                88.6% - Holy Cross Convent Matriculation School, Dindigul - TN
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-[5px] p-8 shadow-2xl border-2 border-white/30 hover:shadow-[0_15px_30px_rgba(75,_85,_99,_0.3)] transition-all duration-300">
              <div className="flex items-center space-x-3">
                <span className="bg-gradient-to-r from-gray-600 to-gray-800 text-white text-sm font-semibold px-3 py-1 rounded-[5px]">
                  2019
                </span>
                <h2 className="text-xl font-bold text-black">Higher Education</h2>
              </div>
              <p className="mt-4 text-lg text-gray-700">
                Computer Maths - 62.66% - Holy Cross Convent Matriculation School, Dindigul - TN
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-[5px] p-8 shadow-2xl border-2 border-white/30 hover:shadow-[0_15px_30px_rgba(75,_85,_99,_0.3)] transition-all duration-300">
              <div className="flex items-center space-x-3">
                <span className="bg-gradient-to-r from-gray-600 to-gray-800 text-white text-sm font-semibold px-3 py-1 rounded-[5px]">
                  2022
                </span>
                <h2 className="text-xl font-bold text-black">Under-Graduate</h2>
              </div>
              <p className="mt-4 text-lg text-gray-700">
                B.Sc Computer Science, 74.97% - PASC College, under MK University, Dindigul - TN
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-[5px] p-8 shadow-2xl border-2 border-white/30 hover:shadow-[0_15px_30px_rgba(75,_85,_99,_0.3)] transition-all duration-300">
              <div className="flex items-center space-x-3">
                <span className="bg-gradient-to-r from-gray-600 to-gray-800 text-white text-sm font-semibold px-3 py-1 rounded-[5px]">
                  2022
                </span>
                <h2 className="text-xl font-bold text-black">Computer Education</h2>
              </div>
              <p className="mt-4 text-lg text-gray-700">
                Skilled in frameworks of ReactJs, React-Native, Flutter.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-[5px] p-8 shadow-2xl border-2 border-white/30 hover:shadow-[0_15px_30px_rgba(75,_85,_99,_0.3)] transition-all duration-300">
              <div className="flex items-center space-x-3">
                <span className="bg-gradient-to-r from-gray-600 to-gray-800 text-white text-sm font-semibold px-3 py-1 rounded-[5px]">
                  2024
                </span>
                <h2 className="text-xl font-bold text-black">Post-Graduate</h2>
              </div>
              <p className="mt-4 text-lg text-gray-700">
                Master of Computer Application in RVS CE - Dgl under Anna University - TN
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
