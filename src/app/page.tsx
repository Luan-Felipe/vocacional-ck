import Link from "next/link";
import { Noto_Sans_TC } from "next/font/google"

const noto = Noto_Sans_TC({
  subsets: ['latin'],
  weight: "700"
})

export default function Home() {
  return (
    <>
      <main className="bg-white h-fit">
        <section>
          <div className="w-screen h-72 bg-yellow-400 text-white text-center flex flex-col justify-center font-bold">
            <h1 className="text-3xl mb-5">TESTE VOCACIONAL GRÁTIS</h1>
            <p>
              {" "}
              Descubra quais carreiras combinam com você com o nosso teste
              vocacional.
            </p>
            <p>É grátis, bora lá?</p>
            <Link
              href="#"
              className="text-yellow-400 bg-white w-60 p-2 mx-auto rounded-full mt-2"
            >
              FAZER TESTE VOCACIONAL
            </Link>
          </div>
        </section>
        <section>
          <div className="flex flex-col text-center">
            <h2 className="font-bold text-4xl mt-20 text-gray-800">
              Como funciona o teste vocacional?
            </h2>
            <div className="flex mx-auto mt-16 mb-32 w-4/5">
              <div className="w-1/3 h-56 border border-gray-800 mx-3 text-left p-4">
                <div className="w-14 h-14 rounded-full bg-yellow-400 text-white font-noto font-bold justify-center text-4xl flex items-center mb-5">1</div>
                <h3 className="font-bold text-xl text-gray-800 mb-5">
                  Responda algumas perguntas
                </h3>
                <p className="font-thin">Vamos entender melhor o que você gosta <br />e não gosta para definir seu perfil.</p>
              </div>
              <div className="w-1/3 h-56 border border-gray-800 mx-3 text-left p-4">
                <div className="w-14 h-14 rounded-full bg-yellow-400 text-white font-noto font-bold justify-center text-4xl flex items-center mb-5">2</div>
                <h3 className="font-bold text-xl text-gray-800 mb-5">
                  Descubra seu perfil
                </h3>
                <p className="font-thin">Depois de responder as perguntas, vamos gerar seu perfil e quais as principais carreiras para você.</p>
              </div>
              <div className="w-1/3 h-56 border border-gray-800 mx-3 text-left p-4">
                <div className="w-14 h-14 rounded-full bg-yellow-400 text-white font-noto font-bold justify-center text-4xl flex items-center mb-5">3</div>
                <h3 className="font-bold text-xl text-gray-800 mb-5">
                  Comece a estudar
                </h3>
                <p className="font-thin">Agora que você descobriu sua carreira, que tal começar a estudar com bolsas de <br />até 75%?</p>
              </div>
            </div>
            <p className="font-semibold content-end text-gray-800">
              Está com dificuldades? É só clicar no botão abaixo e falar com a
              gente 🙂
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
