import { RxCross2 } from "react-icons/rx";
import type { techDataType } from "../../type/type";
import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

interface TypeOfProps {
  sCard: techDataType;
  selectedCard: techDataType[];
  setSelectedCard: Dispatch<SetStateAction<techDataType[]>>;
}

const SelectedDisplay = ({
  sCard,
  setSelectedCard,
  selectedCard,
}: TypeOfProps) => {

  const { icon, name, category, id } = sCard;

  function handleRemoveBtn(){
    const restSelectedCard = selectedCard.filter(card => card.id !== id );

    setSelectedCard(restSelectedCard);

    toast.success(`You removed ${name} from the stack`, {
        position: 'bottom-right'
    })
  }

  return (
    <div>
      <div className=" flex justify-between items-center p-4 min-w-[400px] border-2 border-slate-300 border-solid m-[5px] rounded-[14px]">
        <div className="flex gap-3 ">
          <img className="w-10" src={icon} alt="" />

          <div>
            <h2 className="font-bold">{name}</h2>
            <p className="text-slate-500 ">{category}</p>
          </div>
        </div>

        <span onClick={() => handleRemoveBtn()} className="p-[10px] cursor-pointer">
          <RxCross2 className="text-2xl" />
        </span>
      </div>
    </div>
  );
};

export default SelectedDisplay;
