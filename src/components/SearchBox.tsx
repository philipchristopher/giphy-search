import { useEffect, useRef } from "react";
import { FaMagnifyingGlass } from "../icons/FaMagnifyingGlass";
import { FaSpinner } from "../icons/FaSpinner";

type SearchBoxProps = {
  loading: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  query: string;
};

const SearchBox: React.FC<SearchBoxProps> = ({
  loading,
  onChange,
  onSubmit,
  query,
}) => {
  const refSearch = useRef<HTMLInputElement>(null);

  // Focus the search input on mount
  useEffect(() => {
    refSearch.current?.focus();
  }, []);

  return (
    <div className="flex justify-center">
      <form className="relative w-full md:w-1/2" onSubmit={onSubmit}>
        <input
          ref={refSearch}
          className="border border-gray-300 py-2 rounded-full w-full pl-5 pr-12"
          onChange={onChange}
          placeholder="Search for GIFs"
          type="text"
          value={query}
        />
        <button
          className="bg-blue-500 disabled:bg-slate-500 rounded-full w-8 h-8 flex justify-center items-center absolute right-2 top-1/2 -translate-y-1/2"
          disabled={loading}
          type="submit"
        >
          {loading ? (
            <FaSpinner className="fill-white animate-spin" />
          ) : (
            <FaMagnifyingGlass className="fill-white" />
          )}
        </button>
      </form>
    </div>
  );
};

export { SearchBox };
