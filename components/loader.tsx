"use client"

import IncomingLoader from "./loader-incoming"

export default function Loader() {
  return (
    <div className="veribee-loader grid place-items-center">
      {/* Force all animations inside the imported loader to 2s */}
      <style
        // This overrides styled-components/class animations within the loader
        dangerouslySetInnerHTML={{
          __html: `
            .veribee-loader *, 
            .veribee-loader *::before, 
            .veribee-loader *::after {
              animation-duration: 2s !important;
            }
          `,
        }}
      />
      <IncomingLoader />
    </div>
  )
}
