/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { ThemeContext } from "..";
import List from './List'

const ProblemsList = ({ id, topicOpen, setTopicOpen, problemSet }) => {

  const [difficultyOpen, setDifficultyOpen] = useState(-1);

  const topic = problemSet.data_structure[0].toUpperCase() + problemSet.data_structure.slice(1);
  const problems = problemSet.problems;

  // console.log(problems);

  const { theme } = useContext(ThemeContext);

  return (
    <li className={`w-full ${theme === "dark" ? "bg-[#3C3C3C]" : "bg-[#C3C3C3]"} my-4 md:my-5 rounded-lg ${topicOpen === id ? "pt-4 border-b border-b-blue-300" : "py-4"} border ${theme === "dark" ? "border-gray-600" : "border-gray-400"}`}>
      <button onClick={() => { setTopicOpen(id === topicOpen ? "" : id) }} className={`w-full flex justify-between items-center border-none outline-none px-4`}>
        <span className={`w-[90%] ${theme === "dark" ? "text-white" : "text-black"} text-left text-base md:text-lg font-medium`}>{topic}</span>
        <span className={`font-medium ${theme === "dark" ? "text-gray-400" : "text-gray-100"} pr-2`}>8/10</span>
        {
          topicOpen === id ?
            <i className={`fa-solid fa-minus text-xl md:mr-2 ${theme === "dark" ? "text-black" : "text-white"}`}></i>
            :
            <i className={`fa-solid fa-plus text-xl md:mr-2 ${theme === "dark" ? "text-black" : "text-white"}`}></i>
        }
      </button>
      <div className={`w-full text-sm md:text-base text-left flex justify-center ${theme === "dark" ? "text-gray-300" : "text-gray-700"} text-gray-300 font-normal rounded-b-lg transition-all 300 ease-linear ${open === id ? `${theme === "dark" ? "bg-[#222]" : "bg-[#ddd]"} mt-4` : ""}`}>
        {
          topicOpen === id && <ul className="w-[95%] py-5">
            {
              // Object.entries(problems).map((curr, index) => {
              //   return <List key={index} curr={curr} id={index} difficultyOpen={difficultyOpen} setDifficultyOpen={setDifficultyOpen} />
              // })
              Object.entries(problems).map((item, index) => {
                return <List key={index} curr={item} id={index} difficultyOpen={difficultyOpen} setDifficultyOpen={setDifficultyOpen} />
              })
            }
          </ul>
        }
      </div>
    </li>
  )
}

export default ProblemsList
