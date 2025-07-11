import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";

interface Recipe {
  id: string;
  name: string;
  image: string;
  tags: Tag[];
}

interface Tag {
  label: string;
  color: string;
  textColor?: string;
}

const recipes: Recipe[] = [
  {
    id: "sunlit-beet",
    name: "Sunlit Beet & Garden Herb Bowl",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F266bc377e3374574a92ed7ad03b8b7e7%2Fe06596e18f9b4dd0870bf0d7497b07da?format=webp&width=800",
    tags: [
      { label: "Low-prep", color: "#BDDFD3" },
      { label: "Hormone balance", color: "#8FE9BC" },
      { label: "Anti-inflammatory", color: "#E95929", textColor: "#FFF" },
    ],
  },
  {
    id: "avocado-crunch",
    name: "Avocado Crunch Salad",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F266bc377e3374574a92ed7ad03b8b7e7%2Fd993e97fea8f439b93205adaf579acdd?format=webp&width=800",
    tags: [
      { label: "Low-prep", color: "#BDDFD3" },
      { label: "Leftovers welcome", color: "#D7CFBA" },
      { label: "Energy boost", color: "#C7F8C5" },
      { label: "Heart healthy", color: "#FFE4D6" },
    ],
  },
  {
    id: "overnight-oats",
    name: "Overnight Oats",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F266bc377e3374574a92ed7ad03b8b7e7%2F072b71aa7c9042518935cf6a26eb0d4e?format=webp&width=800",
    tags: [
      { label: "Energy boost", color: "#C7F8C5" },
      { label: "Anti-inflammatory", color: "#E95929", textColor: "#FFF" },
      { label: "Leftovers welcome", color: "#D7CFBA" },
    ],
  },
  {
    id: "chicken-avocado",
    name: "Chicken & Avocado Power Bowl",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F266bc377e3374574a92ed7ad03b8b7e7%2F1db30bb9a3604841b00e870a429521e0?format=webp&width=800",
    tags: [
      { label: "High protein", color: "#3D7086", textColor: "#FFF" },
      { label: "Energy boost", color: "#C7F8C5" },
      { label: "Low-prep", color: "#BDDFD3" },
      { label: "Anti-inflammatory", color: "#E95929", textColor: "#FFF" },
    ],
  },
];

export default function MealPrepBlueprint() {
  const [selectedRecipes, setSelectedRecipes] = useState<string[]>([]);
  const [dislikedRecipes, setDislikedRecipes] = useState<string[]>([]);
  const { toast } = useToast();

  const toggleRecipe = (recipeId: string) => {
    setSelectedRecipes((prev) => {
      const isSelected = prev.includes(recipeId);
      if (isSelected) {
        return prev.filter((id) => id !== recipeId);
      } else {
        const recipe = recipes.find((r) => r.id === recipeId);
        toast({
          title: "Recipe Added! ✨",
          description: `${recipe?.name} has been saved to your weekly meal plan`,
        });
        return [...prev, recipeId];
      }
    });
  };

  const dislikeRecipe = (recipeId: string) => {
    setDislikedRecipes((prev) => {
      if (prev.includes(recipeId)) {
        return prev.filter((id) => id !== recipeId);
      } else {
        const recipe = recipes.find((r) => r.id === recipeId);
        toast({
          title: "Got it! 👍",
          description: `We'll suggest fewer recipes like ${recipe?.name}`,
        });
        return [...prev, recipeId];
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#E0F1EB]">
      <Header />

      {/* Main Content */}
      <div className="max-w-[900px] mx-auto px-4 py-6">
        {/* Top Section */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-[65px] h-[65px] rounded-full border border-[#1D2F29] bg-white shadow-md overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F266bc377e3374574a92ed7ad03b8b7e7%2F572fbbd844e2486fbda2dc8f56c0d764?format=webp&width=800"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold text-[#1D2F29]">
                Hello, Madison
              </h1>
              <p className="text-[#1D2F29] text-base">
                Let's nourish your body today
              </p>
            </div>
          </div>

          {/* Action Icons */}
          <div className="flex gap-3">
            {/* Settings */}
            <button className="w-[30px] h-[30px] bg-[#1D2F29] rounded-full flex items-center justify-center hover:bg-[#2a3f39] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Messages */}
            <button className="w-[30px] h-[30px] bg-[#1D2F29] rounded-full flex items-center justify-center hover:bg-[#2a3f39] transition-colors">
              <svg
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.1511 12.7695C13.06 12.7695 12.9745 12.7524 12.8948 12.7183C12.8151 12.6842 12.741 12.633 12.6727 12.5647L11.1008 10.9953H4.26649C3.8906 10.9953 3.56882 10.8616 3.30114 10.5944C3.03346 10.3271 2.89962 10.0058 2.89962 9.6305V8.94812H10.4174C10.7933 8.94812 11.115 8.81448 11.3827 8.54722C11.6504 8.27995 11.7842 7.95866 11.7842 7.58335V2.80668H12.4677C12.8436 2.80668 13.1653 2.94031 13.433 3.20758C13.7007 3.47484 13.8345 3.79613 13.8345 4.17144V12.07C13.8345 12.2747 13.7662 12.4425 13.6295 12.5733C13.4928 12.7041 13.3333 12.7695 13.1511 12.7695ZM1.53276 7.02039L2.33579 6.21859H9.05051V1.44191H1.53276V7.02039ZM0.849325 9.35755C0.667077 9.35755 0.50761 9.29215 0.370923 9.16136C0.234237 9.03057 0.165894 8.86282 0.165894 8.6581V1.44191C0.165894 1.0666 0.299732 0.745314 0.56741 0.478048C0.835087 0.210782 1.15687 0.0771484 1.53276 0.0771484H9.05051C9.4264 0.0771484 9.74818 0.210782 10.0159 0.478048C10.2835 0.745314 10.4174 1.0666 10.4174 1.44191V6.21859C10.4174 6.5939 10.2835 6.91519 10.0159 7.18245C9.74818 7.44972 9.4264 7.58335 9.05051 7.58335H2.89962L1.32773 9.15283C1.25938 9.22107 1.18535 9.27225 1.10561 9.30637C1.02588 9.34049 0.94045 9.35755 0.849325 9.35755Z"
                  fill="white"
                />
              </svg>
            </button>

            {/* Notifications */}
            <button className="w-[30px] h-[30px] bg-[#1D2F29] rounded-full flex items-center justify-center hover:bg-[#2a3f39] transition-colors relative">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#E95929] rounded-full"></div>
            </button>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-3 mb-8">
          <Link
            to="/dashboard"
            className="group flex items-center gap-2 bg-white text-[#1D2F29] px-4 py-2 rounded-full text-sm font-medium border border-gray-200 hover:bg-[#4FA587] hover:text-white transition-colors"
          >
            <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
              <path
                d="M7.87524 5.14282L7.94054 5.13968C8.26482 5.10688 8.5181 4.8329 8.5181 4.49997C8.5181 4.16703 8.26482 3.89305 7.94054 3.86025L7.87524 3.85711H1.50003C1.14499 3.85711 0.857178 4.14492 0.857178 4.49997C0.857178 4.85501 1.14499 5.14282 1.50003 5.14282H7.87524Z"
                fill="#1D2F29"
                className="group-hover:fill-white transition-colors"
              />
              <path
                d="M4.57966 7.95453C4.3286 8.20559 3.92167 8.20559 3.67062 7.95453L0.670406 4.95432C0.419565 4.70326 0.419425 4.29627 0.670406 4.04528L3.67062 1.0457C3.92167 0.794652 4.3286 0.794652 4.57966 1.0457C4.8306 1.29676 4.83067 1.70373 4.57966 1.95474L2.03459 4.50043L4.57966 7.04549C4.83071 7.29655 4.83071 7.70348 4.57966 7.95453Z"
                fill="#1D2F29"
                className="group-hover:fill-white transition-colors"
              />
            </svg>
            Dashboard
          </Link>

          <button className="flex items-center gap-2 bg-[#1D2F29] text-white px-4 py-2 rounded-full text-sm font-medium">
            <svg
              width="15"
              height="15"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.458252 5.49992C0.458252 4.80478 0.590023 4.15165 0.853564 3.54054C1.11711 2.92943 1.47804 2.39471 1.93638 1.93638C2.39471 1.47804 2.92943 1.11711 3.54054 0.853564C4.15165 0.590023 4.80478 0.458252 5.49992 0.458252C5.94297 0.458252 6.36693 0.511724 6.77179 0.618669C7.17665 0.725613 7.56242 0.878391 7.92908 1.077C8.17353 1.01589 8.43516 0.973877 8.71398 0.95096C8.9928 0.928044 9.29644 0.916585 9.62492 0.916585C9.62492 1.20686 9.61537 1.47995 9.59627 1.73586C9.57717 1.99176 9.54853 2.23047 9.51033 2.452C9.83117 2.87978 10.0833 3.35148 10.2666 3.86711C10.4499 4.38273 10.5416 4.927 10.5416 5.49992C10.5416 6.19506 10.4098 6.84818 10.1463 7.45929C9.88273 8.0704 9.52179 8.60513 9.06346 9.06346C8.60513 9.52179 8.0704 9.88273 7.45929 10.1463C6.84818 10.4098 6.19506 10.5416 5.49992 10.5416C4.80478 10.5416 4.15165 10.4098 3.54054 10.1463C2.92943 9.88273 2.39471 9.52179 1.93638 9.06346C1.47804 8.60513 1.11711 8.0704 0.853564 7.45929C0.590023 6.84818 0.458252 6.19506 0.458252 5.49992ZM3.21971 5.49992C3.21971 5.6145 3.23881 5.72908 3.277 5.84367C3.3152 5.95825 3.36867 6.0652 3.43742 6.1645L4.58325 7.76867L5.72908 6.1645C5.79783 6.0652 5.85131 5.95825 5.8895 5.84367C5.9277 5.72908 5.94679 5.6145 5.94679 5.49992C5.94679 5.3777 5.9277 5.2612 5.8895 5.15044C5.85131 5.03967 5.79783 4.93464 5.72908 4.83533L4.58325 3.21971L3.43742 4.83533C3.36867 4.93464 3.3152 5.04158 3.277 5.15617C3.23881 5.27075 3.21971 5.38533 3.21971 5.49992ZM1.37492 5.49992C1.37492 6.64575 1.77596 7.61971 2.57804 8.42179C3.38013 9.22388 4.35408 9.62492 5.49992 9.62492C6.64575 9.62492 7.61971 9.22388 8.42179 8.42179C9.22388 7.61971 9.62492 6.64575 9.62492 5.49992C9.62492 5.15617 9.5829 4.82388 9.49888 4.50304C9.41485 4.18221 9.29644 3.87665 9.14367 3.58638C9.08256 3.69332 9.01954 3.79263 8.95461 3.88429C8.88967 3.97596 8.8152 4.06381 8.73117 4.14783C8.62422 4.25478 8.51155 4.34836 8.39315 4.42856C8.27474 4.50877 8.14297 4.57943 7.99783 4.64054C8.21936 4.83152 8.39315 5.05877 8.51919 5.32231C8.64523 5.58586 8.70825 5.87422 8.70825 6.18742C8.70825 6.76033 8.50964 7.24731 8.11242 7.64836C7.7152 8.0494 7.23013 8.24992 6.65721 8.24992C6.4586 8.24992 6.26954 8.22318 6.09002 8.16971C5.91051 8.11624 5.74436 8.04367 5.59158 7.952L5.31658 8.33013C5.23256 8.44471 5.12561 8.53638 4.99575 8.60513C4.86589 8.67388 4.72839 8.70825 4.58325 8.70825C4.43811 8.70825 4.30252 8.67388 4.17648 8.60513C4.05044 8.53638 3.9454 8.44471 3.86138 8.33013L2.69263 6.69158C2.56277 6.51589 2.46728 6.32683 2.40617 6.1244C2.34506 5.92197 2.3145 5.71381 2.3145 5.49992C2.3145 5.28603 2.34506 5.07596 2.40617 4.86971C2.46728 4.66346 2.56277 4.47249 2.69263 4.29679L3.86138 2.65825C3.9454 2.54367 4.05044 2.45391 4.17648 2.38898C4.30252 2.32405 4.43811 2.29158 4.58325 2.29158C4.72839 2.29158 4.86589 2.32405 4.99575 2.38898C5.12561 2.45391 5.23256 2.54367 5.31658 2.65825L5.69471 3.19679C5.75582 2.97527 5.83221 2.7652 5.92388 2.56659C6.01554 2.36797 6.13395 2.18464 6.27908 2.01659C6.34783 1.93256 6.42231 1.85235 6.50252 1.77596C6.58273 1.69957 6.66867 1.63082 6.76033 1.56971C6.56172 1.5086 6.35738 1.46086 6.14731 1.42648C5.93724 1.39211 5.72145 1.37492 5.49992 1.37492C4.35408 1.37492 3.38013 1.77596 2.57804 2.57804C1.77596 3.38013 1.37492 4.35408 1.37492 5.49992ZM6.48533 6.69158L6.11867 7.20721C6.2027 7.2454 6.28672 7.27596 6.37075 7.29888C6.45478 7.32179 6.54645 7.33325 6.64575 7.33325C6.96658 7.33325 7.23776 7.22249 7.45929 7.00096C7.68082 6.77943 7.79158 6.50825 7.79158 6.18742C7.79158 5.89714 7.69801 5.64697 7.51086 5.4369C7.3237 5.22683 7.09263 5.1027 6.81763 5.0645C6.8329 5.14089 6.84436 5.21346 6.852 5.28221C6.85964 5.35096 6.86346 5.42353 6.86346 5.49992C6.86346 5.71381 6.8329 5.92197 6.77179 6.1244C6.71068 6.32683 6.6152 6.51589 6.48533 6.69158ZM8.71971 1.85617C8.36068 1.89436 8.04749 1.96311 7.78013 2.06242C7.51276 2.16172 7.28742 2.30304 7.10408 2.48638C6.92075 2.66971 6.7737 2.89506 6.66294 3.16242C6.55217 3.42978 6.4777 3.75443 6.4395 4.13638C6.80617 4.09818 7.12318 4.02752 7.39054 3.9244C7.6579 3.82127 7.88325 3.67804 8.06658 3.49471C8.24992 3.31138 8.39506 3.08412 8.502 2.81294C8.60894 2.54176 8.68151 2.22284 8.71971 1.85617ZM4.11346 6.59992C4.04471 6.53117 4.01033 6.44905 4.01033 6.35356C4.01033 6.25808 4.04471 6.17596 4.11346 6.10721L4.42283 5.79783L4.02179 5.477C3.93777 5.41589 3.89575 5.33377 3.89575 5.23065C3.89575 5.12752 3.93013 5.04158 3.99888 4.97283L4.57179 4.39992C4.64054 4.33117 4.72075 4.29679 4.81242 4.29679C4.90408 4.29679 4.98429 4.33117 5.05304 4.39992C5.12179 4.46867 5.15617 4.54888 5.15617 4.64054C5.15617 4.73221 5.12179 4.81242 5.05304 4.88117L4.74367 5.19054L5.14471 5.52283C5.22874 5.58395 5.27075 5.66606 5.27075 5.76919C5.27075 5.87231 5.23638 5.95825 5.16763 6.027L4.59471 6.59992C4.52596 6.66867 4.44575 6.70304 4.35408 6.70304C4.26242 6.70304 4.18221 6.66867 4.11346 6.59992Z"
                fill="white"
              />
            </svg>
            Select Recipes
          </button>

          <Link
            to="/meal-prep-blueprint"
            className="group flex items-center gap-2 bg-white text-[#1D2F29] px-4 py-2 rounded-full text-sm font-medium border border-gray-200 hover:bg-[#4FA587] hover:text-white transition-colors"
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3 19C11.7167 19 10.3708 18.4458 9.2625 17.3375C8.15417 16.2292 7.6 14.8833 7.6 13.3C7.6 11.7167 8.15417 10.3708 9.2625 9.2625C10.3708 8.15417 11.7167 7.6 13.3 7.6C14.8833 7.6 16.2292 8.15417 17.3375 9.2625C18.4458 10.3708 19 11.7167 19 13.3C19 14.8833 18.4458 16.2292 17.3375 17.3375C16.2292 18.4458 14.8833 19 13.3 19ZM13.3 17.1C14.345 17.1 15.2396 16.7279 15.9837 15.9837C16.7279 15.2396 17.1 14.345 17.1 13.3C17.1 12.255 16.7279 11.3604 15.9837 10.6163C15.2396 9.87208 14.345 9.5 13.3 9.5C12.255 9.5 11.3604 9.87208 10.6163 10.6163C9.87208 11.3604 9.5 12.255 9.5 13.3C9.5 14.345 9.87208 15.2396 10.6163 15.9837C11.3604 16.7279 12.255 17.1 13.3 17.1ZM1.9 17.1C1.3775 17.1 0.930208 16.914 0.558125 16.5419C0.186042 16.1698 0 15.7225 0 15.2V7.98C0 7.85333 0.011875 7.72667 0.035625 7.6C0.059375 7.47333 0.095 7.34667 0.1425 7.22L2.0425 2.85H1.9C1.63083 2.85 1.40521 2.75896 1.22312 2.57687C1.04104 2.39479 0.95 2.16917 0.95 1.9V0.95C0.95 0.680833 1.04104 0.455208 1.22312 0.273125C1.40521 0.0910417 1.63083 0 1.9 0H8.55C8.81917 0 9.04479 0.0910417 9.22688 0.273125C9.40896 0.455208 9.5 0.680833 9.5 0.95V1.9C9.5 2.16917 9.40896 2.39479 9.22688 2.57687C9.04479 2.75896 8.81917 2.85 8.55 2.85H8.4075L9.975 6.46C9.67417 6.61833 9.38917 6.78458 9.12 6.95875C8.85083 7.13292 8.5975 7.33083 8.36 7.5525L6.365 2.85H4.085L1.9 7.98V15.2H5.9375C6.01667 15.5325 6.12354 15.861 6.25812 16.1856C6.39271 16.5102 6.555 16.815 6.745 17.1H1.9ZM13.3 6.65C12.635 6.65 12.0729 6.42042 11.6137 5.96125C11.1546 5.50208 10.925 4.94 10.925 4.275C10.925 3.61 11.1546 3.04792 11.6137 2.58875C12.0729 2.12958 12.635 1.9 13.3 1.9V6.65C13.3 5.985 13.5296 5.42292 13.9887 4.96375C14.4479 4.50458 15.01 4.275 15.675 4.275C16.34 4.275 16.9021 4.50458 17.3612 4.96375C17.8204 5.42292 18.05 5.985 18.05 6.65H13.3Z"
                fill="#1D2F29"
                className="group-hover:fill-white transition-colors"
              />
            </svg>
            Meal Prep Blueprint
          </Link>

          <button className="group flex items-center gap-2 bg-white text-[#1D2F29] px-4 py-2 rounded-full text-sm font-medium border border-gray-200 hover:bg-[#4FA587] hover:text-white transition-colors">
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3 19C11.7167 19 10.3708 18.4458 9.2625 17.3375C8.15417 16.2292 7.6 14.8833 7.6 13.3C7.6 11.7167 8.15417 10.3708 9.2625 9.2625C10.3708 8.15417 11.7167 7.6 13.3 7.6C14.8833 7.6 16.2292 8.15417 17.3375 9.2625C18.4458 10.3708 19 11.7167 19 13.3C19 14.8833 18.4458 16.2292 17.3375 17.3375C16.2292 18.4458 14.8833 19 13.3 19ZM13.3 17.1C14.345 17.1 15.2396 16.7279 15.9837 15.9837C16.7279 15.2396 17.1 14.345 17.1 13.3C17.1 12.255 16.7279 11.3604 15.9837 10.6163C15.2396 9.87208 14.345 9.5 13.3 9.5C12.255 9.5 11.3604 9.87208 10.6163 10.6163C9.87208 11.3604 9.5 12.255 9.5 13.3C9.5 14.345 9.87208 15.2396 10.6163 15.9837C11.3604 16.7279 12.255 17.1 13.3 17.1ZM1.9 17.1C1.3775 17.1 0.930208 16.914 0.558125 16.5419C0.186042 16.1698 0 15.7225 0 15.2V7.98C0 7.85333 0.011875 7.72667 0.035625 7.6C0.059375 7.47333 0.095 7.34667 0.1425 7.22L2.0425 2.85H1.9C1.63083 2.85 1.40521 2.75896 1.22312 2.57687C1.04104 2.39479 0.95 2.16917 0.95 1.9V0.95C0.95 0.680833 1.04104 0.455208 1.22312 0.273125C1.40521 0.0910417 1.63083 0 1.9 0H8.55C8.81917 0 9.04479 0.0910417 9.22688 0.273125C9.40896 0.455208 9.5 0.680833 9.5 0.95V1.9C9.5 2.16917 9.40896 2.39479 9.22688 2.57687C9.04479 2.75896 8.81917 2.85 8.55 2.85H8.4075L9.975 6.46C9.67417 6.61833 9.38917 6.78458 9.12 6.95875C8.85083 7.13292 8.5975 7.33083 8.36 7.5525L6.365 2.85H4.085L1.9 7.98V15.2H5.9375C6.01667 15.5325 6.12354 15.861 6.25812 16.1856C6.39271 16.5102 6.555 16.815 6.745 17.1H1.9ZM13.3 6.65C12.635 6.65 12.0729 6.42042 11.6137 5.96125C11.1546 5.50208 10.925 4.94 10.925 4.275C10.925 3.61 11.1546 3.04792 11.6137 2.58875C12.0729 2.12958 12.635 1.9 13.3 1.9V6.65C13.3 5.985 13.5296 5.42292 13.9887 4.96375C14.4479 4.50458 15.01 4.275 15.675 4.275C16.34 4.275 16.9021 4.50458 17.3612 4.96375C17.8204 5.42292 18.05 5.985 18.05 6.65H13.3Z"
                fill="#1D2F29"
                className="group-hover:fill-white transition-colors"
              />
            </svg>
            View Meal Plan
          </button>
        </div>

        {/* Recipe Grid */}
        <div className="bg-white rounded-lg border border-[#1D2F29] shadow-sm">
          <div className="bg-[#1D2F29] text-white p-6 rounded-t-lg">
            <h2 className="text-2xl font-bold text-center mb-2 font-display">
              These recipes were handpicked with you in mind
            </h2>
            <p className="text-center text-base opacity-90">
              Personalized meal prep to match your goals and taste.
            </p>
          </div>

          <div className="p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recipes.map((recipe) => (
                <div
                  key={recipe.id}
                  className="bg-white rounded-md border border-[#4FA587] overflow-hidden group hover:shadow-md transition-shadow"
                >
                  {/* Recipe Image */}
                  <div className="h-[185px] relative overflow-hidden">
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Recipe Content */}
                  <div className="p-5 border-t border-[#D9D9D9] bg-[#FBFBFB] relative">
                    <h3 className="text-base font-semibold text-[#1D2F29] mb-3">
                      {recipe.name}
                    </h3>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {recipe.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full text-xs"
                          style={{
                            backgroundColor: tag.color,
                            color: tag.textColor || "#1D2F29",
                          }}
                        >
                          {tag.label}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute bottom-5 right-5 flex gap-2">
                      {/* Thumbs Down Button */}
                      <button
                        onClick={() => dislikeRecipe(recipe.id)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                          dislikedRecipes.includes(recipe.id)
                            ? "bg-[#E95929] hover:bg-[#d44a1e]"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 -960 960 960"
                          width="24px"
                          fill={
                            dislikedRecipes.includes(recipe.id)
                              ? "white"
                              : "#5f6368"
                          }
                        >
                          <path d="M120-320q-32 0-56-24t-24-56v-80q0-7 2-15t4-15l120-282q9-20 30-34t44-14h440v520L440-82q-15 15-35.5 17.5T365-72q-19-10-28-28t-4-37l45-183H120Zm480-34v-406H240L120-480v80h360l-54 220 174-174Zm200-486q33 0 56.5 23.5T880-760v360q0 33-23.5 56.5T800-320H680v-80h120v-360H680v-80h120Zm-200 80v406-406Z" />
                        </svg>
                      </button>

                      {/* Add/Selected Button */}
                      <button
                        onClick={() => toggleRecipe(recipe.id)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                          selectedRecipes.includes(recipe.id)
                            ? "bg-[#4FA587] hover:bg-[#3F8F77]"
                            : "bg-[#1D2F29] hover:bg-[#2a3f39]"
                        }`}
                      >
                        {selectedRecipes.includes(recipe.id) ? (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M20 6L9 17L4 12"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12 5V19M5 12H19"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
