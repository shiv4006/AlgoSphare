/* eslint-disable react/prop-types */
import { FaRedo, FaEdit } from "react-icons/fa";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const Problem = ({ question }) => {

  const title = question[1];

  return (
    // <div className={`w-full bg-blue-200 text-red-400 my-2 py-2`}>
    //   {question}
    // </div>

    <tr className="w-full text-red-400 my-2 py-2">
      <td className="text-center">
        <input
          type="checkbox"
          checked={false}
          // onChange={() => toggleCompletion(problem.id)}
          className="w-5 h-5 cursor-pointer"
        />
      </td>
      <td className="py-3">{title}</td>
      <td className="py-3 px-1">
        <FaRedo className="text-yellow-400 cursor-pointer text-center w-full" />
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
