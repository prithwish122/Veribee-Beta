// "use client"

// import * as React from "react"
// import { useTheme } from "next-themes"
// import { FloatingDock } from "@/components/ui/floating-dock"
// import { Button } from "@/components/ui/moving-border"
// import { Shield } from "lucide-react"
// import Link from "next/link"
// import {
//   IconBrandGithub,
//   IconBrandX,
//   IconExchange,
//   IconHome,
//   IconNewSection,
//   IconTerminal2,
//   IconMoonStars,
// } from "@tabler/icons-react"

// export default function FloatingDockWithNightMode({
//   className,
//   mobileClassName,
// }: {
//   className?: string
//   mobileClassName?: string
// }) {
//   const { theme, setTheme } = useTheme()

//   const toggleTheme = React.useCallback(
//     (e?: React.MouseEvent) => {
//       if (e) e.preventDefault()
//       setTheme(theme === "dark" ? "light" : "dark")
//     },
//     [theme, setTheme],
//   )

//   const items = [
//     {
//       title: "Home",
//       icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
//       href: "#",
//     },
//     {
//       title: "Products",
//       icon: <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
//       href: "#",
//     },
//     {
//       title: "Components",
//       icon: <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
//       href: "#",
//     },
//     {
//       title: "Aceternity UI",
//       icon: <img src="https://assets.aceternity.com/logo-dark.png" width={20} height={20} alt="Aceternity Logo" />,
//       href: "#",
//     },
//     {
//       title: "Changelog",
//       icon: <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
//       href: "#",
//     },
//     {
//       title: "Twitter",
//       icon: <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
//       href: "#",
//     },
//     {
//       title: "GitHub",
//       icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
//       href: "#",
//     },
//     {
//       title: theme === "dark" ? "Light Mode" : "Dark Mode",
//       icon: <IconMoonStars className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
//       onClick: toggleTheme,
//     },
//   ] as const

//   return (
//     <div className="flex items-center">
//       {/* Veribee Logo on the left - exactly matching Navbar style */}
//       <div className="mr-[100px]">
//         <Link href="/" className="flex items-center space-x-2">
//           <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
//             <Shield className="h-4 w-4 text-white" />
//           </div>
//           <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
//             Veribee
//           </span>
//         </Link>
//       </div>
      
//       {/* Floating Dock in the center */}
//       <FloatingDock items={items as any} desktopClassName={className} mobileClassName={mobileClassName} />
      
//       {/* Launch App Button on the right - exactly matching Navbar style */}
//       <div className="ml-[100px]">
//         <Link href="/dashboard">
//           <Button
//             borderRadius="1.75rem"
//             className="bg-blue-950/80 backdrop-blur-md text-blue-100 border-blue-500/30 hover:border-blue-400/50 transition-all font-sans px-6 py-3 text-base whitespace-nowrap"
//           >
//             Launch App
//           </Button>
//         </Link>
//       </div>
//     </div>
//   )
// }

// export { FloatingDockWithNightMode }