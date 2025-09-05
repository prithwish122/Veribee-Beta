import SplashLoader from "@/components/splash-loader"
// import { SiteNavbar } from "@/components/site-navbar"
import { GridBeams } from "@/components/magicui/grid-beams"
import { SafariDemo } from "@/components/safari-demo"
import { FloatingDockWithNightMode } from "@/components/floating-dock-with-night-mode"
import { BlueBlurBackground } from "@/components/blue-blur-background"
import TrustedBy from "@/components/trusted-by"
import BentoGridDemo from "@/components/bento-grid-demo"
import InsightIntro from "@/components/insight-intro"
import StickyScrollRevealDemo from "@/components/sticky-scroll-reveal-demo"
import HowItWorks from "@/components/how-it-works"

export default function Page() {
  return (
    <SplashLoader minDurationMs={1200}>
      <main className="relative min-h-screen">
        {/* Background image for first 130vh */}
        <div className="absolute inset-0 h-[130vh] w-full -z-10">
          <img
            src="/images/bg-veribee.jpg"
            alt="Background"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center" }}
          />
          {/* Gradient overlay for smooth transition to black */}
          <div
            className="absolute bottom-0 left-0 w-full h-[30vh] pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, transparent 0%, black 100%)",
            }}
          />
        </div>
        {/* Black background for everything after 130vh */}
        <div className="absolute top-[130vh] left-0 w-full min-h-[calc(100vh+100%)] bg-black -z-10" />

        {/* Navbar */}
        {/* <SiteNavbar /> */}

        {/* Hero section */}
        <section className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center px-4 pt-10 pb-16 sm:px-6 md:pt-14 lg:px-8">
          {/* Background layers for HERO only */}
          <BlueBlurBackground src="/images/hero-bg.jpg" className="absolute inset-0 z-0" overlay={false} />
          <GridBeams
            className="absolute inset-0 z-[1]"
            gridColor="rgba(59, 130, 246, 0.08)"
            rayCount={24}
            rayOpacity={0.6}
            raySpeed={1.8}
            rayLength="46vh"
            gridFadeStart={5}
            gridFadeEnd={90}
          />

          <div className="relative z-[2] w-full flex flex-col items-center">
            <div className="w-full flex justify-center">
              {/* <FloatingDockWithNightMode /> */}
            </div>

            <div className="flex w-full flex-1 items-center justify-center">
              <header className="mt-[150px] text-center">
                <h1 className="text-pretty text-4xl font-bold tracking-tighter text-foreground md:text-6xl lg:text-7xl">
                  Data that matters, insights that shatter.
                </h1>
                <p className="mx-auto mt-3 max-w-2xl text-pretty text-base text-foreground/70 md:text-lg">
                  Host surveys, collect feedback, and run research at lightning speed, no human intervention.
                </p>
              </header>
            </div>

            {/* Browser mockup */}
            <div className="mt-8 w-full max-w-6xl">
              <SafariDemo />
            </div>
          </div>
        </section>

        {/* TrustedBy section */}
        {/* <TrustedBy /> */}
        <InsightIntro className="mt-20 mb-20" />

        <BentoGridDemo />
        
        {/* <section id="how-it-works" className="relative bg-black py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <header className="mb-10 text-center">
              <h2 className="text-balance text-3xl font-semibold text-white md:text-5xl">How it works</h2>
              <p className="mx-auto mt-3 max-w-2xl text-pretty text-sm text-white/70 md:text-base">
                A quick look at the real-time, collaborative workflow.
              </p>
            </header>
            <StickyScrollRevealDemo />
          </div>
        </section> */}
        {/* <section id="how-it-works" className="min-h-dvh "> */}
        <HowItWorks />
        {/* </section> */}
      </main>
    </SplashLoader>
  )
}
