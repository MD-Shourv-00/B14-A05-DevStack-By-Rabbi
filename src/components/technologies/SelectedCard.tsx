import type { Dispatch, SetStateAction } from "react";
import type { techDataType } from "../../type/type";
import SelectedDisplay from "./SelectedDisplay";
import { toast } from "react-toastify";

interface TypeOfProps {
  selectedCard: techDataType[];
  setSelectedCard: Dispatch<SetStateAction<techDataType[]>>;
}

const SelectedCard = ({
  selectedCard,
  setSelectedCard,
}: TypeOfProps) => {

  function handleRemoveAll() {
    setSelectedCard([]);
    toast.success('You empty the stack', {
         theme: 'dark',
         position: 'top-center'
        })
  }

  if (selectedCard.length === 0) {
    return (
      <div className="w-full max-w-[500px] rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="">
          <div className="my-4">
            <h1 className="font-bold text-2xl mb-2">
              Your Stack
            </h1>
            <p className="text-slate-500">
              No technologies selected yet
            </p>
          </div>
          <div>
            <div className="w-[400px] py-[30px] text-center text-slate-500 rounded-[24px] border border-slate-200 ">
              <p>Your stack is empty</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full max-w-[500px] rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="my-4">
          <h1 className="font-bold text-2xl mb-2">
            Your Stack
          </h1>
          <p className="text-slate-500">
            {`${selectedCard.length} technology selected`}
          </p>
        </div>

        {selectedCard.map((sCard) => (
          <SelectedDisplay
            key={sCard.id}
            sCard={sCard}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
        ))}

        <button
          onClick={handleRemoveAll}
          className="btn w-full py-7 rounded-[14px] text-[18px] text-red-900 border-red-900 mt-[50px]">
          Remove All
        </button>
      </div>
    );
  }
};

export default SelectedCard;
