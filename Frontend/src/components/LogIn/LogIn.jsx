/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'
import googleImg from '../../assets/google.png'
import { useContext } from 'react'
import { ThemeContext } from '../..'

const LogIn = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`mt-20 px-4 sm:px-16 lg:px-32 h-[89vh] w-full flex justify-center items-center ${theme === "dark" ? "bg-zinc-900" : "bg-zinc-100"}`}>
      <div className={`lg:w-[32rem] sm:w-[28rem] w-[20rem] ${theme === "dark" ? "bg-[#3C3C3C]" : "bg-[#C3C3C3]"} px-10 py-4 rounded-lg ${theme === "dark" ? "border-gray-600" : "border-gray-400"} border-[.5px] flex flex-col items-center`}>
        <p className={`text-xl ${theme === "dark" ? "text-white" : "text-black"}`}>Welcome to</p>
        <p className="text-3xl text-[#4E5FB5] font-bold mb-16">AlgoSphare</p>
        <form action="" className="flex flex-col gap-4 w-full">
          <input type="text" name="" id="" placeholder="Enter Email" className={`${theme === "dark" ? "bg-zinc-900 text-white" : "bg-zinc-100 text-black"} pl-2 py-2 w-full rounded-lg text-md outline outline-1 outline-[#3E5FB5]`} />
          <input type="text" name="" id="" placeholder="Enter Password" className={`${theme === "dark" ? "bg-zinc-900 text-white" : "bg-zinc-100 text-black"} pl-2 py-2 w-full rounded-lg text-md outline outline-1 outline-[#3E5FB5]`} />
          <p className={`text-right ${theme === "dark" ? "text-gray-200" : "text-gray-700"} text-sm mt-[-10px]  cursor-pointer`}>Forget Password?</p>
          <button className={`w-full bg-[#7D8EE4] ${theme === "dark" ? "text-white" : "text-black"} text-lg font-semibold py-2 rounded-lg mt-4 flex justify-center items-center`}>Register</button>
        </form>

        <button className={`flex items-center gap-2 mt-6 ${theme === "dark" ? "text-gray-200 bg-zinc-900" : "text-gray-700 bg-zinc-100"} pr-2 text-xs rounded-md`}>
          <img src={googleImg} alt="" className='w-[32px] bg-gray-300 rounded-md' />
          Sign up with Google
        </button>
        <p className={`${theme === "dark" ? "text-gray-200" : "text-gray-700"} text-sm mt-2`}>Don't have an account <Link to={'/signup'} className="text-base text-[#3E5FB5] font-semibold cursor-pointer">Sign Up</Link></p>
      </div>
    </div>
  )
}

export default LogIn
