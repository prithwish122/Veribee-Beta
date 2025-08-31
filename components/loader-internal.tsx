import styled from "styled-components"

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <svg height={0} width={0} viewBox="0 0 64 64" className="absolute">
          <defs className="s-xJBuHA073rTt" xmlns="http://www.w3.org/2000/svg">
            <linearGradient
              className="s-xJBuHA073rTt"
              gradientUnits="userSpaceOnUse"
              y2={2}
              x2={0}
              y1={62}
              x1={0}
              id="b"
            >
              <stop className="s-xJBuHA073rTt" stopColor="#1E40AF" />
              <stop className="s-xJBuHA073rTt" stopColor="#3B82F6" offset={1} />
            </linearGradient>
            <linearGradient
              className="s-xJBuHA073rTt"
              gradientUnits="userSpaceOnUse"
              y2={0}
              x2={0}
              y1={64}
              x1={0}
              id="c"
            >
              <stop className="s-xJBuHA073rTt" stopColor="#2563EB" />
              <stop className="s-xJBuHA073rTt" stopColor="#60A5FA" offset={1} />
              <animateTransform
                repeatCount="indefinite"
                keySplines=".42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1"
                keyTimes="0; 0.125; 0.25; 0.375; 0.5; 0.625; 0.75; 0.875; 1"
                dur="8s"
                values="0 32 32;-270 32 32;-270 32 32;-540 32 32;-540 32 32;-810 32 32;-810 32 32;-1080 32 32;-1080 32 32"
                type="rotate"
                attributeName="gradientTransform"
              />
            </linearGradient>
            <linearGradient
              className="s-xJBuHA073rTt"
              gradientUnits="userSpaceOnUse"
              y2={2}
              x2={0}
              y1={62}
              x1={0}
              id="d"
            >
              <stop className="s-xJBuHA073rTt" stopColor="#1D4ED8" />
              <stop className="s-xJBuHA073rTt" stopColor="#3B82F6" offset={1} />
            </linearGradient>
            <linearGradient
              className="s-xJBuHA073rTt"
              gradientUnits="userSpaceOnUse"
              y2={2}
              x2={0}
              y1={62}
              x1={0}
              id="e"
            >
              <stop className="s-xJBuHA073rTt" stopColor="#1E40AF" />
              <stop className="s-xJBuHA073rTt" stopColor="#60A5FA" offset={1} />
            </linearGradient>
            <linearGradient
              className="s-xJBuHA073rTt"
              gradientUnits="userSpaceOnUse"
              y2={2}
              x2={0}
              y1={62}
              x1={0}
              id="f"
            >
              <stop className="s-xJBuHA073rTt" stopColor="#2563EB" />
              <stop className="s-xJBuHA073rTt" stopColor="#93C5FD" offset={1} />
            </linearGradient>
            <linearGradient
              className="s-xJBuHA073rTt"
              gradientUnits="userSpaceOnUse"
              y2={2}
              x2={0}
              y1={62}
              x1={0}
              id="g"
            >
              <stop className="s-xJBuHA073rTt" stopColor="#1D4ED8" />
              <stop className="s-xJBuHA073rTt" stopColor="#60A5FA" offset={1} />
            </linearGradient>
            <linearGradient
              className="s-xJBuHA073rTt"
              gradientUnits="userSpaceOnUse"
              y2={2}
              x2={0}
              y1={62}
              x1={0}
              id="h"
            >
              <stop className="s-xJBuHA073rTt" stopColor="#1E40AF" />
              <stop className="s-xJBuHA073rTt" stopColor="#3B82F6" offset={1} />
            </linearGradient>
            <linearGradient
              className="s-xJBuHA073rTt"
              gradientUnits="userSpaceOnUse"
              y2={2}
              x2={0}
              y1={62}
              x1={0}
              id="i"
            >
              <stop className="s-xJBuHA073rTt" stopColor="#2563EB" />
              <stop className="s-xJBuHA073rTt" stopColor="#93C5FD" offset={1} />
            </linearGradient>
          </defs>
        </svg>

        {/* V */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 64 64"
          height={64}
          width={64}
          className="inline-block"
        >
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth={8}
            stroke="url(#b)"
            d="M 12 8 L 32 48 L 52 8"
            className="dash"
            pathLength={360}
          />
        </svg>

        {/* E */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 64 64"
          height={64}
          width={64}
          className="inline-block"
        >
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth={8}
            stroke="url(#c)"
            d="M 12 8 L 12 56 M 12 8 L 48 8 M 12 32 L 40 32 M 12 56 L 48 56"
            className="dash"
            pathLength={360}
          />
        </svg>

        {/* R */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 64 64"
          height={64}
          width={64}
          className="inline-block"
        >
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth={8}
            stroke="url(#d)"
            d="M 12 8 L 12 56 M 12 8 L 44 8 Q 52 8 52 20 Q 52 32 44 32 L 12 32 M 32 32 L 52 56"
            className="dash"
            pathLength={360}
          />
        </svg>

        {/* I */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 64 64"
          height={64}
          width={64}
          className="inline-block"
        >
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth={8}
            stroke="url(#e)"
            d="M 20 8 L 44 8 M 32 8 L 32 56 M 20 56 L 44 56"
            className="dash"
            pathLength={360}
          />
        </svg>

        {/* B */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 64 64"
          height={64}
          width={64}
          className="inline-block"
        >
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth={8}
            stroke="url(#f)"
            d="M 12 8 L 12 56 M 12 8 L 40 8 Q 48 8 48 20 Q 48 32 40 32 L 12 32 M 12 32 L 44 32 Q 52 32 52 44 Q 52 56 44 56 L 12 56"
            className="dash"
            pathLength={360}
          />
        </svg>

        {/* E */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 64 64"
          height={64}
          width={64}
          className="inline-block"
        >
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth={8}
            stroke="url(#g)"
            d="M 12 8 L 12 56 M 12 8 L 48 8 M 12 32 L 40 32 M 12 56 L 48 56"
            className="dash"
            pathLength={360}
          />
        </svg>

        {/* E */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 64 64"
          height={64}
          width={64}
          className="inline-block"
        >
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth={8}
            stroke="url(#h)"
            d="M 12 8 L 12 56 M 12 8 L 48 8 M 12 32 L 40 32 M 12 56 L 48 56"
            className="dash"
            pathLength={360}
          />
        </svg>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  .absolute {
    position: absolute;
  }

  .inline-block {
    display: inline-block;
  }

  .loader {
    display: flex;
    margin: 0.25em 0;
    gap: 0.25em;
  }

  .w-2 {
    width: 0.5em;
  }

  .dash {
    animation: dashArray 2s ease-in-out infinite,
      dashOffset 2s linear infinite;
  }

  .spin {
    animation: spinDashArray 2s ease-in-out infinite,
      spin 8s ease-in-out infinite,
      dashOffset 2s linear infinite;
    transform-origin: center;
  }

  @keyframes dashArray {
    0% {
      stroke-dasharray: 0 1 359 0;
    }

    50% {
      stroke-dasharray: 0 359 1 0;
    }

    100% {
      stroke-dasharray: 359 1 0 0;
    }
  }

  @keyframes spinDashArray {
    0% {
      stroke-dasharray: 270 90;
    }

    50% {
      stroke-dasharray: 0 360;
    }

    100% {
      stroke-dasharray: 270 90;
    }
  }

  @keyframes dashOffset {
    0% {
      stroke-dashoffset: 365;
    }

    100% {
      stroke-dashoffset: 5;
    }
  }

  @keyframes spin {
    0% {
      rotate: 0deg;
    }

    12.5%,
    25% {
      rotate: 270deg;
    }

    37.5%,
    50% {
      rotate: 540deg;
    }

    62.5%,
    75% {
      rotate: 810deg;
    }

    87.5%,
    100% {
      rotate: 1080deg;
    }
  }
`

export default Loader
