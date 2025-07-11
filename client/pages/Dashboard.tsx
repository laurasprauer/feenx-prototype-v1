import { useState } from "react";
import { Button } from "@/components/ui/button";

interface MealItem {
  id: string;
  name: string;
  type: string;
  calories: string;
  completed: boolean;
}

interface HabitItem {
  id: string;
  name: string;
  description: string;
  completed: boolean;
  color: string;
}

interface MacroItem {
  name: string;
  current: number;
  target: number;
  unit: string;
  color: string;
  progress: number;
}

const meals: MealItem[] = [
  {
    id: "smoothie",
    name: "Smoothie Bowl",
    type: "Breakfast",
    calories: "320 cal",
    completed: true,
  },
  {
    id: "trail-mix",
    name: "Hormone-Balancing Trail Mix",
    type: "Snack",
    calories: "180cal",
    completed: false,
  },
  {
    id: "quinoa-salad",
    name: "Mediterranean Quinoa Salad",
    type: "Lunch",
    calories: "450 cal",
    completed: false,
  },
  {
    id: "salmon",
    name: "Salmon & Sweet Potato",
    type: "Dinner",
    calories: "480cal",
    completed: false,
  },
];

const habits: HabitItem[] = [
  {
    id: "coco5",
    name: "Drink Coco5",
    description: "Smart hydration for strong recovery",
    completed: true,
    color: "#69BCDF",
  },
  {
    id: "movement",
    name: "30 min movement",
    description: "Every step counts—keep moving",
    completed: true,
    color: "#69BCDF",
  },
  {
    id: "supplements",
    name: "Morning supplements & vitamins",
    description: "Support your body, one dose at a time",
    completed: true,
    color: "#69BCDF",
  },
  {
    id: "tea",
    name: "Evening herbal tea",
    description: "Sip, relax, and restore",
    completed: false,
    color: "#D9D9D9",
  },
];

const macros: MacroItem[] = [
  {
    name: "Calories",
    current: 320,
    target: 1650,
    unit: "",
    color: "#8FE9BC",
    progress: 23,
  },
  {
    name: "Fat",
    current: 55,
    target: 65,
    unit: "g",
    color: "#3D7086",
    progress: 85,
  },
  {
    name: "Protein",
    current: 75,
    target: 120,
    unit: "g",
    color: "#69BCDF",
    progress: 63,
  },
  {
    name: "Fiber",
    current: 5,
    target: 30,
    unit: "g",
    color: "#D7CFBA",
    progress: 17,
  },
  {
    name: "Carbs",
    current: 65,
    target: 180,
    unit: "g",
    color: "#4FA587",
    progress: 36,
  },
];

export default function Dashboard() {
  const [selectedMeals, setSelectedMeals] = useState<string[]>(["smoothie"]);
  const [selectedHabits, setSelectedHabits] = useState<string[]>([
    "coco5",
    "movement",
    "supplements",
  ]);

  const toggleMeal = (mealId: string) => {
    setSelectedMeals((prev) =>
      prev.includes(mealId)
        ? prev.filter((id) => id !== mealId)
        : [...prev, mealId],
    );
  };

  const toggleHabit = (habitId: string) => {
    setSelectedHabits((prev) =>
      prev.includes(habitId)
        ? prev.filter((id) => id !== habitId)
        : [...prev, habitId],
    );
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
            d="M12.1242 34.256L17.8951 18.7094C17.902 18.6914 17.918 18.6793 17.9361 18.6793H18.1767C18.2012 18.6793 18.2204 18.7007 18.2209 18.7267C18.2209 18.8139 18.231 27.4676 18.231 28.1317C18.231 29.4582 17.9116 30.6091 17.2819 31.5533C16.7783 32.3081 16.0767 32.9324 15.1962 33.4088C13.7004 34.2179 12.1838 34.3201 12.1684 34.3212C12.1673 34.3212 12.1668 34.3212 12.1657 34.3212C12.1513 34.3212 12.138 34.3137 12.1301 34.3016C12.1215 34.2883 12.1194 34.271 12.1247 34.256H12.1242Z"
            fill="white"
          />
          <path
            d="M5.68462 29.96L16.7857 18.3039C16.7985 18.2906 16.8176 18.2866 16.8342 18.2947L17.054 18.4009C17.0764 18.4119 17.0859 18.4396 17.0764 18.4639C17.0439 18.5436 13.8084 26.4535 13.5593 27.0598C13.0621 28.2714 12.3387 29.1821 11.4092 29.7671C10.6661 30.2349 9.79097 30.4953 8.8083 30.5421C7.1384 30.6212 5.71443 30.0455 5.70006 30.0397C5.69953 30.0397 5.69846 30.0391 5.69793 30.0385C5.68516 30.0322 5.67557 30.0195 5.67291 30.0045C5.66972 29.9883 5.67451 29.9721 5.68516 29.9606L5.68462 29.96Z"
            fill="white"
          />
          <path
            d="M1.41283 23.1936L15.924 17.4435C15.941 17.4365 15.9597 17.4417 15.9719 17.4562L16.1327 17.6502C16.1486 17.6698 16.1476 17.6999 16.1295 17.7178C16.0698 17.7761 10.1483 23.5747 9.69367 24.0188C8.78499 24.9064 7.78262 25.4192 6.71478 25.5434C5.8604 25.6427 4.96343 25.4943 4.04784 25.1033C2.49239 24.4386 1.40804 23.2842 1.39686 23.2727C1.39633 23.2721 1.3958 23.2715 1.39527 23.2709C1.38568 23.2594 1.38196 23.2438 1.38515 23.2288C1.38835 23.2126 1.39899 23.1999 1.41283 23.1941V23.1936Z"
            fill="white"
          />
          <path
            d="M0.0474993 15.1278L15.4599 16.2776C15.478 16.2788 15.4929 16.292 15.4987 16.3105L15.5733 16.5583C15.5807 16.5831 15.5679 16.6102 15.5451 16.6183C15.4684 16.6455 7.88544 19.3296 7.30308 19.5346C6.14048 19.9447 5.03218 19.9707 4.01012 19.6126C3.19247 19.3262 2.42858 18.7955 1.73869 18.0337C0.567047 16.7402 0.00863955 15.2069 0.00331631 15.1919C0.00331631 15.1913 0.00278376 15.1902 0.00225143 15.1896C-0.00200716 15.1752 0.000121878 15.159 0.00863906 15.1469C0.0176886 15.1336 0.0320614 15.1267 0.0469665 15.1278H0.0474993Z"
            fill="white"
          />
          <path
            d="M1.82369 7.15607L15.4725 15.0076C15.4884 15.0169 15.4975 15.0354 15.4954 15.055L15.4704 15.3143C15.4677 15.3403 15.4464 15.3593 15.4219 15.357C15.3421 15.3478 7.40777 14.4538 6.79932 14.3845C5.5835 14.2459 4.56143 13.7811 3.76188 13.0026C3.12256 12.3801 2.62324 11.5577 2.27883 10.5581C1.69327 8.85909 1.75822 7.21267 1.75928 7.19592C1.75928 7.19476 1.75928 7.19419 1.75928 7.19303C1.76088 7.17802 1.76886 7.16416 1.7811 7.15665C1.79441 7.14857 1.81038 7.14857 1.82369 7.15607Z"
            fill="white"
          />
          <path
            d="M6.43529 0.657504L15.9607 13.8526C15.9719 13.8682 15.9729 13.889 15.9639 13.9057L15.8436 14.1315C15.8313 14.1541 15.8047 14.1621 15.7834 14.1489C15.7137 14.1055 8.80094 9.78764 8.27074 9.45558C7.21195 8.79262 6.45285 7.91657 6.01369 6.85283C5.66288 6.00219 5.51543 5.03085 5.57558 3.96537C5.67779 2.15494 6.35437 0.679449 6.36129 0.664434C6.36129 0.663856 6.36183 0.662701 6.36236 0.662124C6.36928 0.648841 6.38206 0.640179 6.3959 0.638446C6.4108 0.636714 6.42571 0.643644 6.43475 0.656349L6.43529 0.657504Z"
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
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* User Greeting */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-[60px] h-[60px] rounded-full border border-[#1D2F29] bg-white shadow-md overflow-hidden">
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
                  d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5842 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6642 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6642 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Messages */}
            <button className="w-[30px] h-[30px] bg-[#1D2F29] rounded-full flex items-center justify-center hover:bg-[#2a3f39] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Today's Health Snapshot */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-[#4FA587] shadow-sm">
              <div className="bg-[#1D2F29] text-white p-4 rounded-t-lg">
                <h2 className="text-lg font-bold">Today's Health Snapshot</h2>
              </div>
              <div className="p-4 space-y-4">
                {/* 8 Day Streak */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-[#E95929] rounded-full flex items-center justify-center">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                      <path
                        d="M6.0488 17.4573C4.88723 18.068 3.52962 17.0816 3.75147 15.7882L4.41058 11.9452L1.61852 9.22364C0.678784 8.30763 1.19734 6.71167 2.49602 6.52296L6.35456 5.96228L8.08015 2.46586C8.66094 1.28905 10.339 1.28905 10.9198 2.46586L12.6454 5.96228L16.5039 6.52296C17.8026 6.71167 18.3212 8.30763 17.3814 9.22364L14.5894 11.9452L15.2485 15.7882C15.4703 17.0816 14.1127 18.068 12.9512 17.4573L9.49998 15.6429L6.0488 17.4573Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#1D2F29] text-base">
                      8 Day Streak
                    </h3>
                    <p className="text-[#676767] text-sm">
                      Your staying on track with your health and nutrition
                      goals!
                    </p>
                  </div>
                </div>

                <div className="h-px bg-[#D9D9D9] rounded-full"></div>

                {/* Meal Tracker */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-[#4FA587] rounded-full flex items-center justify-center">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                      <path
                        d="M17.363 11.8123C17.363 9.91849 17.0722 8.54563 16.5588 7.65023C16.0822 6.81899 15.3917 6.3514 14.3472 6.25787C13.8904 6.21695 13.3994 6.32735 12.7314 6.50982C12.1252 6.6754 11.3225 6.91813 10.5 6.91813C9.67678 6.91813 8.87297 6.67375 8.26763 6.50791C7.59998 6.32499 7.11081 6.21532 6.65654 6.2575C5.68106 6.34904 4.98019 6.81093 4.48209 7.65925C3.95389 8.55884 3.63702 9.93355 3.63702 11.8123C3.63702 13.2251 4.21749 15.0194 5.05631 16.475C5.4715 17.1953 5.92216 17.7833 6.34565 18.1771C6.79618 18.596 7.08388 18.6753 7.18592 18.6753C7.93538 18.6753 8.29761 18.4989 8.62974 18.3125C8.98577 18.1128 9.58621 17.6909 10.5 17.6909C11.4138 17.6909 12.0141 18.1128 12.3701 18.3127C12.7021 18.4989 13.0643 18.6753 13.814 18.6753C13.9162 18.6753 14.204 18.596 14.6545 18.1771C15.0779 17.7833 15.5286 17.1955 15.9437 16.475C16.7826 15.0195 17.363 13.2251 17.363 11.8123Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#1D2F29] text-base">
                      Meal Tracker
                    </h3>
                    <p className="text-[#676767] text-sm">
                      One meal down, three to go.
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex-1 bg-[#4FA587]/30 h-1 rounded-full">
                        <div
                          className="bg-[#4FA587] h-1 rounded-full"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                      <span className="text-xs bg-[#4FA587] text-white px-1 py-0.5 rounded">
                        1/4
                      </span>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-[#D9D9D9] rounded-full"></div>

                {/* Energy Check-In */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-[#D7CFBA] rounded-full flex items-center justify-center">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path
                        d="M9.67085 16.6832L14.4146 10.9999H10.7479L11.4125 5.79781L7.17293 11.9166H10.3583L9.67085 16.6832ZM8.25001 13.7499H5.40835C5.04168 13.7499 4.7705 13.5857 4.5948 13.2572C4.41911 12.9287 4.43821 12.6117 4.6521 12.3061L11.5042 2.45198C11.657 2.23809 11.8556 2.08913 12.1 2.00511C12.3445 1.92108 12.5965 1.9249 12.8563 2.01656C13.116 2.10823 13.307 2.26865 13.4292 2.49781C13.5514 2.72698 13.5972 2.97142 13.5667 3.23115L12.8333 9.16656H16.3854C16.7827 9.16656 17.0615 9.34226 17.2219 9.69365C17.3823 10.045 17.3327 10.3735 17.0729 10.6791L9.53335 19.7082C9.36529 19.9068 9.15904 20.0367 8.9146 20.0978C8.67015 20.1589 8.43335 20.136 8.20418 20.0291C7.97501 19.9221 7.7955 19.7579 7.66564 19.5364C7.53578 19.3148 7.48612 19.0742 7.51668 18.8145L8.25001 13.7499Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#1D2F29] text-base">
                      Energy Check-In
                    </h3>
                    <p className="text-[#676767] text-sm">
                      Record your energy to stay in tune with your body.
                    </p>
                    <Button className="mt-2 bg-[#D7CFBA] hover:bg-[#C7BFAA] text-black text-xs px-3 py-1 h-auto">
                      Log →
                    </Button>
                  </div>
                </div>

                <div className="h-px bg-[#D9D9D9] rounded-full"></div>

                {/* Healthy Habits */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-[#69BCDF] rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M19 13C20.1046 13 21 12.1046 21 11C21 9.89543 20.1046 9 19 9C17.8954 9 17 9.89543 17 11C17 12.1046 17.8954 13 19 13Z"
                        fill="white"
                      />
                      <path
                        d="M28 21V19C25.76 19 23.84 18.04 22.4 16.32L21.06 14.72C20.68 14.26 20.12 14 19.53 14H18.48C17.89 14 17.33 14.26 16.95 14.72L15.61 16.32C14.16 18.04 12.24 19 10 19V21C12.77 21 15.19 19.83 17 17.75V20L13.12 21.55C12.45 21.82 12 22.48 12 23.21C12 24.2 12.8 25 13.79 25H16V24.5C16 23.12 17.12 22 18.5 22H21.5C21.78 22 22 22.22 22 22.5C22 22.78 21.78 23 21.5 23H18.5C17.67 23 17 23.67 17 24.5V25H24.21C25.2 25 26 24.2 26 23.21C26 22.48 25.55 21.82 24.88 21.55L21 20V17.75C22.81 19.83 25.23 21 28 21Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#1D2F29] text-base">
                      Healthy Habits
                    </h3>
                    <p className="text-[#676767] text-sm">Almost there!</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex-1 bg-[#69BCDF]/30 h-1 rounded-full">
                        <div
                          className="bg-[#69BCDF] h-1 rounded-full"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                      <span className="text-xs bg-[#69BCDF] text-white px-1 py-0.5 rounded">
                        3/4
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coach's Corner and Today's Meals */}
          <div className="lg:col-span-2 space-y-6">
            {/* Coach's Corner */}
            <div className="relative">
              <div className="bg-gradient-to-b from-[#4FA587] to-[#3C504B] rounded-t-lg p-6 text-white relative">
                <div className="relative inline-block mb-4">
                  <div
                    className="bg-[#1D2F29] text-white pl-6 pr-10 py-3 text-sm font-semibold relative"
                    style={{
                      borderRadius: "8px 0 0 8px",
                    }}
                  >
                    Coach's Corner
                    <div
                      className="absolute top-1/2 -right-2 w-4 h-4 bg-[#1D2F29] transform -translate-y-1/2 rotate-45"
                      style={{
                        borderRadius: "0 6px 0 0",
                      }}
                    ></div>
                  </div>
                </div>
                <p className="text-base mb-4">
                  Your energy levels have been steady this week! Consider adding
                  some magnesium-rich foods today to support your hormonal
                  balance.
                </p>
                <div
                  className="absolute left-6 z-10"
                  style={{ bottom: "-94px" }}
                >
                  <svg
                    width="66"
                    height="63"
                    viewBox="0 0 66 63"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_45_714)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M65.8436 0.0581055V56.7771C65.8436 60.1414 63.0982 62.8688 59.7116 62.8688C57.9743 62.8688 56.3186 62.1367 55.1558 60.8545L0.0194702 0.0581055H65.8436Z"
                        fill="#1D2F29"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_45_714">
                        <rect width="66" height="63" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="bg-[#1D2F29] h-12 rounded-b-lg flex items-center justify-end px-6">
                <Button className="bg-[#8FE9BC] hover:bg-[#7FD9AC] text-black text-xs px-4 py-1 h-auto">
                  Learn More →
                </Button>
              </div>
              <div
                className="bg-[#CBE3DA] rounded-lg border border-[#1D2F29] shadow-md p-4 flex items-start gap-4 ml-auto"
                style={{ maxWidth: "558px", marginTop: "12px" }}
              >
                <div className="w-16 h-16 rounded-full border border-[#1D2F29] bg-white overflow-hidden flex-shrink-0">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F266bc377e3374574a92ed7ad03b8b7e7%2F132c9b9b6b8d4ff5b9b6c416e1449cc2?format=webp&width=800"
                    alt="Coach Avery"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-black/50 mb-2">
                    AI Insights from Coach Avery
                  </p>
                  <p className="text-sm text-black/80 mb-3">
                    I'm here to cheer you on and make sure you're feeling your
                    best, inside and out.
                  </p>
                  <Button className="bg-[#406057] hover:bg-[#365147] text-white text-xs px-4 py-1 h-auto flex items-center gap-2">
                    Chat with Avery
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>

            {/* Personal Trainer */}
            <div className="bg-white rounded-lg border border-[#1D2F29] shadow-sm flex">
              <div className="bg-[#1D2F29] rounded-l-lg p-4 flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-full border border-[#BBC1BF] bg-white overflow-hidden mb-2">
                  <img
                    src="https://cdn.builder.io/o/assets%2F266bc377e3374574a92ed7ad03b8b7e7%2F1f0195745982498688010df9715aa959?alt=media&token=2aa0d0c5-3409-4c2e-9692-bd68aec1963d&apiKey=266bc377e3374574a92ed7ad03b8b7e7"
                    alt="Marcus"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-white text-xs">Marcus</p>
                <p className="text-white/70 text-xs">Crunch Fitness</p>
              </div>
              <div className="flex-1 p-4">
                <h3 className="font-semibold text-[#1D2F29] text-sm mb-1">
                  Connect with Your Personal Trainer
                </h3>
                <p className="text-[#1D2F29]/80 text-xs mb-3">
                  Keep the momentum going, together
                </p>
                <Button className="bg-[#4FA587] hover:bg-[#3F8F77] text-white text-xs px-4 py-1 h-auto flex items-center gap-2">
                  Chat with Marcus
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </div>
            </div>

            {/* Today's Meals */}
            <div className="bg-white rounded-lg border border-[#4FA587] shadow-sm">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-lg font-bold text-[#1D2F29]">
                    Today's Meals
                  </h2>
                  <div className="flex items-center gap-2">
                    <Button className="bg-[#4FA587] hover:bg-[#3F8F77] text-white text-xs px-3 py-1 h-auto">
                      View Meal Plan →
                    </Button>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-[#4FA587]/30 h-1 rounded-full w-20">
                        <div
                          className="bg-[#4FA587] h-1 rounded-full"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                      <span className="text-xs bg-[#1D2F29] text-white px-2 py-1 rounded">
                        1/4
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {meals.map((meal) => (
                    <button
                      key={meal.id}
                      onClick={() => toggleMeal(meal.id)}
                      className={`p-4 rounded-lg border transition-all duration-300 text-left ${
                        selectedMeals.includes(meal.id)
                          ? "border-[#4FA587] bg-[#E0F1EB]"
                          : "border-[#D9D9D9] bg-white hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center ${
                            selectedMeals.includes(meal.id)
                              ? "bg-[#4FA587]"
                              : "bg-[#F1F1F1] border border-[#D9D9D9]"
                          }`}
                        >
                          {selectedMeals.includes(meal.id) && (
                            <svg
                              width="11"
                              height="8"
                              viewBox="0 0 11 8"
                              fill="none"
                            >
                              <path
                                d="M9.70071 0.36792C9.98646 0.368121 10.2391 0.47908 10.4393 0.676026C10.6427 0.876217 10.756 1.13197 10.7561 1.42114C10.7561 1.63818 10.6923 1.83676 10.5747 2.00674L10.4393 2.16626L4.86295 7.66827C4.66269 7.86519 4.41019 7.97624 4.12439 7.97638C3.83826 7.97638 3.58405 7.86546 3.38366 7.66827L0.770305 5.09645C0.564006 4.89317 0.453294 4.63189 0.462199 4.33822C0.470948 4.05423 0.585463 3.80327 0.785587 3.60621C0.988843 3.40625 1.24589 3.29824 1.5329 3.29813C1.82001 3.29813 2.07686 3.40625 2.28018 3.60621L2.28238 3.60841L4.12439 5.43295L8.95996 0.676026C9.16037 0.478834 9.41458 0.36792 9.70071 0.36792Z"
                                fill="white"
                              />
                            </svg>
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-[#1D2F29] text-sm mb-1">
                            {meal.name}
                          </h3>
                          <div className="flex items-center gap-2 text-[#676767] text-xs">
                            <span>{meal.type}</span>
                            <div className="w-1 h-1 bg-[#E0E0E0] rounded-full"></div>
                            <span>{meal.calories}</span>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-6">
                  <Button className="flex-1 bg-[#8FE9BC] hover:bg-[#7FD9AC] text-[#1D2F29] font-semibold px-4 py-3 rounded-lg">
                    <svg
                      width="17"
                      height="19"
                      viewBox="0 0 17 19"
                      fill="none"
                      className="mr-2"
                    >
                      <path
                        d="M1.88889 19C1.36944 19 0.924769 18.814 0.554861 18.4419C0.184954 18.0698 0 17.6225 0 17.1V3.8C0 3.2775 0.184954 2.83021 0.554861 2.45812C0.924769 2.08604 1.36944 1.9 1.88889 1.9H2.83333V0.95C2.83333 0.680833 2.92384 0.455208 3.10486 0.273125C3.28588 0.0910417 3.51019 0 3.77778 0C4.04537 0 4.26968 0.0910417 4.45069 0.273125C4.63171 0.455208 4.72222 0.680833 4.72222 0.95V1.9H12.2778V0.95C12.2778 0.680833 12.3683 0.455208 12.5493 0.273125C12.7303 0.0910417 12.9546 0 13.2222 0C13.4898 0 13.7141 0.0910417 13.8951 0.273125C14.0762 0.455208 14.1667 0.680833 14.1667 0.95V1.9H15.1111C15.6306 1.9 16.0752 2.08604 16.4451 2.45812C16.815 2.83021 17 3.2775 17 3.8V17.1C17 17.6225 16.815 18.0698 16.4451 18.4419C16.0752 18.814 15.6306 19 15.1111 19H1.88889ZM15.1111 17.1V3.8H1.88889V17.1H15.1111Z"
                        fill="currentColor"
                      />
                    </svg>
                    Meal Prep Blueprint
                  </Button>
                  <Button className="flex-1 bg-[#C7F8C5] hover:bg-[#B7E8B5] text-[#1D2F29] font-semibold px-4 py-3 rounded-lg">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      className="mr-2"
                    >
                      <path
                        d="M13.3 19C11.7167 19 10.3708 18.4458 9.2625 17.3375C8.15417 16.2292 7.6 14.8833 7.6 13.3C7.6 11.7167 8.15417 10.3708 9.2625 9.2625C10.3708 8.15417 11.7167 7.6 13.3 7.6C14.8833 7.6 16.2292 8.15417 17.3375 9.2625C18.4458 10.3708 19 11.7167 19 13.3C19 14.8833 18.4458 16.2292 17.3375 17.3375C16.2292 18.4458 14.8833 19 13.3 19Z"
                        fill="currentColor"
                      />
                    </svg>
                    Grocery Game Plan
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Healthy Habits */}
          <div className="bg-white rounded-lg border border-[#4FA587] shadow-sm">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-lg font-bold text-[#1D2F29]">
                  Healthy Habits
                </h2>
                <div className="flex items-center gap-2">
                  <Button className="bg-[#69BCDF] hover:bg-[#59ACCF] text-white text-xs px-3 py-1 h-auto">
                    Edit Your Habits →
                  </Button>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-[#69BCDF]/30 h-1 rounded-full w-20">
                      <div
                        className="bg-[#69BCDF] h-1 rounded-full"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                    <span className="text-xs bg-[#1D2F29] text-white px-2 py-1 rounded">
                      3/4
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {habits.map((habit) => (
                  <button
                    key={habit.id}
                    onClick={() => toggleHabit(habit.id)}
                    className={`p-4 rounded-lg border transition-all duration-300 text-left ${
                      selectedHabits.includes(habit.id)
                        ? "border-[#69BCDF] bg-[#ECF9FF]"
                        : "border-[#D9D9D9] bg-white hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center ${
                          selectedHabits.includes(habit.id)
                            ? "bg-[#69BCDF]"
                            : "bg-[#F1F1F1] border border-[#D9D9D9]"
                        }`}
                      >
                        {selectedHabits.includes(habit.id) && (
                          <svg
                            width="11"
                            height="8"
                            viewBox="0 0 11 8"
                            fill="none"
                          >
                            <path
                              d="M9.70071 0.36792C9.98646 0.368121 10.2391 0.47908 10.4393 0.676026C10.6427 0.876217 10.756 1.13197 10.7561 1.42114C10.7561 1.63818 10.6923 1.83676 10.5747 2.00674L10.4393 2.16626L4.86295 7.66827C4.66269 7.86519 4.41019 7.97624 4.12439 7.97638C3.83826 7.97638 3.58405 7.86546 3.38366 7.66827L0.770305 5.09645C0.564006 4.89317 0.453294 4.63189 0.462199 4.33822C0.470948 4.05423 0.585463 3.80327 0.785587 3.60621C0.988843 3.40625 1.24589 3.29824 1.5329 3.29813C1.82001 3.29813 2.07686 3.40625 2.28018 3.60621L2.28238 3.60841L4.12439 5.43295L8.95996 0.676026C9.16037 0.478834 9.41458 0.36792 9.70071 0.36792Z"
                              fill="white"
                            />
                          </svg>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#1D2F29] text-sm mb-1">
                          {habit.name}
                        </h3>
                        <p className="text-[#676767] text-xs">
                          {habit.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Daily Macros */}
          <div className="bg-white rounded-lg border border-[#4FA587] shadow-sm">
            <div className="p-6">
              <h2 className="text-lg font-bold text-[#1D2F29] mb-6">
                Daily Macros
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {macros.map((macro, index) => (
                  <div key={macro.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-black">{macro.name}</span>
                      <span className="text-sm text-black">
                        {macro.current} / {macro.target}
                        {macro.unit ? ` ${macro.unit}` : ""}
                      </span>
                    </div>
                    <div className="relative">
                      <div
                        className="h-1 rounded-full"
                        style={{ backgroundColor: `${macro.color}30` }}
                      >
                        <div
                          className="h-1 rounded-full"
                          style={{
                            backgroundColor: macro.color,
                            width: `${macro.progress}%`,
                          }}
                        ></div>
                      </div>
                      <div
                        className="absolute w-2.5 h-2.5 rounded-full -top-1"
                        style={{
                          backgroundColor: macro.color,
                          left: `${macro.progress}%`,
                          transform: "translateX(-50%)",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
