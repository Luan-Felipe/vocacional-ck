import Link from "next/link";
import Card from "./components/card/Card.jsx";
import { Children } from "react";


export default function Home() {
  return (
    <>
      <main className="bg-white h-fit">
        <section>
          <div className="w-screen h-72 bg-yellow-400 text-white text-center flex flex-col justify-center font-semibold">
            <h1 className="text-4xl mb-5">TESTE VOCACIONAL GRÁTIS</h1>
            <p className="xl:text-xl sm:text-xs">
              Descubra quais carreiras combinam com você com o nosso teste
              vocacional.
              <br />É grátis, bora lá?
            </p>
            <Link
              href="/quiz"
              className="text-yellow-400 text-base bg-white w-60 px-2 py-6 mx-auto rounded-full mt-3"
            >
              FAZER TESTE VOCACIONAL
            </Link>
  
          </div>
        </section>
        <section>
          <div className="flex flex-col text-center">
            <h2 className="font-semibold text-4xl mt-8 max-sm:mt-5 text-gray-800">
              Como funciona o teste vocacional?
            </h2>
            <div className="flex flex-row flex-wrap mx-auto justify-center mt-5 max-sm:mt-5 mb-32 min-xl:w-5/6">
              <Card number="1" title="Responda algumas perguntas" description="Vamos entender melhor o que você gosta e não gosta para
                  definir seu perfil."/>
              <Card number="2" title="Descubra seu perfil" description=" Depois de responder as perguntas, vamos gerar seu perfil e
                  quais as principais carreiras para você."/>
              <Card number="3" title="Comece a estudar" description="Agora que você descobriu sua carreira, que tal começar a
                  estudar com bolsas de até 75%?"/>
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
