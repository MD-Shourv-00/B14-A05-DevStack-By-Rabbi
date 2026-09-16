import type {
  techDataType
} from "../../type/type";
import star from "../../assets/star-icon.png";
import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

interface TypeOfProps {
  data: techDataType;
  selectedCard: techDataType[];
  setSelectedCard: Dispatch<SetStateAction<techDataType[]>>;
}

const TechnologieCard = ({
  data,
  selectedCard,
  setSelectedCard,
}: TypeOfProps) => {
  const {
    id,
    name,
    category,
    description,
    icon,
    rating,
    difficulty,
    badge,
  } = data;

  const isSelected = selectedCard.some((c) => id === c.id);

  function handleSelectedData(data: techDataType) {
    setSelectedCard([...selectedCard, data]);
    toast.success(`You added ${name} in the stack`, {
      theme: "colored",
    });
  }

  return (
    <div className="w-full max-w-[500px] rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <img className="max-w-[42px]" src={icon} alt="" />

        <span className="rounded-full border border-sky-100 bg-sky-50 px-4 py-1.5 text-base font-medium text-sky-500">
          {badge}
        </span>
      </div>

      <div className="mt-7">
        <h2 className="text-3xl font-bold text-slate-900">
          {name}
        </h2>

        <p className="mt-3 text-lg leading-8 text-slate-500">
          {description}
        </p>
      </div>

      <hr className="my-5 border-t border-slate-100" />

      <div className="flex items-center justify-between gap-3">
        <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-base text-slate-600">
          {category}
        </span>

        <span className="text-base text-slate-500">
          {difficulty}
        </span>

        <div className="flex items-center gap-1.5 text-base text-slate-700">
          <img className="w-4" src={star} alt="" />
          {rating}
        </div>
      </div>

      <button
        onClick={() => handleSelectedData(data)}
        className={`cursor-pointer mt-6 w-full rounded-xl bg-[#080d1c] py-3.5 text-lg font-medium text-white transition-all hover:bg-slate-800 ${isSelected ? "btn-selected" : ""}`}
        disabled={isSelected}>
        {isSelected ? "✓ Added to Stack" : "Add to stack"}
      </button>
    </div>
  );
};

export default TechnologieCard;
