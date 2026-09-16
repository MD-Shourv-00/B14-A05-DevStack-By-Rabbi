import { use, useState } from "react";
import type { techDataType } from "../../type/type";
import TechnologieCard from "./TechnologieCard";
import SelectedCard from "./SelectedCard";

interface PromiseProps {
  techDataPromise: Promise<techDataType[]>;
}

const Technologies = ({
    techDataPromise,
}: PromiseProps) => {
    const techData: techDataType[] = use(techDataPromise);
    
    const [selectedCard, setSelectedCard] = useState<techDataType[]>([]);


  return (
    <section id="technologies">
      <div className="mx-auto container justify-center">
        <div>
          {/* text */}
          <h1 className="text-4xl font-bold mb-4">
            Explore the
            <span className="gradient-text">
              Technologies
            </span>
          </h1>

          <p className="text-[18px] text-slate-500">
            Pick one technology per category to build your
            ideal stack.
          </p>
        </div>

        <div className="flex gap-8 my-7">
          {/* technologis card */}
          <div className="grid grid-cols-3 gap-4 ">
            {techData.map((data) => (
              <TechnologieCard
                key={data.id}
                data={data}
                selectedCard={selectedCard}
                setSelectedCard={setSelectedCard}
              />
            ))}
          </div>

          {/* Selected tech card */}
          <div>
            {
              <SelectedCard
                setSelectedCard={setSelectedCard}
                selectedCard={selectedCard}
              />
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
