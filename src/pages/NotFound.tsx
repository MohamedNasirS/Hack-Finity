
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md animate-fade-in">
        <div className="text-hackfinity-blue text-9xl font-bold mb-4 font-['Space_Grotesk']">404</div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-hackfinity-gray mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-hackfinity-blue text-white hover:bg-hackfinity-skyblue">
          <NavLink to="/">Return to Homepage</NavLink>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
