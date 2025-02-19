import { useContext } from "react"
import { ThemeContext } from "../.."

const TermAndConditions = () => {

  const {theme} = useContext(ThemeContext);

  return (
    <div className={`mt-28 px-4 sm:px-16 lg:px-32 w-full`}>
      <div className={`w-full flex justify-center`}>
        <h2 className={`text-3xl md:text-4xl font-medium ${theme === "dark" ? "text-[#E73879]" : "text-[#FF8C9E]"}`}>Terms & Conditions</h2>
      </div>

      <ul className={`list-decimal mt-12 flex flex-col gap-6 pl-4`}>
        <li>
          <p className={`text-lg md:text-xl font-medium`}>Acceptance of Terms</p>
          <ul className={`mt-1 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
            <li>By accessing and using AlgoSphare, you agree to abide by these Terms & Conditions. If you do not agree, please refrain from using our platform.</li>
          </ul>
        </li>

        <li>
          <p className={`text-lg md:text-xl font-medium`}>Use of Content</p>
          <ul className={`mt-1 list-disc pl-4 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
            <li>All content, including problem sheets and learning resources, is for personal and educational use only.</li>
            <li>Unauthorized copying, distribution, or commercial use of any material without permission is prohibited.</li>
          </ul>
        </li>

        <li>
          <p className={`text-lg md:text-xl font-medium`}>User Responsibilities</p>
          <ul className={`mt-1 list-disc pl-4 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
            <li>You agree to use the platform ethically and responsibly.</li>
            <li>Any misuse, including spamming, hacking, or disrupting services, may lead to a ban from the platform.</li>
          </ul>
        </li>

        <li>
          <p className={`text-lg md:text-xl font-medium`}>Privacy & Data Protection</p>
          <ul className={`mt-1 list-disc pl-4 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
            <li>We prioritize user privacy and do not sell or misuse personal data.</li>
            <li>By using our services, you consent to the collection of minimal data required for platform functionality.</li>
          </ul>
        </li>

        <li>
          <p className={`text-lg md:text-xl font-medium`}>External Links</p>
          <ul className={`mt-1 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
            <li>Our platform may contain links to third-party websites. We are not responsible for the content or privacy policies of those sites.</li>
          </ul>
        </li>

        <li>
          <p className={`text-lg md:text-xl font-medium`}>Liability Disclaimer</p>
          <ul className={`mt-1 list-disc pl-4 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
            <li>We strive to provide accurate and reliable content but do not guarantee error-free information.</li>
            <li>We are not liable for any losses or damages resulting from the use of our platform.</li>
          </ul>
        </li>

        <li>
          <p className={`text-lg md:text-xl font-medium`}>Modifications to Terms</p>
          <ul className={`mt-1 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
            <li>We reserve the right to update these Terms & Conditions at any time. Continued use of the platform after changes implies acceptance of the updated terms.</li>
          </ul>
        </li>
      </ul>

      <div className={`flex gap-2 mt-8`}>
        <p><i className="fa-solid fa-envelope mr-1"></i><span className={`font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>Email:</span></p>
        <a href="mailto:support@algosphare.com" className="text-blue-400 hover:text-blue-300 hover:underline">support@algosphare.com</a>
      </div>
    </div>
  )
}

export default TermAndConditions
