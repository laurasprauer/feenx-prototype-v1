import { FeenXLogo } from "@/components/FeenXLogo";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center px-4 text-center">
      {/* Logo */}
      <div className="mb-8">
        <FeenXLogo />
      </div>

      {/* 404 Message */}
      <h1 className="text-white text-6xl md:text-8xl font-display font-bold mb-4">
        404
      </h1>
      <h2 className="text-white text-2xl md:text-3xl font-sans font-semibold mb-4">
        Page Not Found
      </h2>
      <p className="text-white/70 text-lg mb-8 max-w-md font-sans">
        The page you're looking for doesn't exist. Let's get you back on track.
      </p>

      {/* Back to Home Button */}
      <Button
        onClick={() => navigate("/")}
        size="lg"
        className="bg-feenx-orange hover:bg-feenx-orange-hover text-white font-sans font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
      >
        Back to Home
      </Button>
    </div>
  );
}
