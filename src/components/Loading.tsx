import { FaSpinner } from "../icons/FaSpinner";

const Loading = () => {
  return (
    <div className="text center text-purple-500 p-4 bg-purple-100 border-purple-500 border rounded-lg">
      <p className="font-bold flex items-center gap-2 justify-center">
        <FaSpinner className="fill-purple-500 animate-spin" />
        Loading &hellip;
      </p>
    </div>
  );
};

export { Loading };
