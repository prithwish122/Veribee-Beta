"use client";
import React from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";


export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Design & Launch",
      description:
        "Create fully customizable, secure survey forms.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Agentic Verification",
      description:
        "AI agents validate, deduplicate, and enrich every response.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Escrow-Based Incentivization",
      description:
        "Rewards released only for high-quality, verified answers.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    },
    {
      title: "Instant Research Insights",
      description:
        "Auto-transformed data delivered via sleek, interactive dashboards.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];
  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-5xl text-white mb-6 tracking-tight text-center">
          How it works?
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          From survey creation to verified insights in minutes
        </p>
      </div>

      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=" max-w-5xl mx-auto text-left tracking-tight text-3xl">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-lg tracking-tight max-w-4xl text-left mx-auto",
        "text-lg text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-lg text-left max-w-sm mx-0 md:text-sm my-2"

      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full  p-5  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          {/* TODO */}
          <img
            src="/image.png"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full  rounded-sm"
          />
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full  p-5  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          {/* TODO */}
          <img
            src="/incentivee.png"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full  rounded-sm"
          />
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};
export const SkeletonTwo = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full  p-5  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          <img
            src="/images/image.png"
            alt="AI Verification Process"
            width={800}
            height={800}
            className="h-full w-full  rounded-sm object-cover"
          />
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};
export const SkeletonFour = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full  p-5  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          {/* TODO */}
          <img
            src="/dashboard.png"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full  rounded-sm"
          />
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};


// -------------------------------------------------------------------------------------

// import React from "react";
// import { cn } from "@/lib/utils";
// import createGlobe from "cobe";
// import { useEffect, useRef } from "react";
// import { motion } from "motion/react";
// import { IconBrandYoutubeFilled } from "@tabler/icons-react";


// export function FeaturesSectionDemo() {
//   const features = [
//     {
//       number: "01",
//       title: "Design & Launch",
//       description:
//         "Create fully customizable, secure survey forms.",
//       skeleton: <SkeletonOne />,
//       className:
//         "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
//     },
//     {
//       number: "02",
//       title: "Agentic Verification",
//       description:
//         "AI agents validate, deduplicate, and enrich every response.",
//       skeleton: <SkeletonTwo />,
//       className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
//     },
//     {
//       number: "03",
//       title: "Escrow-Based Incentivization",
//       description:
//         "Rewards released only for high-quality, verified answers.",
//       skeleton: <SkeletonThree />,
//       className:
//         "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
//     },
//     {
//       number: "04",
//       title: "Instant Research Insights",
//       description:
//         "Auto-transformed data delivered via sleek, interactive dashboards.",
//       skeleton: <SkeletonFour />,
//       className: "col-span-1 lg:col-span-3 border-b lg:border-none",
//     },
//   ];
//   return (
//     <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
//       <div className="px-8">
//         <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
//           How it works?
//         </h4>

//         <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
//           From survey creation to verified insights, our platform uses AI agents to ensure quality data collection and deliver actionable research results.
//         </p>
//       </div>

//       <div className="relative ">
//         <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
//           {features.map((feature) => (
//             <FeatureCard key={feature.title} className={feature.className}>
//               <FeatureNumber>{feature.number}</FeatureNumber>
//               <FeatureTitle>{feature.title}</FeatureTitle>
//               <FeatureDescription>{feature.description}</FeatureDescription>
//               <div className=" h-full w-full">{feature.skeleton}</div>
//             </FeatureCard>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// const FeatureCard = ({
//   children,
//   className,
// }: {
//   children?: React.ReactNode;
//   className?: string;
// }) => {
//   return (
//     <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
//       {children}
//     </div>
//   );
// };

// const FeatureNumber = ({ children }: { children?: React.ReactNode }) => {
//   return (
//     <p className="text-4xl md:text-5xl font-bold text-blue-500 dark:text-blue-400 mb-2">
//       {children}
//     </p>
//   );
// };

// const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
//   return (
//     <p className=" max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
//       {children}
//     </p>
//   );
// };

// const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
//   return (
//     <p
//       className={cn(
//         "text-sm md:text-base  max-w-4xl text-left mx-auto",
//         "text-neutral-500 text-center font-normal dark:text-neutral-300",
//         "text-left max-w-sm mx-0 md:text-sm my-2"
//       )}
//     >
//       {children}
//     </p>
//   );
// };

// export const SkeletonOne = () => {
//   return (
//     <div className="relative flex py-8 px-2 gap-10 h-full">
//       <div className="w-full  p-5  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
//         <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
//           {/* TODO */}
//           <img
//             src="/image.png"
//             alt="header"
//             width={800}
//             height={800}
//             className="h-full w-full  rounded-sm"
//           />
//         </div>
//       </div>

//       <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
//       <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
//     </div>
//   );
// };

// export const SkeletonThree = () => {
//   return (
//     <div className="relative flex py-8 px-2 gap-10 h-full">
//       <div className="w-full  p-5  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
//         <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
//           {/* TODO */}
//           <img
//             src="/incentivee.png"
//             alt="header"
//             width={800}
//             height={800}
//             className="h-full w-full  rounded-sm"
//           />
//         </div>
//       </div>

//       <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
//       <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
//     </div>
//   );
// };
// export const SkeletonTwo = () => {
//   return (
//     <div className="relative flex py-8 px-2 gap-10 h-full">
//       <div className="w-full  p-5  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
//         <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
//           <img
//             src="/images/image.png"
//             alt="AI Verification Process"
//             width={800}
//             height={800}
//             className="h-full w-full  rounded-sm object-cover"
//           />
//         </div>
//       </div>

//       <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
//       <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
//     </div>
//   );
// };
// export const SkeletonFour = () => {
//   return (
//     <div className="relative flex py-8 px-2 gap-10 h-full">
//       <div className="w-full  p-5  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
//         <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
//           {/* TODO */}
//           <img
//             src="/dashboard.png"
//             alt="header"
//             width={1000}
//             height={1000}
//             className="h-full w-full  rounded-sm"
//           />
//         </div>
//       </div>

//       <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
//       <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
//     </div>
//   );
// };

// export const Globe = ({ className }: { className?: string }) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     let phi = 0;

//     if (!canvasRef.current) return;

//     const globe = createGlobe(canvasRef.current, {
//       devicePixelRatio: 2,
//       width: 600 * 2,
//       height: 600 * 2,
//       phi: 0,
//       theta: 0,
//       dark: 1,
//       diffuse: 1.2,
//       mapSamples: 16000,
//       mapBrightness: 6,
//       baseColor: [0.3, 0.3, 0.3],
//       markerColor: [0.1, 0.8, 1],
//       glowColor: [1, 1, 1],
//       markers: [
//         // longitude latitude
//         { location: [37.7595, -122.4367], size: 0.03 },
//         { location: [40.7128, -74.006], size: 0.1 },
//       ],
//       onRender: (state) => {
//         // Called on every animation frame.
//         // `state` will be an empty object, return updated params.
//         state.phi = phi;
//         phi += 0.01;
//       },
//     });

//     return () => {
//       globe.destroy();
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
//       className={className}
//     />
//   );
// };