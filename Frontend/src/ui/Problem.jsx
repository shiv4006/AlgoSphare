/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { FaEdit } from "react-icons/fa";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { ThemeContext } from "..";
import { useContext } from "react";

const Problem = ({ question }) => {

  const { theme } = useContext(ThemeContext);

  const title = question.title;
  // const description = question.description;
  // const link = question.link;

  console.log(question);

  return (
    // <div className={`w-full bg-blue-200 text-red-400 my-2 py-2`}>
    //   {question}
    // </div>

    <tr className={`w-full my-2 py-2 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
      <td className="text-center">
        <input
          type="checkbox"
          checked={false}
          // onChange={() => toggleCompletion(problem.id)}
          className="w-5 h-5 cursor-pointer"
        />
      </td>
      <Link><td className="py-3">{title}</td></Link>
      <td className="py-3 px-1">
        <i className="fa-solid fa-arrow-up-right-from-square cursor-pointer text-center w-full"></i>
      </td>
      <td className="py-3 px-1">
        <FaEdit className="text-gray-400 cursor-pointer text-center w-full" />
      </td>
      <td className="py-3 px-1">
        {
          title.length > 20 ? (
            <AiFillStar
              className="text-yellow-400 cursor-pointer text-center w-full"
            // onClick={() => toggleRevision(problem.id)}
            />
          ) : (
            <AiOutlineStar
              className="text-gray-400 cursor-pointer text-center w-full"
            // onClick={() => toggleRevision(problem.id)}
            />
          )
        }
      </td>
    </tr>
  )
}

export default Problem
