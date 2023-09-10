export default function Response({ letter, description }) {
  return (
    <div className="flex border justify-center my-3 mx-2 border-gray-300 items-center max-xl: w-fit rounded-lg">
      <div className="w-14 h-14 rounded-full bg-yellow-400 text-white font-noto font-bold justify-center text-4xl flex items-center m-2">
        {letter}
      </div>
      <p className="font-thin">{description}</p>
    </div>
  );
}
