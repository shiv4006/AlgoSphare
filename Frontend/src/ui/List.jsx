/* eslint-disable react/prop-types */

import { useContext } from "react"
import { ThemeContext } from ".."
import Problem from "./Problem";

const List = ({ id, difficultyOpen, setDifficultyOpen, curr }) => {

  // console.log(curr);
  const difficulty = curr[0][0].toUpperCase() + curr[0].slice(1);
  const list = curr[1];

  const { theme } = useContext(ThemeContext);

  return (
    // <li className="w-[95%] md:w-[80%] ml-4 py-5">{name}</li>
    <li className={`w-full ${theme === "dark" ? "bg-zinc-900" : "bg-zinc-100"} my-4 md:my-5 rounded-lg ${difficultyOpen === id ? "pt-4 border-b border-b-blue-300" : "py-4"} border ${theme === "dark" ? "border-gray-600" : "border-gray-400"}`}>
      <button onClick={() => { setDifficultyOpen(id === difficultyOpen ? -1 : id) }} className={`w-full flex justify-between items-center border-none outline-none px-4`}>
        <span className={`w-[90%] ${theme === "dark" ? "text-white" : "text-black"} text-left text-base md:text-lg font-medium`}>{difficulty}</span>
        <span className={`font-medium text-gray-400 pr-2`}>8/10</span>
        {
          difficultyOpen === id ?
            <i className={`fa-solid fa-minus text-xl md:mr-2 ${theme === "dark" ? "text-gray-600" : "text-gray-300"}`}></i>
            :
            <i className={`fa-solid fa-plus text-xl md:mr-2 ${theme === "dark" ? "text-gray-600" : "text-gray-300"}`}></i>
        }
      </button>
      <div className={`w-full text-sm md:text-base text-left flex justify-center ${theme === "dark" ? "text-gray-300" : "text-gray-700"} text-gray-300 font-normal rounded-b-lg transition-all 300 ease-linear ${open === id ? `${theme === "dark" ? "bg-[#222]" : "bg-[#ddd]"} mt-4` : ""}`}>
        {
          difficultyOpen === id && <table className="w-[95%] py-5 mt-8">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-center py-3">STATUS</th>
                <th className="text-center py-3">PROBLEM</th>
                <th className="text-center py-3">PRACTICE</th>
                <th className="text-center py-3">NOTES</th>
                <th className="text-center py-3">REVISION</th>
              </tr>
            </thead>
            <tbody>
              {
                Object.entries(list).map((question, index) => {
                  return <Problem key={index} question={question} />
                })
              }
              <tr>
                <td colSpan="5" className="py-3 border-gray-700"></td>
              </tr>
            </tbody>
          </table>
        }
      </div>
    </li>
  )
}

export default List
