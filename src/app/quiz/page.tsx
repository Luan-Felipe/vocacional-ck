import ProgressBar from '../progressBar/ProgressBar'
import Response from '../response/Response'

export default function Quiz(){
    return (
        <>
            <ProgressBar/>
            <div className="container text-center items-center flex flex-col h-screen max-xl:max-w-screen-xl">
            <h1 className="font-semibold text-4xl mt-8 max-sm:mt-5 text-gray-800 mb-5">De modo geral, você evita ou não gosta de:</h1>
            <Response letter={"A"} description={"Lorem ipsum dollow sit amet consectetur scelerisque."}/>
            <Response letter={"B"} description={"Lorem ipsum dollow sit amet consectetur scelerisque."}/>
            <Response letter={"C"} description={"Lorem ipsum dollow sit amet consectetur scelerisque."}/>
            <Response letter={"D"} description={"Lorem ipsum dollow sit amet consectetur scelerisque."}/>
            <Response letter={"E"} description={"Lorem ipsum dollow sit amet consectetur scelerisque."}/>
            <Response letter={"F"} description={"Lorem ipsum dollow sit amet consectetur scelerisque."}/>
            <button className="bg-yellow-400 text-base text-white w-60 px-2 py-4 mx-auto rounded-full mt-3 relative inline-block bottom-2">Próxima Pergunta</button>
            </div>           
        </>
    );
}