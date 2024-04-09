import { GifCard } from "./GifCard";

const GifList: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <GifCard key={index} />
        ))}
    </div>
  );
};

export { GifList };
