/* eslint-disable react/no-unescaped-entities */

import { useContext } from "react"
import { ThemeContext } from ".."

const About = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`mt-28 px-4 sm:px-16 lg:px-32 w-full`}>
      <div className={`w-full flex flex-col items-center gap-2`}>
        <h4 className={`text-xl md:text-2xl font-semibold uppercase ${theme === "dark" ? "text-[#E73879]" : "text-[#FF8C9E]"}`}>Welcome to</h4>
        <h1 className={`text-4xl md:text-5xl font-bold text-[#4E5FB5]`}>AlgoSphare</h1>
      </div>

      <div className={`mt-12 ${theme === "dark" ? "text-gray-300" : "text-gray-700"} `}>
        <p className={`md:text-lg`}>At <span className={`text-med font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>AlgoSphare</span>, we believe that structured learning is the key to mastering <span className={`text-med font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>Data Structures and Algorithms (DSA)</span>. Our platform offers <span className={`text-med font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>curated problem sheets</span> designed to help learners at all levels—whether you're preparing for coding interviews, competitive programming, or simply sharpening your problem-solving skills.</p>
        <p className={` mt-2 ${theme === "dark" ? "text-gray-200" : "text-gray-700"} text-lg`}>We categorize problems into <span className={`text-med font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>four specialized sheets</span>, ensuring a step-by-step approach to mastering concepts:</p>

        <ul className={`mt-2 list-disc pl-4`}>
          <li><span className={`text font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>Complete Sheet – </span>A comprehensive roadmap covering all essential DSA topics.</li>
          <li><span className={`text font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>Interview Sheet – </span>Focused on frequently asked coding interview questions.</li>
          <li><span className={`text font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>Algorithm Sheet – </span>Helps recognize and practice problem-solving patterns.</li>
          <li><span className={`text font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>CP Sheet – </span>Structured Codeforces problems for competitive programmers.</li>
        </ul>
      </div>

      <div className={`mt-8 ${theme === "dark" ? "text-gray-200" : "text-gray-700"} `}>
        <p>Our goal is to <span className={`text-med font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>bridge the gap</span> between theoretical knowledge and practical implementation, making your coding journey smoother and more effective.</p>
        <h2 className={`${theme === "dark" ? "text-white" : "text-black"} mt-4 font-medium`}>🚀 Start solving today and take your coding skills to the next level!</h2>
      </div>
    </div>
  )
}

export default About
