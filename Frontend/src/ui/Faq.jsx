/* eslint-disable react/prop-types */

import { useContext } from "react";
import { ThemeContext } from "..";

const Faq = ({ data, open, setOpen }) => {

  const { id, question, answer } = data;
  const {theme} = useContext(ThemeContext);

  return (
    <li className={`w-full ${theme === "dark" ? "bg-[#3C3C3C]" : "bg-[#C3C3C3]"} my-4 md:my-5 rounded-lg ${open === id ? "pt-4 border-b border-b-blue-300" : "py-4" } border ${theme === "dark" ? "border-gray-600" : "border-gray-400"}`}>
      <button onClick={() => { setOpen(id === open ? "" : id) }} className={`w-full flex justify-between items-center border-none outline-none px-4`}>
        <span className={`w-[90%] ${theme === "dark" ? "text-white" : "text-black"} text-left text-base md:text-lg font-medium`}>{question}</span>
        {
          open === id ?
            <i className={`fa-solid fa-minus text-xl md:mr-2 ${theme === "dark" ? "text-black" : "text-white"}`}></i>
            :
            <i className={`fa-solid fa-plus text-xl md:mr-2 ${theme === "dark" ? "text-black" : "text-white"}`}></i>
        }
      </button>
      <div className={`w-full text-sm md:text-base text-left ${theme === "dark" ? "text-gray-300" : "text-gray-700"} text-gray-300 font-normal rounded-b-lg transition-all 300 ease-linear ${open === id ? `${theme === "dark" ? "bg-[#222]" : "bg-[#ddd]"} mt-4` : ""}`}>
        {open === id && <div className="w-[95%] md:w-[80%] ml-4 py-5">{answer}</div>}
      </div>
    </li>
  )
}

export default Faq
