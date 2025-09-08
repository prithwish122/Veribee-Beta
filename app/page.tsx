import SplashLoader from "@/components/splash-loader"
// import { SiteNavbar } from "@/components/site-navbar"
import { GridBeams } from "@/components/magicui/grid-beams"
import { SafariDemo } from "@/components/safari-demo"
import { BlueBlurBackground } from "@/components/blue-blur-background"
import BentoGridDemo from "@/components/bento-grid-demo"
import InsightIntro from "@/components/insight-intro"
import HowItWorks from "@/components/how-it-works"
import FloatingDockWithNightMode from "@/components/floating-dock-with-night-mode"
import { NavbarDock } from "@/components/navbar-dock"
import Navbar from "@/components/navbar"
// import WhyChoose from "@/components/landing/WhyChooseus"
import WhyChooseUs from "@/components/landing/WhyChooseus"
import { FeaturesSectionDemo } from "@/components/magicui/feature-section-demo"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/Faq"
import Footer from "@/components/Footer"
// import Testimonials, { MarqueeDemo } from "@/components/testimonials"
// import  Testimonials, { MarqueeDemo } from "@/components/testimonials"

export default function Page() {
  return (
    <SplashLoader minDurationMs={1200}>
      <main className="relative min-h-screen overflow-x-hidden">
        <div className="sticky top-4 md:top-6 z-[60] w-full flex justify-center pt-0">
              {/* <FloatingDockWithNightMode />    */}
              <Navbar />
            </div>
        <div className="absolute inset-0 w-full -z-10">
          <img src="/images/bg-veribee.jpg" alt="Background" className="w-full h-screen object-cover object-center" />
        </div>

        <div className="absolute top-[70vh] left-0 w-full h-[30vh] bg-gradient-to-b from-transparent via-black/30 to-black -z-10" />

        <div className="absolute top-[100vh] left-0 w-full h-[300vh] bg-black -z-10" />

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
            <div className="w-full flex justify-center">{/* <FloatingDockWithNightMode /> */}</div>

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

        <div className="relative bg-black">
          {/* TrustedBy section */}
          {/* <TrustedBy /> */}
          {/* <InsightIntro className="mt-20 mb-20" /> */}
          <WhyChooseUs/>

          {/* <BentoGridDemo /> */}

          {/* <HowItWorks /> */}
          <FeaturesSectionDemo />
          {/* <MarqueeDemo /> */}
          <Testimonials />
          <FAQ />
          <Footer />
        </div>
      </main>
    </SplashLoader>
  )
}

// --------------------------------------------------------------------------------------

// import SplashLoader from "@/components/splash-loader"
// // import { SiteNavbar } from "@/components/site-navbar"
// import { GridBeams } from "@/components/magicui/grid-beams"
// import { SafariDemo } from "@/components/safari-demo"
// import { BlueBlurBackground } from "@/components/blue-blur-background"
// import BentoGridDemo from "@/components/bento-grid-demo"
// import InsightIntro from "@/components/insight-intro"
// import HowItWorks from "@/components/how-it-works"
// import FloatingDockWithNightMode from "@/components/floating-dock-with-night-mode"
// import { NavbarDock } from "@/components/navbar-dock"
// import Navbar from "@/components/navbar"
// // import WhyChoose from "@/components/landing/WhyChooseus"
// import WhyChooseUs from "@/components/landing/WhyChooseus"

// export default function Page() {
//   return (
//     <SplashLoader minDurationMs={1200}>
//       <main className="relative min-h-screen overflow-x-hidden">
//         {/* ✅ Fixed and constant background image */}
//         <div className="fixed inset-0 -z-10">
//           <img
//             src="/images/bg-veribee.jpg"
//             alt="Background"
//             className="w-full h-full object-cover object-center"
//           />
//         </div>

//         {/* Top navbar */}
//         <div className="sticky top-4 md:top-6 z-[60] w-full flex justify-center pt-0">
//           {/* <FloatingDockWithNightMode /> */}
//           <Navbar />
//         </div>

//         {/* Removed black overlay divs */}
//         {/* 
//         <div className="absolute top-[70vh] left-0 w-full h-[30vh] bg-gradient-to-b from-transparent via-black/30 to-black -z-10" />
//         <div className="absolute top-[100vh] left-0 w-full h-[300vh] bg-black -z-10" />
//         */}

//         {/* Hero Section */}
//         <section className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center px-4 pt-10 pb-16 sm:px-6 md:pt-14 lg:px-8">
//           {/* Background layers for HERO only */}
//           <BlueBlurBackground src="/images/hero-bg.jpg" className="absolute inset-0 z-0" overlay={false} />
//           <GridBeams
//             className="absolute inset-0 z-[1]"
//             gridColor="rgba(59, 130, 246, 0.08)"
//             rayCount={24}
//             rayOpacity={0.6}
//             raySpeed={1.8}
//             rayLength="46vh"
//             gridFadeStart={5}
//             gridFadeEnd={90}
//           />

//           <div className="relative z-[2] w-full flex flex-col items-center">
//             <div className="w-full flex justify-center">
//               {/* <FloatingDockWithNightMode /> */}
//             </div>

//             <div className="flex w-full flex-1 items-center justify-center">
//               <header className="mt-[150px] text-center">
//                 <h1 className="text-pretty text-4xl font-bold tracking-tighter text-foreground md:text-6xl lg:text-7xl">
//                   Data that matters, insights that shatter.
//                 </h1>
//                 <p className="mx-auto mt-3 max-w-2xl text-pretty text-base text-foreground/70 md:text-lg">
//                   Host surveys, collect feedback, and run research at lightning speed, no human intervention.
//                 </p>
//               </header>
//             </div>

//             {/* Browser mockup */}
//             <div className="mt-8 w-full max-w-6xl">
//               <SafariDemo />
//             </div>
//           </div>
//         </section>

//         {/* Other sections */}
//         <div className="relative">
//           {/* <TrustedBy /> */}
//           {/* <InsightIntro className="mt-20 mb-20" /> */}
//           <WhyChooseUs />
//           {/* <BentoGridDemo /> */}
//           <HowItWorks />
//         </div>
//       </main>
//     </SplashLoader>
//   )
// }

