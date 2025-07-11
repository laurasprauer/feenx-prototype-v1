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
      { label: "Heart healthy", color: "#FFF4F1" },
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
              width="17"
              height="17"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.458252 5.49992C0.458252 4.80478 0.590023 4.15165 0.853564 3.54054C1.11711 2.92943 1.47804 2.39471 1.93638 1.93638C2.39471 1.47804 2.92943 1.11711 3.54054 0.853564C4.15165 0.590023 4.80478 0.458252 5.49992 0.458252C5.94297 0.458252 6.36693 0.511724 6.77179 0.618669C7.17665 0.725613 7.56242 0.878391 7.92908 1.077C8.17353 1.01589 8.43516 0.973877 8.71398 0.95096C8.9928 0.928044 9.29644 0.916585 9.62492 0.916585C9.62492 1.20686 9.61537 1.47995 9.59627 1.73586C9.57717 1.99176 9.54853 2.23047 9.51033 2.452C9.83117 2.87978 10.0833 3.35148 10.2666 3.86711C10.4499 4.38273 10.5416 4.927 10.5416 5.49992C10.5416 6.19506 10.4098 6.84818 10.1463 7.45929C9.88273 8.0704 9.52179 8.60513 9.06346 9.06346C8.60513 9.52179 8.0704 9.88273 7.45929 10.1463C6.84818 10.4098 6.19506 10.5416 5.49992 10.5416C4.80478 10.5416 4.15165 10.4098 3.54054 10.1463C2.92943 9.88273 2.39471 9.52179 1.93638 9.06346C1.47804 8.60513 1.11711 8.0704 0.853564 7.45929C0.590023 6.84818 0.458252 6.19506 0.458252 5.49992Z"
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
              width="17"
              height="19"
              viewBox="0 0 17 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.88889 19C1.36944 19 0.924769 18.814 0.554861 18.4419C0.184954 18.0698 0 17.6225 0 17.1V3.8C0 3.2775 0.184954 2.83021 0.554861 2.45812C0.924769 2.08604 1.36944 1.9 1.88889 1.9H2.83333V0.95C2.83333 0.680833 2.92384 0.455208 3.10486 0.273125C3.28588 0.0910417 3.51019 0 3.77778 0C4.04537 0 4.26968 0.0910417 4.45069 0.273125C4.63171 0.455208 4.72222 0.680833 4.72222 0.95V1.9H12.2778V0.95C12.2778 0.680833 12.3683 0.455208 12.5493 0.273125C12.7303 0.0910417 12.9546 0 13.2222 0C13.4898 0 13.7141 0.0910417 13.8951 0.273125C14.0762 0.455208 14.1667 0.680833 14.1667 0.95V1.9H15.1111C15.6306 1.9 16.0752 2.08604 16.4451 2.45812C16.815 2.83021 17 3.2775 17 3.8V17.1C17 17.6225 16.815 18.0698 16.4451 18.4419C16.0752 18.814 15.6306 19 15.1111 19H1.88889Z"
                fill="#1D2F29"
                className="group-hover:fill-white transition-colors"
              />
            </svg>
            Meal Prep Blueprint
          </Link>

          <button className="group flex items-center gap-2 bg-white text-[#1D2F29] px-4 py-2 rounded-full text-sm font-medium border border-gray-200 hover:bg-[#4FA587] hover:text-white transition-colors">
            <svg
              width="17"
              height="19"
              viewBox="0 0 17 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.88889 19C1.36944 19 0.924769 18.814 0.554861 18.4419C0.184954 18.0698 0 17.6225 0 17.1V3.8C0 3.2775 0.184954 2.83021 0.554861 2.45812C0.924769 2.08604 1.36944 1.9 1.88889 1.9H2.83333V0.95C2.83333 0.680833 2.92384 0.455208 3.10486 0.273125C3.28588 0.0910417 3.51019 0 3.77778 0C4.04537 0 4.26968 0.0910417 4.45069 0.273125C4.63171 0.455208 4.72222 0.680833 4.72222 0.95V1.9H12.2778V0.95C12.2778 0.680833 12.3683 0.455208 12.5493 0.273125C12.7303 0.0910417 12.9546 0 13.2222 0C13.4898 0 13.7141 0.0910417 13.8951 0.273125C14.0762 0.455208 14.1667 0.680833 14.1667 0.95V1.9H15.1111C15.6306 1.9 16.0752 2.08604 16.4451 2.45812C16.815 2.83021 17 3.2775 17 3.8V17.1C17 17.6225 16.815 18.0698 16.4451 18.4419C16.0752 18.814 15.6306 19 15.1111 19H1.88889Z"
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
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10 15V6.5C10 5.11929 11.1193 4 12.5 4C13.8807 4 15 5.11929 15 6.5V9M6 15H5C3.89543 15 3 14.1046 3 13V11C3 9.89543 3.89543 9 5 9H7L10 5V15H8L6 15ZM6 15L8 18.5C8.55228 19.0523 9.22065 19.3657 9.9213 19.3891L11.5 19.4211C13.9853 19.5152 16 17.6258 16 15.1391V13C16 11.3431 14.6569 10 13 10H11"
                            stroke={
                              dislikedRecipes.includes(recipe.id)
                                ? "white"
                                : "#666"
                            }
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
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
