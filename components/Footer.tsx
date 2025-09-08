"use client"
import { motion } from "motion/react"
import { ArrowUp, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { TwitterLogoIcon } from "@radix-ui/react-icons"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="w-full bg-black py-8 border-t border-blue-500/20">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between">
        
        {/* Logo + Name */}
        {/* <div > */}
          <Link href="/" className="flex items-center space-x-3">
          <img src="/images/veribee.png" alt="Veribee Logo" className="h-8 w-8 rounded-full" />
          <span className="text-blue-200 text-lg font-bold font-sans">Veribee</span>
          <p className="text-blue-200/60 text-sm mb-4 md:mb-0 font-sans">© 2025 Veribee</p>
        </Link>
        {/* </div> */}

        {/* Right Section */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <a
            href="https://x.com/VeriBee_EDU"
            className="text-blue-400 hover:text-blue-300 transition-colors"
            aria-label="X (Twitter)"
          >
            <TwitterLogoIcon className="w-5 h-5"  />
          </a>
          <a
            href="#"
            className="text-blue-400 hover:text-blue-300 transition-colors"
            aria-label="Telegram"
          >
            {/* Simple Telegram SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M9.036 15.568l-.396 5.574c.565 0 .81-.243 1.103-.535l2.64-2.497 5.472 4.002c1.004.555 1.72.264 1.978-.93l3.585-16.824h.001c.318-1.48-.534-2.06-1.506-1.7L1.83 9.354c-1.453.564-1.432 1.372-.248 1.74l5.473 1.708L18.79 6.36c.56-.37 1.068-.165.65.205" />
            </svg>
          </a>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 rounded-full text-blue-200 text-sm transition-all duration-300"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="font-sans">Back to Top</span>
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
