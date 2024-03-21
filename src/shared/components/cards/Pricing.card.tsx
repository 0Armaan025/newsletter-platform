import { freePlan } from "@/app/configs/constants";
import { ICONS } from "@/shared/utils/icons";

const PricingCard = ({ active }: { active: string }) => {
  return (
    <div className="w-full md:flex items-center justify-around py-8">
      {/* free plan */}
      <div className="md:w-[400px] bg-white rounded p-5 my-5 md:my-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="33"
          fill="string"
          className="mb-4"
        >
          <path
            fill="#fff"
            stroke="#3843D0"
            stroke-width="3"
            d="M33.398 13.25a6.512 6.512 0 0 1 0 6.5l-4.887 8.487a6.512 6.512 0 0 1-5.643 3.263h-9.736a6.512 6.512 0 0 1-5.643-3.263L2.602 19.75a6.512 6.512 0 0 1 0-6.498l4.887-8.488A6.512 6.512 0 0 1 13.132 1.5h9.736a6.512 6.512 0 0 1 5.643 3.263l4.887 8.488Z"
          ></path>
        </svg>
        <h5 className="font-clashDisplay uppercase text-cyber-ink text-3xl pb-8 border-b border-[#000]">
          Launch
        </h5>
        <br />
        <div className="border pb-8 border-[#000]">
          <h5 className="font-clashDisplay uppercase text-cyber-ink text-3xl">
            $0
          </h5>
          <p className="text-lg">No commitment</p>
        </div>
        <div className="pt-5">
          <p className="text-xl">What&apos;s included... </p>
        </div>
        {freePlan.map((i: PlanType, index: number) => (
          <div key={index} className="flex w-full items-center py-4">
            <span className="text-xl ">{ICONS.right}</span>
            <p className="pl-2 text-lg">{i.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
