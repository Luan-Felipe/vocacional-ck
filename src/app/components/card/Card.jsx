export default function Card({number, title, description}){
    return (
        <div className="w-96 max-sm:w-11/12 max-sm:mx-0 h-56 border border-gray-400 mx-2 text-left p-4 mb-2">
                <div className="w-14 h-14 rounded-full bg-yellow-400 text-white font-noto font-bold justify-center text-4xl flex items-center mb-5">
                  {number}
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-5">
                  {title}
                </h3>
                <p className="font-thin">
                  {description}
                </p>
        </div>
    )
}