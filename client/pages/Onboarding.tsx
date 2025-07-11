
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FeenXLogo } from "@/components/FeenXLogo";
import { Button } from "@/components/ui/button";
import { Scale, Zap, Flower2, ChefHat, Flame, Sprout, Dumbbell, Heart } from "lucide-react";

const goals = [
  {
    id: "weight-management",
    title: "Weight Management",
    description: "Maintain or adjust weight healthily",
    icon: Scale,
    color: "bg-gray-500"
  },
  {
    id: "boost-energy",
    title: "Boost Energy",
    description: "Combat fatigue and maintain vitality",
    icon: Zap,
    color: "bg-yellow-500"
  },
  {
    id: "hormone-balance",
    title: "Hormone Balance",
    description: "Support hormonal transitions naturally",
    icon: Flower2,
    color: "bg-green-500"
  },
  {
    id: "meal-prep-mastery",
    title: "Meal Prep Mastery",
    description: "Streamline your meal preparation routine",
    icon: ChefHat,
    color: "bg-blue-500"
  },
  {
    id: "reduce-inflammation",
    title: "Reduce Inflammation",
    description: "Support anti-inflammatory eating",
    icon: Flame,
    color: "bg-red-500"
  },
  {
    id: "longevity",
    title: "Longevity",
    description: "Optimize health for the long term",
    icon: Sprout,
    color: "bg-green-600"
  },
  {
    id: "athletic-performance",
    title: "Athletic Performance",
    description: "Optimize Your Body, Elevate Your Game",
    icon: Dumbbell,
    color: "bg-gray-600"
  },
  {
    id: "manage-chronic-conditions",
    title: "Manage Chronic Conditions",
    description: "Control What You Can, Daily",
    icon: Heart,
    color: "bg-teal-500"
  }
];

export default function Onboarding() {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const navigate = useNavigate();

  const toggleGoal = (goalId: string) => {
    setSelectedGoals(prev =>
      prev.includes(goalId)
        ? prev.filter(id => id !== goalId)
        : [...prev, goalId]
    );
  };

  const handleBack = () => {
    navigate("/");
  };

  const handleNext = () => {
    // TODO: Navigate to step 2 of onboarding
    console.log("Selected goals:", selectedGoals);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-teal-100">
      {/* Header with Logo */}
      <div className="bg-teal-800 py-4">
        <div className="flex justify-center">
          <FeenXLogo />
        </div>
      </div>

      {/* Progress Bar */}
      <div className="flex justify-center py-8">
        <div className="flex items-center space-x-8">
          <div className="flex items-center justify-center w-8 h-8 bg-teal-600 text-white rounded-full text-sm font-medium">
            1
          </div>
          <div className="w-16 h-0.5 bg-teal-300"></div>
          <div className="flex items-center justify-center w-8 h-8 bg-teal-300 text-teal-600 rounded-full text-sm font-medium">
            2
          </div>
          <div className="w-16 h-0.5 bg-teal-300"></div>
          <div className="flex items-center justify-center w-8 h-8 bg-teal-300 text-teal-600 rounded-full text-sm font-medium">
            3
          </div>
          <div className="w-16 h-0.5 bg-teal-300"></div>
          <div className="flex items-center justify-center w-8 h-8 bg-teal-300 text-teal-600 rounded-full text-sm font-medium">
            4
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        {/* Title and Description */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            What are your main goals?
          </h1>
          <p className="text-gray-600 text-lg">
            Select all that apply to personalize your experience.
          </p>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {goals.map((goal) => {
            const Icon = goal.icon;
            const isSelected = selectedGoals.includes(goal.id);
            
            return (
              <div
                key={goal.id}
                onClick={() => toggleGoal(goal.id)}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? "border-teal-500 bg-white shadow-lg"
                    : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md"
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-12 h-12 rounded-full ${goal.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {goal.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {goal.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <Button
            onClick={handleBack}
            variant="outline"
            className="px-8 py-3 bg-teal-200 text-teal-700 border-teal-300 hover:bg-teal-300"
          >
            Back
          </Button>
          <Button
            onClick={handleNext}
            className="px-8 py-3 bg-feenx-orange hover:bg-feenx-orange-hover text-white"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
