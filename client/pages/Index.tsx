import { FeenXLogo } from "@/components/FeenXLogo";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F266bc377e3374574a92ed7ad03b8b7e7%2Fe69292171d824a4fba5100c2c187d10a?format=webp&width=800')`,
        }}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-[100px] text-center">
        {/* Logo */}
        <div className="mb-6 sm:mb-8 lg:mb-10">
          <FeenXLogo />
        </div>

        {/* Main Heading */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-3 sm:mb-4 lg:mb-6 max-w-5xl leading-tight">
          Welcome to FeenX
        </h1>

        {/* Subtitle */}
        <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-6 lg:mb-8 max-w-[500px] font-sans font-medium leading-relaxed">
          Your nutrition platform for real-life.
        </h2>

        {/* Description */}
        <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl mb-3 sm:mb-4 lg:mb-6 max-w-[500px] leading-relaxed px-2 font-sans">
          FeenX builds your personalized blueprint designed around your body,
          your goals, and your day.
        </p>

        {/* Tagline */}
        <p className="text-white/90 text-xs sm:text-sm md:text-base lg:text-lg mb-8 sm:mb-10 lg:mb-12 max-w-[500px] px-2 font-sans">
          The future of nutrition isn't generic. It's yours.
        </p>

        {/* CTA Button */}
        <Button
          size="lg"
          className="bg-feenx-orange hover:bg-feenx-orange-hover text-white font-sans font-semibold px-12 sm:px-16 lg:px-20 py-4 sm:py-5 lg:py-6 text-sm sm:text-base lg:text-lg rounded-lg transition-all duration-200 mb-6 sm:mb-8 shadow-lg hover:shadow-xl transform hover:scale-105 w-auto min-w-[280px] sm:min-w-[320px]"
        >
          Let's get started
        </Button>

        {/* Login Links */}
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-white/60 text-xs sm:text-sm font-sans">
          <span>Already have an account?</span>
          <div className="flex items-center gap-2">
            <button className="text-white underline hover:text-white/80 transition-colors">
              Login
            </button>
            <span className="text-white/40">|</span>
            <button className="text-white underline hover:text-white/80 transition-colors">
              Trainer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
