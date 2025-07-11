import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface HealthCondition {
  id: string;
  title: string;
}

const healthConditions: HealthCondition[] = [
  { id: "perimenopause-menopause", title: "Perimenopause or Menopause" },
  { id: "high-blood-pressure", title: "High Blood Pressure" },
  { id: "pcos", title: "PCOS" },
  { id: "thyroid-issues", title: "Thyroid Issues" },
  { id: "type-1-diabetes", title: "Type 1 Diabetes" },
  { id: "type-2-diabetes", title: "Type 2 Diabetes" },
  { id: "obesity", title: "Obesity" },
  { id: "auto-immune", title: "Auto-immune Condition" },
  { id: "heart-disease", title: "Heart Disease" },
  { id: "neurodiversity", title: "Neurodiversity" },
  { id: "mental-health", title: "Mental Health Challenges" },
  { id: "cancer", title: "Cancer" },
  { id: "gi-disorder", title: "GI Disorder" },
  { id: "gerd", title: "GERD" },
  { id: "other", title: "Other" },
  { id: "none", title: "None" },
];

export default function OnboardingStep2() {
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const navigate = useNavigate();

  const toggleCondition = (conditionId: string) => {
    setSelectedConditions((prev) => {
      // If selecting "none", clear all other selections
      if (conditionId === "none") {
        return prev.includes("none") ? [] : ["none"];
      }

      // If selecting any other condition, remove "none" if present
      const withoutNone = prev.filter((id) => id !== "none");

      return withoutNone.includes(conditionId)
        ? withoutNone.filter((id) => id !== conditionId)
        : [...withoutNone, conditionId];
    });
  };

  const handleBack = () => {
    navigate("/onboarding");
  };

  const handleNext = () => {
    console.log("Selected conditions:", selectedConditions);
    navigate("/onboarding/step3");
  };

  return (
    <div className="min-h-screen bg-[#E0F1EB] relative">
      {/* Header with FeenX Logo */}
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

      {/* Progress Bar */}
      <div className="w-full max-w-[656px] mx-auto px-4 pt-10 pb-6">
        <div className="relative flex items-center justify-center">
          {/* Progress Lines */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-2 w-full max-w-[590px]">
              <div className="h-1 bg-[#4FA587] flex-1"></div>
              <div className="h-1 bg-[#BDDFD3] flex-1"></div>
              <div className="h-1 bg-[#BDDFD3] flex-1"></div>
            </div>
          </div>

          {/* Step Circles */}
          <div className="relative flex items-center justify-between w-full max-w-[656px]">
            {/* Step 1 - Completed */}
            <div className="w-10 h-10 rounded-full bg-[#4FA587] flex items-center justify-center">
              <span className="text-white font-semibold text-sm">1</span>
            </div>

            {/* Step 2 - Active */}
            <div className="w-10 h-10 rounded-full bg-white border-2 border-[#4FA587] flex items-center justify-center">
              <span className="text-[#4FA587] font-semibold text-sm">2</span>
            </div>

            {/* Step 3 */}
            <div className="w-10 h-10 rounded-full bg-[#BDDFD3] flex items-center justify-center">
              <span className="text-[#94B7AB] font-semibold text-sm">3</span>
            </div>

            {/* Step 4 */}
            <div className="w-10 h-10 rounded-full bg-[#BDDFD3] flex items-center justify-center">
              <span className="text-[#94B7AB] font-semibold text-sm">4</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-[656px] mx-auto px-4 pb-20">
        <div className="text-center mb-8">
          <h1 className="font-display text-4xl font-bold text-[#1D2F29] mb-4">
            Health Considerations
          </h1>
          <p className="text-[#1D2F29] text-lg">
            Help us tailor your nutrition plan to your specific needs.
          </p>
        </div>

        {/* Health Conditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {healthConditions.map((condition) => (
            <button
              key={condition.id}
              onClick={() => toggleCondition(condition.id)}
              className={`h-[57px] px-4 py-[18px] border rounded-xl shadow-sm transition-all duration-200 hover:shadow-md flex items-center justify-center ${
                selectedConditions.includes(condition.id)
                  ? "border-[#E95929] border-2 bg-[#FFF4F1]"
                  : "border-[#4FA587] bg-white"
              }`}
            >
              <span className="font-semibold text-[#1D2F29] text-base text-center">
                {condition.title}
              </span>
            </button>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <Button
            onClick={handleBack}
            variant="outline"
            className="bg-[#BDDFD3] border-none text-[#1D2F29] font-semibold px-8 py-3 rounded-lg shadow-sm hover:bg-[#A8D1C4] transition-colors"
          >
            Back
          </Button>
          <Button
            onClick={handleNext}
            className="bg-[#E95929] hover:bg-[#D54017] text-white font-semibold px-8 py-3 rounded-lg shadow-sm transition-colors"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
