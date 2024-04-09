import { FaMagnifyingGlass } from "../icons/FaMagnifyingGlass";

const SearchBox: React.FC = () => {
  return (
    <div className="flex justify-center">
      <form className="relative w-full md:w-1/2">
        <input
          className="border border-gray-300 py-2 rounded-full w-full pl-5 pr-12"
          placeholder="Search for GIFs"
          type="text"
        />
        <button
          className="bg-blue-500 disabled:bg-slate-500 rounded-full w-8 h-8 flex justify-center items-center absolute right-2 top-1/2 -translate-y-1/2"
          type="submit"
        >
          <FaMagnifyingGlass className="fill-white" />
        </button>
      </form>
    </div>
  );
};

export { SearchBox };
