"use client";
import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export default function AnimatedBeamMultipleOutputDemo({
  className,
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex w-full max-w-[500px] items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl",
        className,
      )}
      ref={containerRef}
    >
      <div className="flex h-full w-full flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref}>
            <Icons.googleDrive />
          </Circle>
          <Circle ref={div2Ref}>
            <Icons.googleDocs />
          </Circle>
          <Circle ref={div3Ref}>
            <Icons.whatsapp />
          </Circle>
          <Circle ref={div4Ref}>
            <Icons.messenger />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.notion />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="h-16 w-16">
            <Icons.openai />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref}>
            <Icons.zapier />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        duration={3}
      />
    </div>
  );
}

const Icons = {
  notion: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z"
        fill="#ffffff"
      />
      <path
        d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917z"
        fill="#000000"
      />
      <path
        d="M25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047z"
        fill="#ffffff"
      />
      <path
        d="M24.723 86.27V35.317c0 -2.527 0.817 -3.8 2.527 -3.993l55.373 -3.71c1.737 -0.167 2.31 1.5 2.31 3.50v48.343c0 4.08 -0.893 5.34 -4.277 5.533l-51.31 3.243c-2.48 0.153 -4.623 -1.283 -4.623 -1.963z"
        fill="#ffffff"
      />
      <path
        d="M49.803 67.3c0 4.277 0.3 5.380 3.243 5.573l2.345 0.150c0 -0.967 -0.12 -1.994 -0.267 -2.814l-0.893 -6.067c-0.5 -3.68 -0.454 -6.277 0.966 -11.24l1.88 -6.22c0.274 -0.893 0.5 -1.567 0.5 -2.047V44.635c0 -4.267 -0.823 -4.97 -3.397 -5.163L49.803 39.472V67.3z"
        fill="#000000"
      />
      <path
        d="M90.156 0.227c-0.435 -0.101 -0.870 -0.101 -1.305 0l-55.333 4.087C28.053 4.7 26.5 7.617 26.5 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L100.667 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917z"
      />
    </svg>
  ),
  openai: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  ),
  zapier: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.4407 8.28125H19.625L16 4.65625L12.375 8.28125H7.5593C6.69688 8.28125 6 8.97813 6 9.84375V22.1562C6 23.0219 6.69688 23.7188 7.5593 23.7188H12.375L16 27.3438L19.625 23.7188H24.4407C25.3031 23.7188 26 23.0219 26 22.1562V9.84375C26 8.97813 25.3031 8.28125 24.4407 8.28125Z"
        fill="#FF4A00"
      />
      <path
        d="M22.75 14L20.8125 12.0625L16 16.875L11.1875 12.0625L9.25 14L14.0625 18.8125L9.25 23.625L11.1875 25.5625L16 20.75L20.8125 25.5625L22.75 23.625L17.9375 18.8125L22.75 14Z"
        fill="white"
      />
    </svg>
  ),
  messenger: () => (
    <svg width="100" height="100" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 3C8.8203 3 3 8.3671 3 15.0937C3 18.9765 4.7734 22.4374 7.6562 24.6562L7.65625 28.3125C7.65625 28.8516 8.3047 29.1562 8.7344 28.8281L12.9531 25.5469C14.5547 25.8437 16.2656 26 16 26C23.1797 26 29 20.6328 29 13.9062C29 7.1796 23.1797 3 16 3ZM12.5312 18.375L7.8125 12.8125L17.4844 12.8125L20.4688 15.4062L24.1875 12.8125L14.5156 20.9687L12.5312 18.375Z"
        fill="#0084FF"
      />
    </svg>
  ),
  whatsapp: () => (
    <svg width="100" height="100" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 2C8.2688 2 2 8.2688 2 16C2 18.6406 2.7734 21.1094 4.0781 23.2188L2.3906 29.6094L9.0781 27.9375C11.1406 29.1562 13.5156 29.8125 16 29.8125C23.7312 29.8125 30 23.5438 30 15.8125C30 8.0812 23.7312 2 16 2ZM16 27.1875C13.8125 27.1875 11.75 26.5938 9.9844 25.5469L9.5312 25.2812L5.1875 26.4844L6.4219 22.2812L6.1250 21.8125C4.9688 19.9688 4.3750 17.8125 4.3750 15.8125C4.3750 9.3906 9.5781 4.1875 16 4.1875C22.4219 4.1875 27.625 9.3906 27.625 15.8125C27.625 22.2344 22.4219 27.1875 16 27.1875Z"
        fill="#25D366"
      />
      <path
        d="M12.3438 10.5C12.0781 9.9688 11.7969 9.9531 11.5469 9.9375C11.3438 9.9219 11.1094 9.9219 10.875 9.9219C10.6406 9.9219 10.2344 10.0156 9.8906 10.3906C9.5469 10.7656 8.5625 11.6875 8.5625 13.5625C8.5625 15.4375 9.9219 17.25 10.1094 17.4844C10.2969 17.7188 12.3438 20.8438 15.5625 22.4219C18.2188 23.75 18.7812 23.5469 19.3906 23.4844C20 23.4219 21.5625 22.4531 21.875 21.4531C22.1875 20.4531 22.1875 19.6094 22.0781 19.4219C21.9688 19.2344 21.7344 19.1406 21.3906 18.9531C21.0469 18.7656 19.1719 17.8438 18.8594 17.7188C18.5469 17.5938 18.3125 17.5312 18.0781 17.875C17.8438 18.2188 17.1406 19.1406 16.9375 19.375C16.7344 19.6094 16.5312 19.6406 16.1875 19.4531C15.8438 19.2656 14.6875 18.8906 13.3125 17.6719C12.2344 16.7188 11.5156 15.5312 11.3125 15.1875C11.1094 14.8438 11.2969 14.6406 11.4844 14.4531C11.6562 14.2812 11.8594 14.0156 12.0469 13.8125C12.2344 13.6094 12.2969 13.4688 12.4219 13.2344C12.5469 13 12.4844 12.7969 12.3906 12.6094C12.2969 12.4219 11.5938 10.5312 12.3438 10.5Z"
        fill="white"
      />
    </svg>
  ),
  googleDrive: () => (
    <svg width="100" height="100" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.6667 19.3333L6 28H26L21.3333 19.3333H10.6667Z"
        fill="#0F9D58"
      />
      <path
        d="M16 4L10.6667 19.3333H21.3333L16 4Z"
        fill="#F4B400"
      />
      <path
        d="M21.3333 19.3333L16 4L26 19.3333H21.3333Z"
        fill="#EA4335"
      />
    </svg>
  ),
  googleDocs: () => (
    <svg width="100" height="100" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 3V29H25V9L19 3H7Z"
        fill="#4285F4"
      />
      <path
        d="M19 3V9H25"
        fill="#A4C2F4"
      />
      <path
        d="M9 13H23V15H9V13ZM9 17H23V19H9V17ZM9 21H20V23H9V21Z"
        fill="white"
      />
    </svg>
  ),
};