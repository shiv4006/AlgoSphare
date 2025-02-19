/* eslint-disable react/no-unescaped-entities */

import { useContext } from "react"
import { ThemeContext } from "../.."

const Contact = () => {

  const {theme} = useContext(ThemeContext);

  return (
    <div className={`mt-28 px-4 sm:px-16 lg:px-32 w-full`}>
      <div className={`w-full flex justify-center`}>
        <h3 className={`text-2xl md:text-3xl font-semibold uppercase ${theme === "dark" ? "text-[#E73879]" : "text-[#FF8C9E]"}`}>Contact Us</h3>
      </div>
      
      <div className={`mt-12 ${theme === "dark" ? "text-gray-300" : "text-gray-700"} `}>
        <p className={`text-base font-medium md:font-normal md:text-lg`}>Have questions, suggestions, or feedback? We'd love to hear from you!</p>
        <div className={`mt-4 flex flex-col gap-2`}>
          <div className={`flex gap-2`}>
            <p><i className="fa-solid fa-envelope mr-1"></i><span className={`font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>Email:</span></p>
            <a href="mailto:support@algosphare.com" className="text-blue-400 hover:text-blue-300 hover:underline">support@algosphare.com</a>
          </div>
          <div className={`flex gap-2`}>
            <p><i className="fa-solid fa-globe mr-1"></i><span className={`font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>Website:</span></p>
            <a href="https://algosphare.com" className="text-blue-400 hover:text-blue-300 hover:underline">algosphare.com</a>
          </div>
          <div className={`flex gap-2`}>
            <p><i className="fa-solid fa-location-dot mr-1"></i><span className={`font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>Location:</span></p>
            <span>Gaya, Bihar, India</span>
          </div>
        </div>
      </div>

      <div className={`mt-8`}>
        <p className="">Feel free to reach out to us for:</p>
        <ul className={`mt-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"} `}>
          <li>✅ Doubts or queries about DSA problem sheets</li>
          <li>✅ Collaboration opportunities</li>
          <li>✅ Bug reports or feature requests</li>
        </ul>
      </div>

      <div className={`mt-8 font-semibold`}>
        <p>Join us on our journey to make coding preparation seamless! 🚀</p>
      </div>
    </div>
  )
}

export default Contact
