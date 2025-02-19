import { useContext } from "react"
import { DifficultyContext, ThemeContext } from "../.."

const Profile = () => {

  const { easyRef, easyValueRef, mediumRef, mediumValueRef, hardRef, hardValueRef } = useContext(DifficultyContext);
  const { theme } = useContext(ThemeContext);


  return (
    <div className={`mt-28 px-4 sm:px-16 lg:px-32 w-full flex gap-4 lg:gap-8 flex-col md:flex-row`}>
      <div className={`w-full md:w-72 lg:w-80 px-2 py-4 rounded-lg border ${theme === "dark" ? "bg-[#3C3C3C] border-gray-600" : "bg-[#C3C3C3] border-gray-400"}`}>
        <div className="flex gap-4 items-center">
          <img src="" alt="" className="w-24 h-24 rounded-3xl" />
          <div>
            <h3 className="text-lg">Shivam Kumar</h3>
            <p className="text-sm font-light">shiv40</p>
          </div>
        </div>

        <div className="mt-8">
          <div className="">
            <p className="text-sm font-light"><i className={`fa-solid fa-location-dot mr-2`}></i>Gaya</p>
            <h4 className="mt-2 font-light"><i className="fa-solid fa-graduation-cap mr-2"></i>Gaya College of Engineering, Gaya</h4>
            <div className={`flex gap-4 mt-6`}>
              <img src="" alt="" className="w-8 h-8 rounded-full" />
              <img src="" alt="" className="w-8 h-8 rounded-full" />
              <img src="" alt="" className="w-8 h-8 rounded-full" />
            </div>
          </div>

          <button className={`w-full mt-8 py-2 rounded-xl bg-[#7D8EE4]`}>Edit Profile</button>
        </div>
      </div>

      <div className={`px-2 py-4 rounded-lg border flex-1 ${theme === "dark" ? "bg-[#3C3C3C] border-gray-600" : "bg-[#C3C3C3] border-gray-400"}`}>
        <div>
          <h2 className="text-xl font-bold">Diffulty</h2>
          <div className={`mt-4 flex flex-col gap-4`}>
            <div>
              <h4>Easy</h4>
              <div className={`flex gap-4 items-center`}>
                <div className={`w-[75%] max-w-md h-2 bg-white relative rounded-lg`}>
                  <div ref={easyRef} className={`w-[50%] h-2 bg-[#059212] rounded-lg`}></div>
                </div>
                <p ref={easyValueRef}>79/163</p>
              </div>
            </div>

            <div>
              <h4>Medium</h4>
              <div className={`flex gap-4 items-center`}>
                <div className={`w-[75%] max-w-md h-2 bg-white relative rounded-lg`}>
                  <div ref={mediumRef} className={`w-[50%] h-2 bg-[#FBA518] rounded-lg`}></div>
                </div>
                <p ref={mediumValueRef}>194/256</p>
              </div>
            </div>

            <div>
              <h4>Hard</h4>
              <div className={`flex gap-4 items-center`}>
                <div className={`w-[75%] max-w-md h-2 bg-white relative rounded-lg`}>
                  <div ref={hardRef} className={`w-[50%] h-2 bg-[#E52020] rounded-lg`}></div>
                </div>
                <p ref={hardValueRef}>36/102</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-xl font-bold">Topics</h2>
          <div className="grid grid-cols-1  lg:grid-cols-2 2xl:grid-cols-3 gap-8 lg:gap-16 mt-8">
            <div className={`${theme === "dark" ? "bg-gray-700 border-gray-500" : "bg-gray-300 border-gray-400"} border py-2 px-4 rounded-md flex justify-between`}>
              <span>Array</span>
              <div>
                <span className={`${theme === "dark" ? "text-red-400" : "text-red-600"} mr-1 font-semibold`}>x</span>
                <span>123</span>
              </div>
            </div>
            <p className={`${theme === "dark" ? "bg-gray-700 border-gray-500" : "bg-gray-300 border-gray-400"} border py-2 px-4 rounded-md flex justify-between`}>
              <span>String</span>
              <span>x61</span>
            </p>
            <p className={`${theme === "dark" ? "bg-gray-700 border-gray-500" : "bg-gray-300 border-gray-400"} border py-2 px-4 rounded-md flex justify-between`}>
              <span>LinkedList</span>
              <span>x48</span>
            </p>
            <p className={`${theme === "dark" ? "bg-gray-700 border-gray-500" : "bg-gray-300 border-gray-400"} border py-2 px-4 rounded-md flex justify-between`}>
              <span>Sliding window</span>
              <span>x23</span>
            </p>
            <p className={`${theme === "dark" ? "bg-gray-700 border-gray-500" : "bg-gray-300 border-gray-400"} border py-2 px-4 rounded-md flex justify-between`}>
              <span>Recursion</span>
              <span>x79</span>
            </p>
            <p className={`${theme === "dark" ? "bg-gray-700 border-gray-500" : "bg-gray-300 border-gray-400"} border py-2 px-4 rounded-md flex justify-between`}>
              <span>Tree</span>
              <span>x56</span>
            </p>
            <p className={`${theme === "dark" ? "bg-gray-700 border-gray-500" : "bg-gray-300 border-gray-400"} border py-2 px-4 rounded-md flex justify-between`}>
              <span>Dynamic programming</span>
              <span>x37</span>
            </p>
            <p className={`${theme === "dark" ? "bg-gray-700 border-gray-500" : "bg-gray-300 border-gray-400"} border py-2 px-4 rounded-md flex justify-between`}>
              <span>Graph</span>
              <span>x48</span>
            </p>
            <p className={`${theme === "dark" ? "bg-gray-700 border-gray-500" : "bg-gray-300 border-gray-400"} border py-2 px-4 rounded-md flex justify-between`}>
              <span>Stack</span>
              <span>x21</span>
            </p>
            <p className={`${theme === "dark" ? "bg-gray-700 border-gray-500" : "bg-gray-300 border-gray-400"} border py-2 px-4 rounded-md flex justify-between`}>
              <span>Queue</span>
              <span>x27</span>
            </p>
            <p className={`${theme === "dark" ? "bg-gray-700 border-gray-500" : "bg-gray-300 border-gray-400"} border py-2 px-4 rounded-md flex justify-between`}>
              <span>Priority queue</span>
              <span>x19</span>
            </p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Profile
