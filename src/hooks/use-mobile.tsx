
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)

  React.useEffect(() => {
    // Initial check for mobile on mount
    const checkMobile = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    
    // Set initial value
    checkMobile();
    
    // Set up event listeners for window resize
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    mql.addEventListener("change", checkMobile)
    window.addEventListener("resize", checkMobile)
    
    // Clean up event listeners
    return () => {
      mql.removeEventListener("change", checkMobile)
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  return isMobile
}
