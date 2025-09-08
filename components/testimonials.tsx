"use client"
import Marquee from "@/components/magicui/marquee"

export default function Testimonials() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black items-center justify-center relative overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-5xl  text-white mb-6 font-sans tracking-tight">
          What people <span className="italic text-blue-300">say</span> about us.
        </h2>
        <p className="text-xl text-blue-200/80 font-sans">Real feedback from privacy-conscious DeFi traders.</p>
      </div>
      <div className="relative w-full max-w-6xl">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
        
        <Marquee className="[--duration:25s] py-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="mx-3 w-72 bg-gray-900/60 border border-gray-700/50 rounded-xl p-5 backdrop-blur-sm shrink-0">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                  <div className="text-blue-300/70 text-xs">@{testimonial.name.toLowerCase().replace(' ', '')}</div>
                </div>
              </div>
              <blockquote className="text-gray-200 text-sm leading-relaxed">
                {testimonial.quote}
              </blockquote>
            </div>
          ))}
        </Marquee>
        
        <Marquee reverse className="[--duration:20s] py-4">
          {testimonials.slice().reverse().map((testimonial, index) => (
            <div key={index} className="mx-3 w-72 bg-gray-900/60 border border-gray-700/50 rounded-xl p-5 backdrop-blur-sm shrink-0">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                  <div className="text-blue-300/70 text-xs">@{testimonial.name.toLowerCase().replace(' ', '')}</div>
                </div>
              </div>
              <blockquote className="text-gray-200 text-sm leading-relaxed">
                {testimonial.quote}
              </blockquote>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}

const testimonials = [
  {
    quote:
      "Zeyo has revolutionized how we track DeFi performance while maintaining complete privacy. The zkProof system is incredibly powerful.",
    name: "Alex Chen",
    title: "DeFi Trader",
  },
  {
    quote:
      "Finally, a way to prove my trading success without exposing my wallet. The zkBadge system is genius for building reputation.",
    name: "Sarah Johnson",
    title: "Crypto Analyst",
  },
  {
    quote:
      "The privacy-first approach combined with advanced analytics makes Zeyo essential for serious traders who value discretion.",
    name: "Michael Rodriguez",
    title: "Fund Manager",
  },
  {
    quote:
      "Smart contract vaults with zero-knowledge proofs - this is the future of private DeFi trading. Absolutely game-changing.",
    name: "Emma Thompson",
    title: "Blockchain Developer",
  },
  {
    quote:
      "Zeyo's multi-chain support and privacy features have made it our go-to platform for institutional DeFi operations.",
    name: "David Kim",
    title: "Investment Director",
  },
]