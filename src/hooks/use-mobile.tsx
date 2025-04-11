
import * as React from "react"

export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
};

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    // Initial check for mobile on mount
    const checkMobile = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    
    // Set initial value
    checkMobile();
    
    // Set up event listeners for window resize
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    mql.addEventListener("change", checkMobile);
    window.addEventListener("resize", checkMobile);
    
    // Clean up event listeners
    return () => {
      mql.removeEventListener("change", checkMobile);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return isMobile;
}

export function useBreakpoint(breakpoint: Breakpoint) {
  const [isBelow, setIsBelow] = React.useState<boolean>(false);
  const breakpointValue = BREAKPOINTS[breakpoint];

  React.useEffect(() => {
    // Check if current width is below specified breakpoint
    const checkBreakpoint = () => setIsBelow(window.innerWidth < breakpointValue);
    
    // Set initial value
    checkBreakpoint();
    
    // Set up event listeners
    const mql = window.matchMedia(`(max-width: ${breakpointValue - 1}px)`);
    mql.addEventListener("change", checkBreakpoint);
    window.addEventListener("resize", checkBreakpoint);
    
    // Clean up
    return () => {
      mql.removeEventListener("change", checkBreakpoint);
      window.removeEventListener("resize", checkBreakpoint);
    };
  }, [breakpointValue]);

  return isBelow;
}
