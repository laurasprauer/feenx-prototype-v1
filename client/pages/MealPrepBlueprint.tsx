import { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

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
      { label: "Heart healthy", color: "#FFCCCB" },
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
      {/* Header */}
      <header className="bg-[#1D2F29] w-full h-[58px] flex items-center justify-center">
        <svg
          width="152"
          height="35"
          viewBox="0 0 152 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.1391 34.256L19.3681 18.7094C19.3612 18.6914 19.3452 18.6793 19.3271 18.6793H19.0865C19.062 18.6793 19.0429 18.7007 19.0423 18.7267C19.0423 18.8139 19.0322 27.4676 19.0322 28.1317C19.0322 29.4582 19.3516 30.6091 19.9814 31.5533C20.4849 32.3081 21.1865 32.9324 22.067 33.4088C23.5628 34.2179 25.0794 34.3201 25.0949 34.3212C25.0959 34.3212 25.0965 34.3212 25.0975 34.3212C25.1119 34.3212 25.1252 34.3137 25.1332 34.3016C25.1417 34.2883 25.1438 34.271 25.1385 34.256H25.1391Z"
            fill="white"
          />
          <path
            d="M31.5785 29.96L20.4774 18.3039C20.4646 18.2906 20.4455 18.2866 20.429 18.2947L20.2091 18.4009C20.1867 18.4119 20.1772 18.4396 20.1867 18.4639C20.2192 18.5436 23.4547 26.4535 23.7038 27.0598C24.201 28.2714 24.9244 29.1821 25.8539 29.7671C26.597 30.2349 27.4721 30.4953 28.4548 30.5421C30.1247 30.6212 31.5487 30.0455 31.563 30.0397C31.5636 30.0397 31.5646 30.0391 31.5652 30.0385C31.5779 30.0322 31.5875 30.0195 31.5902 30.0045C31.5934 29.9883 31.5886 29.9721 31.5779 29.9606L31.5785 29.96Z"
            fill="white"
          />
          <path
            d="M35.8504 23.1936L21.3393 17.4435C21.3223 17.4365 21.3036 17.4417 21.2914 17.4562L21.1306 17.6502C21.1146 17.6698 21.1157 17.6999 21.1338 17.7178C21.1934 17.7761 27.115 23.5747 27.5696 24.0188C28.4783 24.9064 29.4806 25.4192 30.5485 25.5434C31.4029 25.6427 32.2998 25.4943 33.2154 25.1033C34.7709 24.4386 35.8552 23.2842 35.8664 23.2727C35.8669 23.2721 35.8675 23.2715 35.868 23.2709C35.8776 23.2594 35.8813 23.2438 35.8781 23.2288C35.8749 23.2126 35.8643 23.1999 35.8504 23.1941V23.1936Z"
            fill="white"
          />
          <path
            d="M37.2159 15.1278L21.8036 16.2776C21.7855 16.2788 21.7706 16.292 21.7647 16.3105L21.6902 16.5583C21.6827 16.5831 21.6955 16.6102 21.7184 16.6183C21.795 16.6455 29.378 19.3296 29.9604 19.5346C31.123 19.9447 32.2313 19.9707 33.2533 19.6126C34.071 19.3262 34.8349 18.7955 35.5247 18.0337C36.6964 16.7402 37.2548 15.2069 37.2601 15.1919C37.2601 15.1913 37.2607 15.1902 37.2612 15.1896C37.2654 15.1752 37.2633 15.159 37.2548 15.1469C37.2458 15.1336 37.2314 15.1267 37.2165 15.1278H37.2159Z"
            fill="white"
          />
          <path
            d="M35.4395 7.15607L21.7907 15.0076C21.7747 15.0169 21.7657 15.0354 21.7678 15.055L21.7928 15.3143C21.7955 15.3403 21.8168 15.3593 21.8413 15.357C21.9211 15.3478 29.8554 14.4538 30.4639 14.3845C31.6797 14.2459 32.7018 13.7811 33.5013 13.0026C34.1406 12.3801 34.64 11.5577 34.9844 10.5581C35.5699 8.85909 35.505 7.21267 35.5039 7.19592C35.5039 7.19476 35.5039 7.19419 35.5039 7.19303C35.5023 7.17802 35.4943 7.16416 35.4821 7.15665C35.4688 7.14857 35.4528 7.14857 35.4395 7.15607Z"
            fill="white"
          />
          <path
            d="M30.8279 0.657504L21.3025 13.8526C21.2914 13.8682 21.2903 13.889 21.2993 13.9057L21.4197 14.1315C21.4319 14.1541 21.4585 14.1621 21.4798 14.1489C21.5495 14.1055 28.4623 9.78764 28.9925 9.45558C30.0513 8.79262 30.8104 7.91657 31.2495 6.85283C31.6003 6.00219 31.7478 5.03085 31.6876 3.96537C31.5854 2.15494 30.9089 0.679449 30.9019 0.664434C30.9019 0.663856 30.9014 0.662701 30.9009 0.662124C30.894 0.648841 30.8812 0.640179 30.8673 0.638446C30.8524 0.636714 30.8375 0.643644 30.8285 0.656349L30.8279 0.657504Z"
            fill="white"
          />
          <path
            d="M48.512 27.417V7.61292H61.8736V10.5286H51.8341V16.7181H59.9213V19.6055H51.8341V27.417H48.512Z"
            fill="white"
          />
          <path
            d="M71.8382 20.9257C71.8382 24.0619 73.2585 24.5844 76.9092 24.5844H81.9297V27.4718H76.9092C70.6978 27.4718 68.5682 26.1798 68.5682 21.0086V7.61292H81.6515V10.4191H71.8398V15.5356H80.1304V18.3418H71.8398V20.9275L71.8382 20.9257Z"
            fill="white"
          />
          <path
            d="M92.0685 20.9257C92.0685 24.0619 93.4888 24.5844 97.1395 24.5844H102.16V27.4718H97.1395C90.928 27.4718 88.7985 26.1798 88.7985 21.0086V7.61292H101.882V10.4191H92.0701V15.5356H100.361V18.3418H92.0701V20.9275L92.0685 20.9257Z"
            fill="white"
          />
          <path
            d="M109.383 7.61292H112.679C116.431 10.1156 120.21 13.8025 123.607 18.093V7.61292H126.903V27.417H123.607V23.5113C119.856 18.3136 115.975 14.3249 112.679 11.7658V27.417H109.383V7.61292Z"
            fill="white"
          />
          <path
            d="M148.264 7.61292H151.713C150.673 10.7492 148.316 14.2967 145.171 17.4594C148.314 20.6504 150.673 24.2525 151.713 27.417H148.264C147.555 25.2709 145.476 21.7517 142.685 19.0284C139.871 21.7517 137.792 25.2727 137.083 27.417H133.634C134.724 24.2543 137.083 20.6504 140.149 17.4594C137.081 14.2967 134.724 10.7474 133.634 7.61292H137.083C137.792 9.73082 139.871 13.1971 142.685 15.8639C145.474 13.1953 147.553 9.73082 148.264 7.61292Z"
            fill="white"
          />
        </svg>
      </header>

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
                <path
                  d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5842 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6642 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6642 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33058 4.58054 7.63503 4.73519 7.95939 4.794C8.28376 4.85282 8.61833 4.81312 8.92 4.68C9.21576 4.55324 9.46799 4.34276 9.65573 4.07447C9.84346 3.80618 9.95865 3.49179 9.98 3.17V3C9.98 2.46957 10.1907 1.96086 10.5658 1.58579C10.9409 1.21071 11.4496 1 11.98 1C12.5104 1 13.0191 1.21071 13.3942 1.58579C13.7693 1.96086 13.98 2.46957 13.98 3V3.09C14.0013 3.41179 14.1165 3.72618 14.3043 3.99447C14.492 4.26276 14.7442 4.47324 15.04 4.6C15.3417 4.73312 15.6762 4.77282 16.0006 4.714C16.325 4.65519 16.6257 4.50054 16.86 4.27L16.92 4.21C17.1057 4.02405 17.3263 3.87653 17.5691 3.77588C17.8119 3.67523 18.0722 3.62343 18.335 3.62343C18.5978 3.62343 18.8581 3.67523 19.1009 3.77588C19.3437 3.87653 19.5643 4.02405 19.75 4.21C19.936 4.39575 20.0835 4.61632 20.1841 4.85912C20.2848 5.10192 20.3366 5.36217 20.3366 5.625C20.3366 5.88783 20.2848 6.14808 20.1841 6.39088C20.0835 6.63368 19.936 6.85425 19.75 7.04L19.69 7.1C19.4595 7.33058 19.3048 7.63503 19.246 7.95939C19.1872 8.28376 19.2269 8.61833 19.36 8.92C19.4868 9.21576 19.6972 9.46799 19.9655 9.65573C20.2338 9.84346 20.5482 9.95865 20.87 9.98H21C21.5304 9.98 22.0391 10.1907 22.4142 10.5658C22.7893 10.9409 23 11.4496 23 11.98C23 12.5104 22.7893 13.0191 22.4142 13.3942C22.0391 13.7693 21.5304 13.98 21 13.98H20.91C20.5882 14.0013 20.2738 14.1165 20.0055 14.3043C19.7372 14.492 19.5268 14.7442 19.4 15.04V15.04Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

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

            <button className="w-[30px] h-[30px] bg-[#1D2F29] rounded-full flex items-center justify-center hover:bg-[#2a3f39] transition-colors relative">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
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
              height="19"
              viewBox="0 0 17 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.88889 19C1.36944 19 0.924769 18.814 0.554861 18.4419C0.184954 18.0698 0 17.6225 0 17.1V3.8C0 3.2775 0.184954 2.83021 0.554861 2.45812C0.924769 2.08604 1.36944 1.9 1.88889 1.9H2.83333V0.95C2.83333 0.680833 2.92384 0.455208 3.10486 0.273125C3.28588 0.0910417 3.51019 0 3.77778 0C4.04537 0 4.26968 0.0910417 4.45069 0.273125C4.63171 0.455208 4.72222 0.680833 4.72222 0.95V1.9H12.2778V0.95C12.2778 0.680833 12.3683 0.455208 12.5493 0.273125C12.7303 0.0910417 12.9546 0 13.2222 0C13.4898 0 13.7141 0.0910417 13.8951 0.273125C14.0762 0.455208 14.1667 0.680833 14.1667 0.95V1.9H15.1111C15.6306 1.9 16.0752 2.08604 16.4451 2.45812C16.815 2.83021 17 3.2775 17 3.8V17.1C17 17.6225 16.815 18.0698 16.4451 18.4419C16.0752 18.814 15.6306 19 15.1111 19H1.88889ZM15.1111 17.1V3.8H1.88889V17.1H15.1111ZM5.19444 9.28625V6.175C5.19444 6.04833 5.14722 5.9375 5.05278 5.8425C4.95833 5.7475 4.84815 5.7 4.72222 5.7C4.5963 5.7 4.48611 5.7475 4.39167 5.8425C4.29722 5.9375 4.25 6.04833 4.25 6.175V9.57125C4.25 9.99875 4.3838 10.3827 4.65139 10.7231C4.91898 11.0635 5.25741 11.2892 5.66667 11.4V14.4875C5.66667 14.6933 5.73356 14.8635 5.86736 14.9981C6.00116 15.1327 6.17037 15.2 6.375 15.2C6.57963 15.2 6.74884 15.1327 6.88264 14.9981C7.01644 14.8635 7.08333 14.6933 7.08333 14.4875V11.4C7.49259 11.2892 7.83102 11.0635 8.09861 10.7231C8.3662 10.3827 8.5 9.99875 8.5 9.57125V6.175C8.5 6.04833 8.45278 5.9375 8.35833 5.8425C8.26389 5.7475 8.1537 5.7 8.02778 5.7C7.90185 5.7 7.79167 5.7475 7.69722 5.8425C7.60278 5.9375 7.55556 6.04833 7.55556 6.175V9.28625H6.84722V6.175C6.84722 6.04833 6.8 5.9375 6.70556 5.8425C6.61111 5.7475 6.50093 5.7 6.375 5.7C6.24907 5.7 6.13889 5.7475 6.04444 5.8425C5.95 5.9375 5.90278 6.04833 5.90278 6.175V9.28625H5.19444ZM11.3333 11.4V14.4875C11.3333 14.6933 11.4002 14.8635 11.534 14.9981C11.6678 15.1327 11.837 15.2 12.0417 15.2C12.2463 15.2 12.4155 15.1327 12.5493 14.9981C12.6831 14.8635 12.75 14.6933 12.75 14.4875V6.24625C12.75 6.07208 12.691 5.9375 12.5729 5.8425C12.4549 5.7475 12.3014 5.7 12.1125 5.7C11.9079 5.7 11.6836 5.75542 11.4396 5.86625C11.1956 5.97708 10.9634 6.14333 10.7431 6.365C10.4755 6.63417 10.2708 6.93896 10.1292 7.27938C9.9875 7.61979 9.91667 7.98792 9.91667 8.38375V10.45C9.91667 10.7192 10.0072 10.9448 10.1882 11.1269C10.3692 11.309 10.5935 11.4 10.8611 11.4H11.3333Z"
                fill="#1D2F29"
                className="group-hover:fill-white transition-colors"
              />
            </svg>
            Select Recipes
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
                            d="M17 4H20C21.1046 4 22 4.89543 22 6V12C22 13.1046 21.1046 14 20 14H17L12 20V8L17 4Z"
                            stroke={dislikedRecipes.includes(recipe.id) ? "white" : "#666"}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            transform="scale(1,-1) translate(0,-24)"
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
