/* eslint-disable react/no-unescaped-entities */
import heroImg from '../assets/hero.jpg'
import completeImg from '../assets/complete.jpg'
import interviewImg from '../assets/interview.jpg'
import algorithmImg from '../assets/algorithm.jpg'
import cpImg from '../assets/cp.jpg'
import { Link } from 'react-router-dom'
import faq from '../apis/faq.json'
import Faq from '../ui/Faq'
import { useContext, useState } from 'react'
import { ThemeContext } from '..'
import { Tilt } from 'react-tilt'

const Home = () => {

  const [open, setOpen] = useState("");
  const {theme} = useContext(ThemeContext);

  const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            30,     // max tilt rotation (degrees)
    perspective:    50000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.05,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }

  return (
    <div className={`bg-transparent w-full mb-20 mt-28 px-8 sm:px-16 lg:px-32`}>

      {
        /*
         * Hero Section
         */
      }

      <div className="hero-section w-full my-24 lg:mt-32 flex gap-8 lg:gap-16 items-center flex-col md:flex-row">
        <div className="hero-content w-full order-2 md:order-1">
          <h3 className="hero-title text-xl lg:text-3xl font-semibold">Welcome to <span className="text-2xl lg:text-4xl text-[#4E5FB5] font-bold">AlgoSphere</span> - Your DSA Problem-Solving Companion</h3>
          <p className="mt-2 text-sm lg:mt-4 lg:text-base">Unlock your potential in data structures and algorithms with our curated DSA sheets. Explore expertly categorized problem sets, track your progress like a pro, and elevate your coding journey. Whether you're a beginner or a competitive programmer, AlgoSphere has something for everyone.</p>
        </div>
        <div className="hero-img w-full order-1 mg:order-2">
          <Tilt options={defaultOptions}><img src={heroImg} alt="" className="rounded-3xl shadow-md shadow-gray-800" /></Tilt>
        </div>
      </div>


      {
        /*
         * Intro Section 
         */
      }

      <div className={`intro-section w-full mt-32 ${theme === "dark" ? "bg-[#3C3C3C] border-gray-600" : "bg-[#C3C3C3] border-gray-400"} flex justify-between px-2 md:px-8 py-8 rounded-xl items-center flex-col gap-8 sm:flex-row sm:gap-2 border`}>
        <div className="w-[100%] sm:w-[72.5%] lg:w-[45%]">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Start Your Journey with <span className="text-[#4E5FB5] font-bold">AlgoSphare</span></h3>
          <p className="text-sm font-light">Tailored learning, step-by-step solutions, progress tracking, and expert assistance to level up your skills!</p>
        </div>
        <div>
          <Link to={'/login'}><button className={`bg-[#7D8EE4] py-1 px-2 md:py-3 md:px-6 ${theme === "dark" ? "text-black" : "text-white"} text-lg font-semibold rounded-lg`}>Get Started</button></Link>
        </div>
      </div>



      {
        /*
         * Content Section
         */
      }

      <div className="content-section w-full grid grid-cols-1 md:grid-cols-2 mt-32 place-items-center gap-y-8">
        <div className={`card w-full sm:w-3/4 ${theme === "dark" ? "bg-[#3C3C3C] border-gray-600" : "bg-[#C3C3C3] border-gray-400"} p-6 rounded-2xl border`}>
          <div className="w-full flex justify-between items-center">
            <img src={completeImg} alt="" className="w-[84px] lg:w-[102px] h-[84px] rounded-lg" />
            <Link to={'/dsa'}><button className={`flex justify-center items-center px-2 lg:px-4 py-1 border ${theme === "dark" ? "border-gray-300" : "border-gray-600"} rounded-md`}>Explore &nbsp;<i className="fa-solid fa-arrow-right-long text-lg"></i></button></Link>
          </div>
          <div className="mt-8">
            <h3 className="text-lg md:text-xl font-semibold">Complete DSA Sheet</h3>
            <p className={`mt-2 text-sm ${theme === "dark" ? "text-gray-200" : "text-gray-700" }`}>Master every aspect of data structures & algorithms with this comprehensive sheet.</p>
          </div>
        </div>

        <div className={`card w-full sm:w-3/4 ${theme === "dark" ? "bg-[#3C3C3C] border-gray-600" : "bg-[#C3C3C3] border-gray-400"} p-6 rounded-2xl border`}>
          <div className="w-full flex justify-between items-center">
            <img src={interviewImg} alt="" className="w-[84px] lg:w-[102px] h-[84px] rounded-lg" />
            <Link to={'/interview'}><button className={`flex justify-center items-center px-2 lg:px-4 py-1 border ${theme === "dark" ? "border-gray-300" : "border-gray-600"} rounded-md`}>Explore &nbsp;<i className="fa-solid fa-arrow-right-long text-lg"></i></button></Link>
          </div>
          <div className="mt-8">
            <h3 className="text-lg md:text-xl font-semibold">Interview Preparation Sheet</h3>
            <p className={`mt-2 text-sm ${theme === "dark" ? "text-gray-200" : "text-gray-700" }`}>Focused problems to help you excel in coding interviews of MNCs.</p>
          </div>
        </div>
        

        <div className={`card w-full sm:w-3/4 ${theme === "dark" ? "bg-[#3C3C3C] border-gray-600" : "bg-[#C3C3C3] border-gray-400"} p-6 rounded-2xl border`}>
          <div className="w-full flex justify-between items-center">
            <img src={algorithmImg} alt="" className="w-[84px] lg:w-[102px] h-[84px] rounded-lg" />
            <Link to={'/algorithm'}><button className={`flex justify-center items-center px-2 lg:px-4 py-1 border ${theme === "dark" ? "border-gray-300" : "border-gray-600"} rounded-md`}>Explore &nbsp;<i className="fa-solid fa-arrow-right-long text-lg"></i></button></Link>
          </div>
          <div className="mt-8">
            <h3 className="text-lg md:text-xl font-semibold">Algorithm Pattern Sheet</h3>
            <p className={`mt-2 text-sm ${theme === "dark" ? "text-gray-200" : "text-gray-700" }`}>Practice key algorithm patterns with targeted exercises to become master.</p>
          </div>
        </div>

        <div className={`card w-full sm:w-3/4 ${theme === "dark" ? "bg-[#3C3C3C] border-gray-600" : "bg-[#C3C3C3] border-gray-400"} p-6 rounded-2xl border`}>
          <div className="w-full flex justify-between items-center">
            <img src={cpImg} alt="" className="w-[84px] lg:w-[102px] h-[84px] rounded-lg" />
            <Link to={'/cp'}><button className={`flex justify-center items-center px-2 lg:px-4 py-1 border ${theme === "dark" ? "border-gray-300" : "border-gray-600"} rounded-md`}>Explore &nbsp;<i className="fa-solid fa-arrow-right-long text-lg"></i></button></Link>
          </div>
          <div className="mt-8">
            <h3 className="text-lg md:text-xl font-semibold">CP Sheet</h3>
            <p className={`mt-2 text-sm ${theme === "dark" ? "text-gray-200" : "text-gray-700" }`}>Hone your skills with Codeforces problems by difficulty level as per your need.</p>
          </div>
        </div>

      </div>


      {
        /*
         * Interation Section
         */
      }

      <div className="interation-section w-full mt-40">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-3xl font-bold">Why Us</h3>
          <p className={`w-[100%] md:w-[75%] text-center ${theme === "dark" ? "text-gray-100" : "text-gray-700"}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perferendis rerum est distinctio molestias nemo assumenda laborum, eum incidunt expedita eius vel delectus, at fugiat veniam praesentium doloribus, quam omnis in et? Sapiente aperiam iusto numquam magnam qui asperiores velit, nesciunt perferendis officia vel! Itaque nisi impedit laborum ea quisquam?</p>
        </div>

        <div className="relative mt-8 md:mt-4 z-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-0 lg:gap-x-8 place-items-center">
            <Tilt options={defaultOptions} className={`w-3/4 ${theme === "dark" ? "bg-[#3C3C3C] border-gray-600" : "bg-[#C3C3C3] border-gray-400"} px-2 py-4 rounded-lg borde`}>
              <h3 className="text-lg md:text-xl font-semibold">Curated Problem Sets</h3>
              <p className={`text-sm ${theme === "dark" ? "text-gray-200" : "text-gray-700" } mt-2`}>We handpick problems to save you time and ensure a focused learning experience. Each sheet is thoughtfully designed to help you tackle real-world coding challenges, from foundational concepts to advanced algorithms. No more endless searching—get straight to learning with purpose.</p>
            </Tilt>

            <Tilt options={defaultOptions} className={`w-3/4 ${theme === "dark" ? "bg-[#3C3C3C] border-gray-600" : "bg-[#C3C3C3] border-gray-400"} px-2 py-4 rounded-lg md:mt-12 border`}>
              <h3 className="text-lg md:text-xl font-semibold">Structured Roadmaps</h3>
              <p className={`text-sm ${theme === "dark" ? "text-gray-200" : "text-gray-700" } mt-2`}>Our sheets are organized into clear, step-by-step categories, making it easier for you to plan your learning. Whether you're preparing for interviews, competitions, or building skills, our structured approach ensures steady progress without feeling overwhelmed.</p>
            </Tilt>

            <Tilt options={defaultOptions} className={`w-3/4 ${theme === "dark" ? "bg-[#3C3C3C] border-gray-600" : "bg-[#C3C3C3] border-gray-400"} px-2 py-4 rounded-lg md:mt-24 border`}>
              <h3 className="text-lg md:text-xl font-semibold">Community & Expertise</h3>
              <p className={`text-sm ${theme === "dark" ? "text-gray-200" : "text-gray-700" } mt-2`}>Learn with a growing community of like-minded coders and benefit from expert-curated solutions. With problem explanations, examples, and tips, you’ll not only solve problems but also develop a deep understanding of data structures and algorithms.</p>
            </Tilt>
          </div>

          <div className="flex justify-center ">
            <hr className="absolute top-[10%] md:top-[50%] z-[-11] bg-[#4E5FB5] border-none h-[80%] w-1 md:h-1 md:w-[85%]" />
          </div>
        </div>
      </div>


      {
        /* 
         * FAQs Section 
         */
      }

      <div className="faq-section w-full mt-32">
        <div className="flex w-full justify-center">
          <h3 className="text-center text-2xl md:text-3xl font-semibold">Frequently Asked Questions</h3>
        </div>
        <ul className="w-full mt-12">
          {
            faq.map((curr) => {
              return <Faq key={curr.id} data={curr} open={open} setOpen={setOpen} />
            })
          }
        </ul>
      </div>



      {
        /* 
         * HSD Section 
         */
      }

      <div className="hsd-section w-full mt-32">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl md:text-3xl font-semibold">Have Some Doubt</h3>
          <p className={`text-base ${theme === "dark" ? "text-gray-200" : "text-gray-700" } mt-5`}>Can’t find the answer you’re looking for? Please leave a message to us.</p>
          <a href="mailto:someone@yoursite.com"><button className={`mt-10 py-2 px-4 bg-[#7D8EE4] ${theme === "dark" ? "text-black" : "text-white"} text-lg font-semibold rounded-lg`}>Get in Touch</button></a>
        </div>
      </div>
    </div>

  )
}

export default Home
