import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export function Banner() {
  return (
    <section className="w-full h-[691px] bg-[url('/src/assets/banner.png')] bg-no-repeat bg-cover">
      <div className="w-full h-full bg-black/50">
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="md:text-[58px] text-4xl font-bold text-white mb-6">
              Encontramos o seu{" "}
              <span className="text-primary ">carro ideal!</span>
            </h1>

            <div className="flex flex-col items-center sm:flex-row justify-center gap-6">
              <Button
                className="bg-primary w-[272px] py-[14px] px-[28px] rounded text-white font-bold"
                asChild
              >
                <Link to="/carros">Catálogo</Link>
              </Button>

              <Button
                variant="secondary"
                className="w-[272px] py-[14px] px-[28px] rounded text-primary font-bold"
                asChild
              >
                <Link to="/anunciar">Anuncie já</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
