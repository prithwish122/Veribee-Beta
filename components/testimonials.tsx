"use client"
import Marquee from "@/components/magicui/marquee"

export default function Testimonials() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black items-center justify-center relative overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-5xl  text-white mb-6 font-sans tracking-tight">
          What people <span className="italic text-blue-300">say</span> about us.
        </h2>
        <p className="text-xl text-blue-200/80 font-sans">from people who care about data.</p>
      </div>
      <div className="relative w-full max-w-6xl">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
        
        <Marquee className="[--duration:60s] py-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="mx-3 w-72 bg-gray-900/60 border border-gray-700/50 rounded-xl p-5 backdrop-blur-sm shrink-0">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-400/30">
                  <img 
                    src={testimonial.img} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
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
        
        <Marquee reverse className="[--duration:50s] py-4">
          {testimonials.slice().reverse().map((testimonial, index) => (
            <div key={index} className="mx-3 w-72 bg-gray-900/60 border border-gray-700/50 rounded-xl p-5 backdrop-blur-sm shrink-0">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-green-400/30">
                  <img 
                    src={testimonial.img} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
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
      "Veribee makes surveys smarter. The AI validation ensures only genuine, high-quality responses get rewarded.",
    name: "Sophia Martinez",
    role: "Community Manager, Web3 DAO",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    quote:
      "We used Veribee for developer feedback and loved the code editor support. It felt natural and streamlined.",
    name: "David Kim",
    role: "Solana Developer Advocate",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    quote:
      "Finally a survey tool that prevents spam responses. The ZK identity integration is a game-changer.",
    name: "Arjun Mehta",
    role: "Blockchain Researcher",
    img: "https://avatar.vercel.sh/john",
  },
  {
    quote:
      "Escrow-based rewards gave our community confidence that only real contributions are incentivized.",
    name: "Elena Petrova",
    role: "Product Lead, DeFi Startup",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    quote:
      "Veribee transformed our hackathon feedback collection—timed questions ensured fair participation.",
    name: "Marcus Lee",
    role: "Hackathon Organizer",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    quote:
      "The AI analysis helped us instantly filter valuable insights without manually sifting through noise.",
    name: "Priya Nair",
    role: "Data Scientist",
    img: "https://avatar.vercel.sh/james",
  },
  {
    quote:
      "With Veribee, we finally have a fair and transparent way to reward contributors in our ecosystem.",
    name: "Liam O'Connor",
    role: "DAO Contributor",
    img: "https://avatar.vercel.sh/alice",
  },
  {
    quote:
      "The seamless blockchain integration made our survey rewards trustless and automatic.",
    name: "Chen Wei",
    role: "Smart Contract Engineer",
    img: "https://avatar.vercel.sh/bob",
  },
  {
    quote:
      "As an educator, I loved how Veribee's timed questions ensured academic honesty in student quizzes.",
    name: "Dr. Fatima Al-Sayed",
    role: "University Professor",
    img: "https://avatar.vercel.sh/charlie",
  },
  {
    quote:
      "Veribee's zero-knowledge identity system gave participants privacy without losing authenticity.",
    name: "Jonas Richter",
    role: "Privacy Advocate",
    img: "https://avatar.vercel.sh/diana",
  },
  {
    quote:
      "We collected investor feedback with Veribee and were amazed by how quickly we got trustworthy insights.",
    name: "Isabella Rossi",
    role: "Startup Founder",
    img: "https://avatar.vercel.sh/eve",
  },
  {
    quote:
      "Veribee feels like the future of surveys—secure, AI-powered, and built for Web3 communities.",
    name: "Michael Carter",
    role: "Blockchain Enthusiast",
    img: "https://avatar.vercel.sh/frank",
  },
]