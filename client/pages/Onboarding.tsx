
import { useState } from "react";
import { FeenXLogo } from "@/components/FeenXLogo";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Target, Zap, Flower2, UtensilsCrossed, Flame, Sprout, Dumbbell, Heart } from "lucide-react";

const goals = [
  {
    id: "weight-management",
    title: "Weight Management",
    description: "Maintain or adjust weight healthily",
    icon: Target,
  },
  {
    id: "boost-energy",
    title: "Boost Energy",
    description: "Combat fatigue and maintain vitality",
    icon: Zap,
  },
  {
    id: "hormone-balance",
    title: "Hormone Balance",
    description: "Support hormonal transitions naturally",
    icon: Flower2,
  },
  {
    id: "meal-prep-mastery",
    title: "Meal Prep Mastery",
    description: "Streamline your meal preparation routine",
    icon: UtensilsCrossed,
  },
  {
    id: "reduce-inflammation",
    title: "Reduce Inflammation",
    description: "Support anti-inflammatory eating",
    icon: Flame,
  },
  {
    id: "longevity",
    title: "Longevity",
    description: "Optimize health for the long term",
    icon: Sprout,
  },
  {
    id: "athletic-performance",
    title: "Athletic Performance",
    description: "Optimize Your Body, Elevate Your Game",
    icon: Dumbbell,
  },
  {
    id: "manage-chronic-conditions",
    title: "Manage Chronic Conditions",
    description: "Control What You Can, Daily",
    icon: Heart,
  },
];

export default function Onboarding() {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const handleGoalToggle = (goalId: string) => {
    setSelectedGoals(prev => 
      prev.includes(goalId) 
        ? prev.filter(id => id !== goalId)
        : [...prev, goalId]
    );
  };

  const handleNext = () => {
    // TODO: Navigate to step 2 of onboarding
    console.log("Selected goals:", selectedGoals);
  };

  const handleBack = () => {
    // Navigate back to homepage
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-slate-800 px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <FeenXLogo />
        </div>
      </div>

      {/* Progress indicator */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-center space-x-8 mb-12">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-500 text-white font-semibold">
            1
          </div>
          <div className="w-16 h-0.5 bg-teal-200"></div>
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-200 text-teal-600 font-semibold">
            2
          </div>
          <div className="w-16 h-0.5 bg-teal-200"></div>
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-200 text-teal-600 font-semibold">
            3
          </div>
          <div className="w-16 h-0.5 bg-teal-200"></div>
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-200 text-teal-600 font-semibold">
            4
          </div>
        </div>

        {/* Main content */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            What are your main goals?
          </h1>
          <p className="text-lg text-slate-600">
            Select all that apply to personalize your experience.
          </p>
        </div>

        {/* Goals grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          {goals.map((goal) => {
            const IconComponent = goal.icon;
            const isSelected = selectedGoals.includes(goal.id);
            
            return (
              <div
                key={goal.id}
                className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? "border-teal-500 bg-teal-50"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
                onClick={() => handleGoalToggle(goal.id)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-full ${
                    isSelected ? "bg-teal-500" : "bg-slate-100"
                  }`}>
                    <IconComponent 
                      className={`w-6 h-6 ${
                        isSelected ? "text-white" : "text-slate-600"
                      }`} 
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      {goal.title}
                    </h3>
                    <p className="text-slate-600 text-sm">
                      {goal.description}
                    </p>
                  </div>
                  <Checkbox
                    checked={isSelected}
                    onChange={() => handleGoalToggle(goal.id)}
                    className="mt-1"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between max-w-4xl mx-auto">
          <Button
            variant="outline"
            onClick={handleBack}
            className="px-8 py-3 text-slate-600 border-slate-300 hover:bg-slate-50"
          >
            Back
          </Button>
          <Button
            onClick={handleNext}
            disabled={selectedGoals.length === 0}
            className="px-8 py-3 bg-feenx-orange hover:bg-feenx-orange-hover text-white"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
