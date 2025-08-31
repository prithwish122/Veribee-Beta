import SplashLoader from "@/components/splash-loader"
// import { SiteNavbar } from "@/components/site-navbar"
import { GridBeams } from "@/components/magicui/grid-beams"
import { SafariDemo } from "@/components/safari-demo"
import { FloatingDockWithNightMode } from "@/components/floating-dock-with-night-mode"
import { BlueBlurBackground } from "@/components/blue-blur-background"
import TrustedBy from "@/components/trusted-by"

export default function Page() {
  return (
    <SplashLoader minDurationMs={1200}>
      <main className="relative min-h-screen">
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
              <FloatingDockWithNightMode />
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
        <TrustedBy />
      </main>
    </SplashLoader>
  )
}
