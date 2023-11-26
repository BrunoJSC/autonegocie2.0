import carSVG from "@/assets/carSVG.svg";
import { Box } from "@/components/Box";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { announce } from "@/constants";
import { Main } from "@/layout/Main";
import { Link } from "react-router-dom";

export function Announce() {
  return (
    <>
      <Header />
      <Main>
        <section className="w-full min-h-screen p-2 relative">
          <div className="w-full max-w-screen-xl mx-auto">
            <div className="max-w-[937px]  mt-12 p-4">
              <h1 className="text-[38px] text-black font-bold text-left mt-10">
                O que é AutoNegocie?
              </h1>
              <p className="text-[16px] text-[#848484] mt-4">
                O AutoNegocie é uma plataforma especializada em negociação de
                veículos, fornecendo uma gama de ferramentas de comunicação e
                recursos de negócios que agilizam o processo de venda do seu
                carro.
              </p>
            </div>

            <div className="w-full md:w-[977px] h-[1307px] bg-gradient-to-t from-green-200 to-white mt-10 p-4 relative mx-auto md:mx-0">
              {announce.map((announce) => (
                <Box
                  key={announce.title}
                  title={announce.title}
                  paragraph={announce.paragraph}
                />
              ))}

              <div className="w-full md:w-[591px] h-[591px] absolute bottom-0 md:-right-36 right-0 hidden md:block">
                <img src={carSVG} alt="car" className="w-full h-full" />
              </div>
            </div>
            <Button className=" mt-10 md:w-[472px] w-full mx-auto" asChild>
              <Link to="/formularios">Anuncie Agora</Link>
            </Button>
          </div>
        </section>
      </Main>
      <Footer />
    </>
  );
}
