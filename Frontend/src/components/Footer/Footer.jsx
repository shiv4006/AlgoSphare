import { useContext } from "react"
import { ThemeContext } from "../.."
import { Link } from "react-router-dom";

const Footer = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <div className="mt-20 mb-16 px-8 sm:px-16 lg:px-32">
      <hr className={`h-[1.5px] rounded-sm border-none ${theme === "dark" ? "bg-gray-400" : "bg-gray-600"}`} />

      <div className={`${theme === "dark" ? "text-white" : "text-black"} flex flex-col sm:flex-row justify-between gap-4 md:gap-8 lg:gap-16 xl:gap-48 mt-12 items-center sm:items-start`}>
        <div className="w-[90%] sm:w-[30%] text-center sm:text-left">
          <h1 className="text-2xl font-medium">AlgoSphare</h1>
          <p className={`mt-4 text-sm ${theme === "dark" ? "text-gray-200" : "text-gray-700"} font-regular`}>AlgoSphere simplifies your DSA journey with curated problems and progress tracking to boost your coding skills.</p>
          <div className="mt-4 flex justify-center sm:justify-start gap-4">
            <span>L</span>
            <span>Y</span>
            <span>I</span>
            <span>F</span>
          </div>
        </div>

        <div className="mt-8 sm:mt-0 flex flex-1 flex-col sm:flex-row sm:items-start gap-8 sm:gap-1 justify-between text-left">
          <div>
            <h4 className="text-lg text-[#3251EF] underline font-medium mb-4">Company</h4>
            <div className={`${theme === "dark" ? "text-gray-200" : "text-gray-700"} font-light flex flex-col gap-1`}>
              <Link to={'/about'}><p className={`cursor-pointer ${theme === "dark" ? "hover:text-white" : "hover:text-black"} hover:font-normal`}>About Us</p></Link>
              <Link to={'/contact'}><p className={`cursor-pointer ${theme === "dark" ? "hover:text-white" : "hover:text-black"} hover:font-normal`}>Contact Us</p></Link>
              <Link to={'/t&c'}><p className={`cursor-pointer ${theme === "dark" ? "hover:text-white" : "hover:text-black"} hover:font-normal`}>Terms & Conditions</p></Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg text-[#3251EF] underline font-medium mb-4">DSA Sheets</h4>
            <div className={`${theme === "dark" ? "text-gray-200" : "text-gray-700"} font-light flex flex-col gap-1`}>
              <Link to={"/dsa"}><p className={`cursor-pointer ${theme === "dark" ? "hover:text-white" : "hover:text-black"} hover:font-normal`}>Complete Sheet</p></Link>
              <Link to={"/interview"}><p className={`cursor-pointer ${theme === "dark" ? "hover:text-white" : "hover:text-black"} hover:font-normal`}>Interview Sheet</p></Link>
              <Link to={"/algorithm"}><p className={`cursor-pointer ${theme === "dark" ? "hover:text-white" : "hover:text-black"} hover:font-normal`}>Pattern Sheet</p></Link>
              <Link to={"/cp"}><p className={`cursor-pointer ${theme === "dark" ? "hover:text-white" : "hover:text-black"} hover:font-normal`}>CP Sheet</p></Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg text-[#3251EF] underline font-medium mb-4">DSA Playlist</h4>
            <div className={`${theme === "dark" ? "text-gray-200" : "text-gray-700"} font-light flex flex-col gap-1`}>
              <a href="#"><p className={`cursor-pointer ${theme === "dark" ? "hover:text-white" : "hover:text-black"} hover:font-normal`}>Array Series</p></a>
              <a href="#"><p className={`cursor-pointer ${theme === "dark" ? "hover:text-white" : "hover:text-black"} hover:font-normal`}>LinkedList Series</p></a>
              <a href="#"><p className={`cursor-pointer ${theme === "dark" ? "hover:text-white" : "hover:text-black"} hover:font-normal`}>Tree Series</p></a>
              <a href="#"><p className={`cursor-pointer ${theme === "dark" ? "hover:text-white" : "hover:text-black"} hover:font-normal`}>DP Series</p></a>
              <a href="#"><p className={`cursor-pointer ${theme === "dark" ? "hover:text-white" : "hover:text-black"} hover:font-normal`}>Graph Series</p></a>
              <a href="#"><p className={`cursor-pointer ${theme === "dark" ? "hover:text-white" : "hover:text-black"} hover:font-normal`}>Binary Search Series</p></a>
            </div>
          </div>
        </div>
      </div>

      <hr className={`mt-12 h-[0.5px] rounded-sm border-none ${theme === "dark" ? "bg-gray-600" : "bg-gray-400"}`} />
      <div className={`mt-4 ${theme === "dark" ? "text-gray-400" : "text-gray-600"} flex justify-center`}>
        <p className="text-xs">Copyright © 2025 <span>AlgoSphare</span> | All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
