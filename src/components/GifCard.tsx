const GifCard: React.FC = () => {
  return (
    <a
      className="flex flex-col justify-start group overflow-hidden w-[200px]"
      href="https://giphy.com/gifs/wildlife-conservation-protection-SU9bFQcnhicdkPmEsU"
      rel="noreferrer noopener"
      target="_blank"
    >
      <img
        width={200}
        height={200}
        src="https://media4.giphy.com/media/SU9bFQcnhicdkPmEsU/200w_d.gif?cid=df3da54avofbung8rumyxe3x8id72jar9gry01g9zj4ssdxi&ep=v1_gifs_trending&rid=200w_d.gif&ct=g"
        alt="Wildlife Conservation Earth GIF by Katharine Kow"
        className="rounded-xl mb-2 bg-slate-200 object-cover h-[200px]"
      />
      <p className="text-transparent transition-colors -mt-9 rounded-b-lg py-1 px-4 font-semibold drop-shadow-md group-hover:bg-slate-800/30 group-hover:text-white text-sm truncate capitalize">
        Wildlife Conservation Earth GIF by Katharine Kow
      </p>
    </a>
  );
};

export { GifCard };
